export interface Tag<Type> {
  type: Type;
}

export type RequestTagProps = Tag<'post' | 'get' | 'delete' | 'put' | 'patch'>;

export type StatusTagProps = Tag<'optional' | 'required' | 'recommended' | 'conditional'>;

export type TypeTagProps = Tag<string>;

export type SectionTagProps = {
  title: string;
  url: string;
};

export type TagWrapperProps = (StatusTagProps | RequestTagProps | TypeTagProps) & {
  variant: 'status' | 'type' | 'request';
};
