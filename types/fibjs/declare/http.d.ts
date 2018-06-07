/***************************************************************************
 *                                                                         *
 *   This file was automatically generated with idlc.js                   *
 *                                                                         *
 ***************************************************************************/

/** 
 * @author Richard <richardo2016@gmail.com>
 *
 */





/// <reference path="Buffer.d.ts" />

/// <reference path="BufferedStream.d.ts" />

/// <reference path="Chain.d.ts" />

/// <reference path="Cipher.d.ts" />

/// <reference path="Condition.d.ts" />

/// <reference path="DbConnection.d.ts" />

/// <reference path="DgramSocket.d.ts" />

/// <reference path="Digest.d.ts" />

/// <reference path="Event.d.ts" />

/// <reference path="EventEmitter.d.ts" />

/// <reference path="EventInfo.d.ts" />

/// <reference path="Fiber.d.ts" />

/// <reference path="File.d.ts" />

/// <reference path="Handler.d.ts" />

/// <reference path="HandlerEx.d.ts" />

/// <reference path="HeapGraphEdge.d.ts" />

/// <reference path="HeapGraphNode.d.ts" />

/// <reference path="HeapSnapshot.d.ts" />

/// <reference path="HttpClient.d.ts" />

/// <reference path="HttpCollection.d.ts" />

/// <reference path="HttpCookie.d.ts" />

/// <reference path="HttpHandler.d.ts" />

/// <reference path="HttpMessage.d.ts" />

/// <reference path="HttpRequest.d.ts" />

/// <reference path="HttpResponse.d.ts" />

/// <reference path="HttpServer.d.ts" />

/// <reference path="HttpUploadData.d.ts" />

/// <reference path="HttpsServer.d.ts" />

/// <reference path="Image.d.ts" />

/// <reference path="Int64.d.ts" />

/// <reference path="LevelDB.d.ts" />

/// <reference path="Lock.d.ts" />

/// <reference path="LruCache.d.ts" />

/// <reference path="MSSQL.d.ts" />

/// <reference path="MemoryStream.d.ts" />

/// <reference path="Message.d.ts" />

/// <reference path="MongoCollection.d.ts" />

/// <reference path="MongoCursor.d.ts" />

/// <reference path="MongoDB.d.ts" />

/// <reference path="MongoID.d.ts" />

/// <reference path="MySQL.d.ts" />

/// <reference path="PKey.d.ts" />

/// <reference path="Redis.d.ts" />

/// <reference path="RedisHash.d.ts" />

/// <reference path="RedisList.d.ts" />

/// <reference path="RedisSet.d.ts" />

/// <reference path="RedisSortedSet.d.ts" />

/// <reference path="Routing.d.ts" />

/// <reference path="SQLite.d.ts" />

/// <reference path="SandBox.d.ts" />

/// <reference path="SeekableStream.d.ts" />

/// <reference path="Semaphore.d.ts" />

/// <reference path="Service.d.ts" />

/// <reference path="Smtp.d.ts" />

/// <reference path="Socket.d.ts" />

/// <reference path="SslHandler.d.ts" />

/// <reference path="SslServer.d.ts" />

/// <reference path="SslSocket.d.ts" />

/// <reference path="Stat.d.ts" />

/// <reference path="Stats.d.ts" />

/// <reference path="Stream.d.ts" />

/// <reference path="StringDecoder.d.ts" />

/// <reference path="SubProcess.d.ts" />

/// <reference path="TcpServer.d.ts" />

/// <reference path="Timer.d.ts" />

/// <reference path="UrlObject.d.ts" />

/// <reference path="WebSocket.d.ts" />

/// <reference path="WebSocketMessage.d.ts" />

/// <reference path="WebView.d.ts" />

/// <reference path="Worker.d.ts" />

/// <reference path="X509Cert.d.ts" />

/// <reference path="X509Crl.d.ts" />

/// <reference path="X509Req.d.ts" />

/// <reference path="XmlAttr.d.ts" />

/// <reference path="XmlCDATASection.d.ts" />

/// <reference path="XmlCharacterData.d.ts" />

/// <reference path="XmlComment.d.ts" />

/// <reference path="XmlDocument.d.ts" />

/// <reference path="XmlDocumentType.d.ts" />

/// <reference path="XmlElement.d.ts" />

/// <reference path="XmlNamedNodeMap.d.ts" />

/// <reference path="XmlNode.d.ts" />

/// <reference path="XmlNodeList.d.ts" />

/// <reference path="XmlProcessingInstruction.d.ts" />

/// <reference path="XmlText.d.ts" />

/// <reference path="ZipFile.d.ts" />

/// <reference path="ZmqSocket.d.ts" />

/// <reference path="object.d.ts" />



/** module Or Internal Object */
/**
	* @brief 超文本传输协议模块，用以支持 http 协议处理
	* @detail 
	*/
declare module "http" {
	

	module http {
		
		
		
		/**
			* 
			* @brief 创建一个 http 请求对象，参见 HttpRequest
			* 
			* 
			*/
		export const Request: HttpRequest;
		
		/**
			* 
			* @brief 创建一个 http 响应对象，参见 HttpResponse
			* 
			* 
			*/
		export const Response: HttpResponse;
		
		/**
			* 
			* @brief 创建一个 http cookie 对象，参见 HttpCookie
			* 
			* 
			*/
		export const Cookie: HttpCookie;
		
		/**
			* 
			* @brief 创建一个 http 服务器，参见 HttpServer
			* 
			* 
			*/
		export const Server: HttpServer;
		
		/**
			* 
			* @brief 创建一个 http 客户端，参见 HttpClient
			* 
			* 
			*/
		export const Client: HttpClient;
		
		/**
			* 
			* @brief 创建一个 https 服务器，参见 HttpsServer
			* 
			* 
			*/
		export const HttpsServer: HttpsServer;
		
		/**
			* 
			* @brief 创建一个 http 协议处理器对象，参见 HttpHandler
			* 
			* 
			*/
		export const Handler: HttpHandler;
		
		
		
		/**
			* 
			* @brief 创建一个 http 静态文件处理器，用以用静态文件响应 http 消息
			* 
			* fileHandler 支持 gzip 预压缩，当请求接受 gzip 编码，且相同路径下 filename.ext.gz 文件存在时，将直接返回此文件，
			* 从而避免重复压缩带来服务器负载。
			* @param root 文件根路径
			* @param mimes 扩展 mime 设置
			* @param autoIndex 是否支持浏览目录文件，缺省为 false，不支持
			* @return 返回一个静态文件处理器用于处理 http 消息
			* 
			* 
			* 
			*/
		export function fileHandler(root: string, mimes?: Object/** = v8::Object::New(isolate)*/, autoIndex?: boolean/** = false*/): Handler;
	
		/**
			* 
			* @brief 发送 http 请求到指定的流对象，并返回结果
			* @param conn 指定处理请求的流对象
			* @param req 要发送的 HttpRequest 对象
			* @return 返回服务器响应
			* 
			* 
			* @async
			*/
		export function request(conn: Stream, req: HttpRequest): HttpResponse;
	
		/**
			* 
			* @brief 请求指定的 url，并返回结果
			* opts 包含请求的附加选项，支持的内容如下：
			* ```JavaScript
			* {
			* "query": {},
			* "body": SeekedStream | Buffer | String | {},
			* "json": {},
			* "headers": {}
			* }
			* ```
			* 其中 body，json 不得同时出现。缺省为 {}，不包含任何附加信息
			* @param method 指定 http 请求方法：GET, POST 等
			* @param url 指定 url，必须是包含主机的完整 url
			* @param opts 指定附加信息
			* @return 返回服务器响应
			* 
			* 
			* @async
			*/
		export function request(method: string, url: string, opts?: Object/** = v8::Object::New(isolate)*/): HttpResponse;
	
		/**
			* 
			* @brief 用 GET 方法请求指定的 url，并返回结果，等同于 request("GET", ...)
			* opts 包含请求的附加选项，支持的内容如下：
			* ```JavaScript
			* {
			* "query": {},
			* "body": SeekedStream | Buffer | String | {},
			* "json": {},
			* "headers": {}
			* }
			* ```
			* 其中 body，json 不得同时出现。缺省为 {}，不包含任何附加信息
			* @param url 指定 url，必须是包含主机的完整 url
			* @param opts 指定附加信息
			* @return 返回服务器响应
			* 
			* 
			* @async
			*/
		export function get(url: string, opts?: Object/** = v8::Object::New(isolate)*/): HttpResponse;
	
		/**
			* 
			* @brief 用 POST 方法请求指定的 url，并返回结果，等同于 request("POST", ...)
			* opts 包含请求的附加选项，支持的内容如下：
			* ```JavaScript
			* {
			* "query": {},
			* "body": SeekedStream | Buffer | String | {},
			* "json": {},
			* "headers": {}
			* }
			* ```
			* 其中 body，json 不得同时出现。缺省为 {}，不包含任何附加信息
			* @param url 指定 url，必须是包含主机的完整 url
			* @param opts 指定附加信息
			* @return 返回服务器响应
			* 
			* 
			* @async
			*/
		export function post(url: string, opts?: Object/** = v8::Object::New(isolate)*/): HttpResponse;
	
		/**
			* 
			* @brief 用 DELETE 方法请求指定的 url，并返回结果，等同于 request("DELETE", ...)
			* opts 包含请求的附加选项，支持的内容如下：
			* ```JavaScript
			* {
			* "query": {},
			* "body": SeekedStream | Buffer | String | {},
			* "json": {},
			* "headers": {}
			* }
			* ```
			* 其中 body，json 不得同时出现。缺省为 {}，不包含任何附加信息
			* @param url 指定 url，必须是包含主机的完整 url
			* @param opts 指定附加信息
			* @return 返回服务器响应
			* 
			* 
			* @async
			*/
		export function del(url: string, opts?: Object/** = v8::Object::New(isolate)*/): HttpResponse;
	
		/**
			* 
			* @brief 用 PUT 方法请求指定的 url，并返回结果，等同于 request("PUT", ...)
			* opts 包含请求的附加选项，支持的内容如下：
			* ```JavaScript
			* {
			* "query": {},
			* "body": SeekedStream | Buffer | String | {},
			* "json": {},
			* "headers": {}
			* }
			* ```
			* 其中 body，json 不得同时出现。缺省为 {}，不包含任何附加信息
			* @param url 指定 url，必须是包含主机的完整 url
			* @param opts 指定附加信息
			* @return 返回服务器响应
			* 
			* 
			* @async
			*/
		export function put(url: string, opts?: Object/** = v8::Object::New(isolate)*/): HttpResponse;
	
		/**
			* 
			* @brief 用 PATCH 方法请求指定的 url，并返回结果，等同于 request("PATCH", ...)
			* opts 包含请求的附加选项，支持的内容如下：
			* ```JavaScript
			* {
			* "query": {},
			* "body": SeekedStream | Buffer | String | {},
			* "json": {},
			* "headers": {}
			* }
			* ```
			* 其中 body，json 不得同时出现。缺省为 {}，不包含任何附加信息
			* @param url 指定 url，必须是包含主机的完整 url
			* @param opts 指定附加信息
			* @return 返回服务器响应
			* 
			* 
			* @async
			*/
		export function patch(url: string, opts?: Object/** = v8::Object::New(isolate)*/): HttpResponse;
	
	} /** end of `module http` */
	export = http
}

/** } /** endof `module Or Internal Object` */


