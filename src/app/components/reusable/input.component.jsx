import React from 'react';

import { makeStyles } from '@material-ui/core';
import { Icon, InputBase, MenuItem, Paper } from '@material-ui/core';

import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    marginTop: 15,
  },
  input: props => ({
    marginLeft: theme.spacing(0.5),
    flex: 1,
    marginTop: props.rows || props.autoSuggest ? 10 : 0,
  }),
  icon: {
    padding: 10,
    paddingTop: 13,
    paddingBottom: 7,
    color: theme.palette.grey[700],
  },
  suggestionsContainer: {
    position: 'relative',
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
  },

  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
}));

const Suggestion = ({ label, query, isHighlighted }) => {
  const matches = match(label, query);
  const parts = parse(label, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map(part => (
          <span key={part.text} style={{ fontWeight: part.highlight ? 500 : 400 }}>
            {part.text}
          </span>
        ))}
      </div>
    </MenuItem>
  );
};

const Input = props => {
  const {
    leadingIcon,
    trailingIcon,
    elevation,
    disabled,
    label,
    placeholder,
    rows,
    autoSuggest,
    style,
    type,
    value,
    onChange,
    onClick,
  } = props;
  const classes = useStyles({ autoSuggest, rows });

  const [suggestions, setSuggestions] = React.useState([]);

  const autosuggestProps = {
    suggestions,
    onSuggestionsFetchRequested: ({ value }) => setSuggestions(getSuggestions(value)),
    onSuggestionsClearRequested: () => setSuggestions([]),
    getSuggestionValue: suggestion => suggestion.label,
  };

  const getSuggestions = value => {
    if (!value) return [];
    const inputValue = value.trim().toLowerCase();

    return autoSuggest
      .filter(suggestion => suggestion.toLowerCase().includes(inputValue))
      .slice(0, 5)
      .map(label => ({
        label,
      }));
  };

  const handleChange = newValue => {
    if (newValue.target) newValue = newValue.target.value;
    onChange(newValue);
  };

  return (
    <Paper className={classes.root} elevation={elevation} style={style}>
      {leadingIcon && (
        <div className={classes.icon}>
          <Icon>{leadingIcon}</Icon>
        </div>
      )}

      {(autoSuggest && (
        <Autosuggest
          {...autosuggestProps}
          inputProps={{
            placeholder,
            value,
            onChange: handleChange,
            disabled,
          }}
          renderInputComponent={inputProps => <InputBase className={classes.input} {...inputProps} />}
          renderSuggestionsContainer={options => <Paper {...options.containerProps}>{options.children}</Paper>}
          renderSuggestion={(suggestionProps, suggestionMatch) => (
            <Suggestion {...suggestionProps} {...suggestionMatch} />
          )}
          theme={{
            container: classes.suggestionsContainer,
            suggestionsContainerOpen: classes.suggestionsContainerOpen,
            suggestionsList: classes.suggestionsList,
            input: classes.input,
          }}
        />
      )) ||
        (type === 'date' && (
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              autoOk
              clearable
              disablePast
              disableToolbar
              className={classes.input}
              disabled={disabled}
              placeholder={placeholder}
              value={value}
              onChange={handleChange}
              TextFieldComponent={inputProps => (
                <InputBase className={classes.input} value={inputProps.value} onClick={inputProps.onClick} />
              )}
            />
          </MuiPickersUtilsProvider>
        )) || (
          <InputBase
            className={classes.input}
            disabled={disabled}
            label={label}
            placeholder={placeholder}
            multiline={rows > 0}
            rows={rows}
            rowsMax={rows}
            type={type}
            value={value}
            onChange={handleChange}
            onClick={onClick}
          />
        )}

      {trailingIcon && (
        <div className={classes.icon}>
          <Icon>{trailingIcon}</Icon>
        </div>
      )}
    </Paper>
  );
};

export { Input };
