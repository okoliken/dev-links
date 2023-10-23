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
  width?: string;

}
// end

export interface Link {
  link: string
  title: string
  color: string
  id: string
  icon: string;
}
// Input type

export interface DevInput {
    name:string;
    type:string;
    icon?:string;
    placeholder:string;
    rules?: { url: string };
  modelValue?: any;
  disabled?: boolean | any;
}

export interface DevSelect {
  options: SelectOptions[] | [];
  value?:Link
}

export interface Tags {
  text: string;
  icon:string;
}