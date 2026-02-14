export interface IContactTopic {
  id: number;
  documentId: string;
  title: string;
  title_es: string;
  id_topic: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface IContactTopicsResponse {
  data: IContactTopic[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
