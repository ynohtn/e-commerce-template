export interface ProductType {
  id: string;
  name: string;
  price: number;
  images: ImageType[];
}

export interface ImageType {
  url: string;
  alt: string;
}

export interface DropdownType {
  text: string;
  dropdown: DropdownItemType[];
}

export interface DropdownItemType {
  text: string;
  href: string;
}
