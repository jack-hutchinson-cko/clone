export interface Tag<Type> {
  type: Type;
}

export type RequestTagProps = Tag<'post' | 'get' | 'delete'>;

export type StatusTagProps = Tag<'optional' | 'required' | 'recommended'>;

export type TypeTagProps = Tag<string>;

export type TagWrapperProps = (StatusTagProps | RequestTagProps | TypeTagProps) & {
  variant: 'status' | 'type' | 'request';
};
