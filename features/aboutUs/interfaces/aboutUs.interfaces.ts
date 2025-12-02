export interface IAboutUsExperience {
  id: number;
  documentId: string;
  company: string;
  logoUrl?: IAboutUsLogoUrlImage;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface IAboutUsLogoUrlImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: ProviderMetadata;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}
export interface Formats {
  large: Large;
  small: Large;
  medium: Large;
  thumbnail: Large;
}

export interface Large {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
  provider_metadata: ProviderMetadata;
}

export interface ProviderMetadata {
  public_id: string;
  resource_type: string;
}

export interface IAboutUsCertification {
  id: number;
  documentId: string;
  provider: string;
  name: string;
  type: string;
  urlCertification: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  imageUrl: IAboutUsCertificationImage;
}
export interface IAboutUsCertificationImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: ProviderMetadata;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}
export interface ProviderMetadata {
  public_id: string;
  resource_type: string;
}

export interface IAboutUsExperienceResponse {
  data: IAboutUsExperience[];
  meta: IMetaPagination;
}

export interface IAboutUsCertificationResponse {
  data: IAboutUsCertification[];
  meta: IMetaPagination;
}

export interface IMetaPagination {
  pagination: IPagination;
}

export interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
