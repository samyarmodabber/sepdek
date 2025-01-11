// NOTE This file is auto-generated by Contentlayer

import type { Markdown, MDX, ImageFieldData, IsoDateTimeString } from 'contentlayer2/core'
import * as Local from 'contentlayer2/source-files'

export { isType } from 'contentlayer2/client'

export type { Markdown, MDX, ImageFieldData, IsoDateTimeString }

/** Document types */
export type Authors = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Authors'
  name: string
  avatar?: string | undefined
  occupation?: string | undefined
  company?: string | undefined
  email?: string | undefined
  linkedin?: string | undefined
  github?: string | undefined
  twitter?: string | undefined
  coverImage?: string | undefined
  website?: string | undefined
  instagram?: string | undefined
  youtube?: string | undefined
  threads?: string | undefined
  facebook?: string | undefined
  layout?: string | undefined
  dir?: string | undefined
  /** MDX file body */
  body: MDX
  readingTime: json
  slug: string
  path: string
  filePath: string
  toc: string
}

export type Blog = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Blog'
  title: string
  date: IsoDateTimeString
  tags: string[]
  categories: string[]
  lastmod?: IsoDateTimeString | undefined
  draft?: boolean | undefined
  summary?: string | undefined
  images?: any | undefined
  authors?: string[] | undefined
  layout?: string | undefined
  dir?: string | undefined
  bibliography?: string | undefined
  canonicalUrl?: string | undefined
  /** MDX file body */
  body: MDX
  readingTime: json
  slug: string
  path: string
  filePath: string
  toc: string
  structuredData: json
}

export type Pages = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Pages'
  title: string
  date?: IsoDateTimeString | undefined
  lastmod?: IsoDateTimeString | undefined
  draft?: boolean | undefined
  summary?: string | undefined
  image?: string | undefined
  layout?: string | undefined
  dir?: string | undefined
  /** MDX file body */
  body: MDX
  readingTime: json
  slug: string
  path: string
  filePath: string
  toc: string
}  

/** Nested types */
  

/** Helper types */

export type AllTypes = DocumentTypes | NestedTypes
export type AllTypeNames = DocumentTypeNames | NestedTypeNames

export type DocumentTypes = Authors | Blog | Pages
export type DocumentTypeNames = 'Authors' | 'Blog' | 'Pages'

export type NestedTypes = never
export type NestedTypeNames = never

export type DataExports = {
  allDocuments: DocumentTypes[]
  allBlogs: Blog[]
  allAuthors: Authors[]
  allPages: Pages[]
}


export interface ContentlayerGenTypes {
  documentTypes: DocumentTypes
  documentTypeMap: DocumentTypeMap
  documentTypeNames: DocumentTypeNames
  nestedTypes: NestedTypes
  nestedTypeMap: NestedTypeMap
  nestedTypeNames: NestedTypeNames
  allTypeNames: AllTypeNames
  dataExports: DataExports
}

declare global {
  interface ContentlayerGen extends ContentlayerGenTypes {}
}

export type DocumentTypeMap = {
  Authors: Authors
  Blog: Blog
  Pages: Pages
}

export type NestedTypeMap = {

}

 