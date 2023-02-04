export { Blob } from "node:buffer";
export { AbortController, AbortSignal } from "abort-controller";

export type FormData = import("form-data") | import("undici/types/formdata").FormData;

import * as NodeFetch from "node-fetch";
import * as Undici from "undici/types/fetch";

export type Body = NodeFetch.Body;
export type BodyInit = NodeFetch.BodyInit | Undici.BodyInit;
export type fetch = typeof NodeFetch.default | typeof Undici.fetch;
export type HeadersInit = NodeFetch.HeaderInit | Undici.HeadersInit;
export type Request = NodeFetch.Request | Undici.Request;
export type RequestCache = NodeFetch.RequestCache | Undici.RequestCache;
export type RequestContext = NodeFetch.RequestContext; // | Undici.RequestDestination;
export type RequestCredentials = NodeFetch.RequestCredentials | Undici.RequestCredentials;
export type RequestInfo = NodeFetch.RequestInfo | Undici.RequestInfo;
export type RequestInit = NodeFetch.RequestInit | Undici.RequestInit;
export type RequestMode = NodeFetch.RequestMode | Undici.RequestMode;
export type RequestRedirect = NodeFetch.RequestRedirect | Undici.RequestRedirect;
export type Response = NodeFetch.Response | Undici.Response;
export type ResponseInit = NodeFetch.ResponseInit | Undici.ResponseInit;
export type ResponseType = NodeFetch.ResponseType | Undici.ResponseType;