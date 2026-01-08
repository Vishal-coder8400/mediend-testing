export type Blog = {
  _createdAt: string;
  _updatedAt: string;
  _id: string;
  _rev: string;
  _type: "blogs";
  mainContent: {
    coverImage: {
      _type: string;
      asset: {
        _ref: string;
        _type: string;
      };
    };
    blogLink: string;
    title: string;
    shortInfo: string;
    blogtype: "latest_article" | "news_media";
    publishDate: string;
  };
  content: ContentType[];
};

export type ContentType =
  | HeadingType
  | TextType
  | ImageType
  | ListType
  | TableType;

export type HeadingType = {
  _key: string;
  _type: "heading";
  info: string;
  level: number;
};

export type TextType = {
  _key: string;
  _type: "info";
  body: string;
};

export type ImageType = {
  _key: string;
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
};

export type ListType = {
  _key: string;
  _type: "list";
  items: string[];
  ordered: boolean;
};

export type TableType = {
  _key: string;
  _type: "table";
  rows: RowType[];
};

export type RowType = {
  _key: string;
  cells: string[];
};
