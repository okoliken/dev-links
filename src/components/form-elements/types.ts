

// Button type
export type buttonType = 'filled' | 'outlined';

export interface DevButton {
  disabled?: boolean;
  type: buttonType;
  isLoading?:boolean;
  width?:string
}
// end

// Input type

export interface DevInput {
    name:string;
    type:string;
    
    icon:string;
    placeholder:string
}

export interface DevSelect {
  options: string[];
}