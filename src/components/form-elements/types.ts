

// Button type
export type buttonType = 'filled' | 'outlined';
export interface SelectOptions  {
  icon:string,
  title:string,
}
export interface DevButton {
  disabled?: boolean | any;
  type: buttonType;
  isLoading?:boolean;
  width?:string
}
// end

// Input type

export interface DevInput {
    name:string;
    type:string;
    icon?:string;
    placeholder:string
}

export interface DevSelect {
  options: SelectOptions[] | [];
}

export interface Tags {
  text: string;
  icon:string;
}