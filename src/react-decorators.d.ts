declare type ComponentDecorator<P = {}, C = any> = (WrappedComponent: React.ComponentType<P, C>) => void;
