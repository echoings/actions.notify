(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('os'), require('fs'), require('path'), require('http'), require('https'), require('net'), require('tls'), require('events'), require('assert'), require('util'), require('stream'), require('url'), require('zlib'), require('tty'), require('crypto')) :
    typeof define === 'function' && define.amd ? define(['os', 'fs', 'path', 'http', 'https', 'net', 'tls', 'events', 'assert', 'util', 'stream', 'url', 'zlib', 'tty', 'crypto'], factory) :
    (global = global || self, factory(global.os, global.fs, global.path, global.http, global.https, global.net, global.tls, global.events, global.assert, global.util, global.Stream, global.Url, global.zlib, global.tty, global.crypto));
}(this, (function (os, fs, path, http, https, net, tls, events, assert, util, Stream, Url, zlib, tty, crypto) { 'use strict';

    os = os && Object.prototype.hasOwnProperty.call(os, 'default') ? os['default'] : os;
    fs = fs && Object.prototype.hasOwnProperty.call(fs, 'default') ? fs['default'] : fs;
    path = path && Object.prototype.hasOwnProperty.call(path, 'default') ? path['default'] : path;
    http = http && Object.prototype.hasOwnProperty.call(http, 'default') ? http['default'] : http;
    https = https && Object.prototype.hasOwnProperty.call(https, 'default') ? https['default'] : https;
    net = net && Object.prototype.hasOwnProperty.call(net, 'default') ? net['default'] : net;
    tls = tls && Object.prototype.hasOwnProperty.call(tls, 'default') ? tls['default'] : tls;
    events = events && Object.prototype.hasOwnProperty.call(events, 'default') ? events['default'] : events;
    assert = assert && Object.prototype.hasOwnProperty.call(assert, 'default') ? assert['default'] : assert;
    util = util && Object.prototype.hasOwnProperty.call(util, 'default') ? util['default'] : util;
    Stream = Stream && Object.prototype.hasOwnProperty.call(Stream, 'default') ? Stream['default'] : Stream;
    Url = Url && Object.prototype.hasOwnProperty.call(Url, 'default') ? Url['default'] : Url;
    zlib = zlib && Object.prototype.hasOwnProperty.call(zlib, 'default') ? zlib['default'] : zlib;
    tty = tty && Object.prototype.hasOwnProperty.call(tty, 'default') ? tty['default'] : tty;
    crypto = crypto && Object.prototype.hasOwnProperty.call(crypto, 'default') ? crypto['default'] : crypto;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function commonjsRequire () {
    	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
    }

    function unwrapExports (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    function getCjsExportFromNamespace (n) {
    	return n && n['default'] || n;
    }

    var utils = createCommonjsModule(function (module, exports) {
    // We use any as a valid input type
    /* eslint-disable @typescript-eslint/no-explicit-any */
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Sanitizes an input into a string so it can be passed into issueCommand safely
     * @param input input to sanitize into a string
     */
    function toCommandValue(input) {
        if (input === null || input === undefined) {
            return '';
        }
        else if (typeof input === 'string' || input instanceof String) {
            return input;
        }
        return JSON.stringify(input);
    }
    exports.toCommandValue = toCommandValue;
    //# sourceMappingURL=utils.js.map
    });

    unwrapExports(utils);
    var utils_1 = utils.toCommandValue;

    var command = createCommonjsModule(function (module, exports) {
    var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result["default"] = mod;
        return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    const os$1 = __importStar(os);

    /**
     * Commands
     *
     * Command Format:
     *   ::name key=value,key=value::message
     *
     * Examples:
     *   ::warning::This is the message
     *   ::set-env name=MY_VAR::some value
     */
    function issueCommand(command, properties, message) {
        const cmd = new Command(command, properties, message);
        process.stdout.write(cmd.toString() + os$1.EOL);
    }
    exports.issueCommand = issueCommand;
    function issue(name, message = '') {
        issueCommand(name, {}, message);
    }
    exports.issue = issue;
    const CMD_STRING = '::';
    class Command {
        constructor(command, properties, message) {
            if (!command) {
                command = 'missing.command';
            }
            this.command = command;
            this.properties = properties;
            this.message = message;
        }
        toString() {
            let cmdStr = CMD_STRING + this.command;
            if (this.properties && Object.keys(this.properties).length > 0) {
                cmdStr += ' ';
                let first = true;
                for (const key in this.properties) {
                    if (this.properties.hasOwnProperty(key)) {
                        const val = this.properties[key];
                        if (val) {
                            if (first) {
                                first = false;
                            }
                            else {
                                cmdStr += ',';
                            }
                            cmdStr += `${key}=${escapeProperty(val)}`;
                        }
                    }
                }
            }
            cmdStr += `${CMD_STRING}${escapeData(this.message)}`;
            return cmdStr;
        }
    }
    function escapeData(s) {
        return utils.toCommandValue(s)
            .replace(/%/g, '%25')
            .replace(/\r/g, '%0D')
            .replace(/\n/g, '%0A');
    }
    function escapeProperty(s) {
        return utils.toCommandValue(s)
            .replace(/%/g, '%25')
            .replace(/\r/g, '%0D')
            .replace(/\n/g, '%0A')
            .replace(/:/g, '%3A')
            .replace(/,/g, '%2C');
    }
    //# sourceMappingURL=command.js.map
    });

    unwrapExports(command);
    var command_1 = command.issueCommand;
    var command_2 = command.issue;

    var fileCommand = createCommonjsModule(function (module, exports) {
    // For internal use, subject to change.
    var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result["default"] = mod;
        return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    // We use any as a valid input type
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const fs$1 = __importStar(fs);
    const os$1 = __importStar(os);

    function issueCommand(command, message) {
        const filePath = process.env[`GITHUB_${command}`];
        if (!filePath) {
            throw new Error(`Unable to find environment variable for file command ${command}`);
        }
        if (!fs$1.existsSync(filePath)) {
            throw new Error(`Missing file at path: ${filePath}`);
        }
        fs$1.appendFileSync(filePath, `${utils.toCommandValue(message)}${os$1.EOL}`, {
            encoding: 'utf8'
        });
    }
    exports.issueCommand = issueCommand;
    //# sourceMappingURL=file-command.js.map
    });

    unwrapExports(fileCommand);
    var fileCommand_1 = fileCommand.issueCommand;

    var core = createCommonjsModule(function (module, exports) {
    var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result["default"] = mod;
        return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });



    const os$1 = __importStar(os);
    const path$1 = __importStar(path);
    /**
     * The code to exit an action
     */
    var ExitCode;
    (function (ExitCode) {
        /**
         * A code indicating that the action was successful
         */
        ExitCode[ExitCode["Success"] = 0] = "Success";
        /**
         * A code indicating that the action was a failure
         */
        ExitCode[ExitCode["Failure"] = 1] = "Failure";
    })(ExitCode = exports.ExitCode || (exports.ExitCode = {}));
    //-----------------------------------------------------------------------
    // Variables
    //-----------------------------------------------------------------------
    /**
     * Sets env variable for this action and future actions in the job
     * @param name the name of the variable to set
     * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function exportVariable(name, val) {
        const convertedVal = utils.toCommandValue(val);
        process.env[name] = convertedVal;
        const filePath = process.env['GITHUB_ENV'] || '';
        if (filePath) {
            const delimiter = '_GitHubActionsFileCommandDelimeter_';
            const commandValue = `${name}<<${delimiter}${os$1.EOL}${convertedVal}${os$1.EOL}${delimiter}`;
            fileCommand.issueCommand('ENV', commandValue);
        }
        else {
            command.issueCommand('set-env', { name }, convertedVal);
        }
    }
    exports.exportVariable = exportVariable;
    /**
     * Registers a secret which will get masked from logs
     * @param secret value of the secret
     */
    function setSecret(secret) {
        command.issueCommand('add-mask', {}, secret);
    }
    exports.setSecret = setSecret;
    /**
     * Prepends inputPath to the PATH (for this action and future actions)
     * @param inputPath
     */
    function addPath(inputPath) {
        const filePath = process.env['GITHUB_PATH'] || '';
        if (filePath) {
            fileCommand.issueCommand('PATH', inputPath);
        }
        else {
            command.issueCommand('add-path', {}, inputPath);
        }
        process.env['PATH'] = `${inputPath}${path$1.delimiter}${process.env['PATH']}`;
    }
    exports.addPath = addPath;
    /**
     * Gets the value of an input.  The value is also trimmed.
     *
     * @param     name     name of the input to get
     * @param     options  optional. See InputOptions.
     * @returns   string
     */
    function getInput(name, options) {
        const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
        if (options && options.required && !val) {
            throw new Error(`Input required and not supplied: ${name}`);
        }
        return val.trim();
    }
    exports.getInput = getInput;
    /**
     * Sets the value of an output.
     *
     * @param     name     name of the output to set
     * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function setOutput(name, value) {
        command.issueCommand('set-output', { name }, value);
    }
    exports.setOutput = setOutput;
    /**
     * Enables or disables the echoing of commands into stdout for the rest of the step.
     * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
     *
     */
    function setCommandEcho(enabled) {
        command.issue('echo', enabled ? 'on' : 'off');
    }
    exports.setCommandEcho = setCommandEcho;
    //-----------------------------------------------------------------------
    // Results
    //-----------------------------------------------------------------------
    /**
     * Sets the action status to failed.
     * When the action exits it will be with an exit code of 1
     * @param message add error issue message
     */
    function setFailed(message) {
        process.exitCode = ExitCode.Failure;
        error(message);
    }
    exports.setFailed = setFailed;
    //-----------------------------------------------------------------------
    // Logging Commands
    //-----------------------------------------------------------------------
    /**
     * Gets whether Actions Step Debug is on or not
     */
    function isDebug() {
        return process.env['RUNNER_DEBUG'] === '1';
    }
    exports.isDebug = isDebug;
    /**
     * Writes debug message to user log
     * @param message debug message
     */
    function debug(message) {
        command.issueCommand('debug', {}, message);
    }
    exports.debug = debug;
    /**
     * Adds an error issue
     * @param message error issue message. Errors will be converted to string via toString()
     */
    function error(message) {
        command.issue('error', message instanceof Error ? message.toString() : message);
    }
    exports.error = error;
    /**
     * Adds an warning issue
     * @param message warning issue message. Errors will be converted to string via toString()
     */
    function warning(message) {
        command.issue('warning', message instanceof Error ? message.toString() : message);
    }
    exports.warning = warning;
    /**
     * Writes info to log with console.log.
     * @param message info message
     */
    function info(message) {
        process.stdout.write(message + os$1.EOL);
    }
    exports.info = info;
    /**
     * Begin an output group.
     *
     * Output until the next `groupEnd` will be foldable in this group
     *
     * @param name The name of the output group
     */
    function startGroup(name) {
        command.issue('group', name);
    }
    exports.startGroup = startGroup;
    /**
     * End an output group.
     */
    function endGroup() {
        command.issue('endgroup');
    }
    exports.endGroup = endGroup;
    /**
     * Wrap an asynchronous function call in a group.
     *
     * Returns the same type as the function itself.
     *
     * @param name The name of the group
     * @param fn The function to wrap in the group
     */
    function group(name, fn) {
        return __awaiter(this, void 0, void 0, function* () {
            startGroup(name);
            let result;
            try {
                result = yield fn();
            }
            finally {
                endGroup();
            }
            return result;
        });
    }
    exports.group = group;
    //-----------------------------------------------------------------------
    // Wrapper action state
    //-----------------------------------------------------------------------
    /**
     * Saves state for current action, the state can only be retrieved by this action's post job execution.
     *
     * @param     name     name of the state to store
     * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function saveState(name, value) {
        command.issueCommand('save-state', { name }, value);
    }
    exports.saveState = saveState;
    /**
     * Gets the value of an state set by this action's main execution.
     *
     * @param     name     name of the state to get
     * @returns   string
     */
    function getState(name) {
        return process.env[`STATE_${name}`] || '';
    }
    exports.getState = getState;
    //# sourceMappingURL=core.js.map
    });

    var core$1 = unwrapExports(core);
    var core_1 = core.ExitCode;
    var core_2 = core.exportVariable;
    var core_3 = core.setSecret;
    var core_4 = core.addPath;
    var core_5 = core.getInput;
    var core_6 = core.setOutput;
    var core_7 = core.setCommandEcho;
    var core_8 = core.setFailed;
    var core_9 = core.isDebug;
    var core_10 = core.debug;
    var core_11 = core.error;
    var core_12 = core.warning;
    var core_13 = core.info;
    var core_14 = core.startGroup;
    var core_15 = core.endGroup;
    var core_16 = core.group;
    var core_17 = core.saveState;
    var core_18 = core.getState;

    var context = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Context = void 0;


    class Context {
        /**
         * Hydrate the context from the environment
         */
        constructor() {
            this.payload = {};
            if (process.env.GITHUB_EVENT_PATH) {
                if (fs.existsSync(process.env.GITHUB_EVENT_PATH)) {
                    this.payload = JSON.parse(fs.readFileSync(process.env.GITHUB_EVENT_PATH, { encoding: 'utf8' }));
                }
                else {
                    const path = process.env.GITHUB_EVENT_PATH;
                    process.stdout.write(`GITHUB_EVENT_PATH ${path} does not exist${os.EOL}`);
                }
            }
            this.eventName = process.env.GITHUB_EVENT_NAME;
            this.sha = process.env.GITHUB_SHA;
            this.ref = process.env.GITHUB_REF;
            this.workflow = process.env.GITHUB_WORKFLOW;
            this.action = process.env.GITHUB_ACTION;
            this.actor = process.env.GITHUB_ACTOR;
            this.job = process.env.GITHUB_JOB;
            this.runNumber = parseInt(process.env.GITHUB_RUN_NUMBER, 10);
            this.runId = parseInt(process.env.GITHUB_RUN_ID, 10);
        }
        get issue() {
            const payload = this.payload;
            return Object.assign(Object.assign({}, this.repo), { number: (payload.issue || payload.pull_request || payload).number });
        }
        get repo() {
            if (process.env.GITHUB_REPOSITORY) {
                const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/');
                return { owner, repo };
            }
            if (this.payload.repository) {
                return {
                    owner: this.payload.repository.owner.login,
                    repo: this.payload.repository.name
                };
            }
            throw new Error("context.repo requires a GITHUB_REPOSITORY environment variable like 'owner/repo'");
        }
    }
    exports.Context = Context;
    //# sourceMappingURL=context.js.map
    });

    unwrapExports(context);
    var context_1 = context.Context;

    var proxy = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    function getProxyUrl(reqUrl) {
        let usingSsl = reqUrl.protocol === 'https:';
        let proxyUrl;
        if (checkBypass(reqUrl)) {
            return proxyUrl;
        }
        let proxyVar;
        if (usingSsl) {
            proxyVar = process.env['https_proxy'] || process.env['HTTPS_PROXY'];
        }
        else {
            proxyVar = process.env['http_proxy'] || process.env['HTTP_PROXY'];
        }
        if (proxyVar) {
            proxyUrl = new URL(proxyVar);
        }
        return proxyUrl;
    }
    exports.getProxyUrl = getProxyUrl;
    function checkBypass(reqUrl) {
        if (!reqUrl.hostname) {
            return false;
        }
        let noProxy = process.env['no_proxy'] || process.env['NO_PROXY'] || '';
        if (!noProxy) {
            return false;
        }
        // Determine the request port
        let reqPort;
        if (reqUrl.port) {
            reqPort = Number(reqUrl.port);
        }
        else if (reqUrl.protocol === 'http:') {
            reqPort = 80;
        }
        else if (reqUrl.protocol === 'https:') {
            reqPort = 443;
        }
        // Format the request hostname and hostname with port
        let upperReqHosts = [reqUrl.hostname.toUpperCase()];
        if (typeof reqPort === 'number') {
            upperReqHosts.push(`${upperReqHosts[0]}:${reqPort}`);
        }
        // Compare request host against noproxy
        for (let upperNoProxyItem of noProxy
            .split(',')
            .map(x => x.trim().toUpperCase())
            .filter(x => x)) {
            if (upperReqHosts.some(x => x === upperNoProxyItem)) {
                return true;
            }
        }
        return false;
    }
    exports.checkBypass = checkBypass;
    });

    unwrapExports(proxy);
    var proxy_1 = proxy.getProxyUrl;
    var proxy_2 = proxy.checkBypass;

    var httpOverHttp_1 = httpOverHttp;
    var httpsOverHttp_1 = httpsOverHttp;
    var httpOverHttps_1 = httpOverHttps;
    var httpsOverHttps_1 = httpsOverHttps;


    function httpOverHttp(options) {
      var agent = new TunnelingAgent(options);
      agent.request = http.request;
      return agent;
    }

    function httpsOverHttp(options) {
      var agent = new TunnelingAgent(options);
      agent.request = http.request;
      agent.createSocket = createSecureSocket;
      agent.defaultPort = 443;
      return agent;
    }

    function httpOverHttps(options) {
      var agent = new TunnelingAgent(options);
      agent.request = https.request;
      return agent;
    }

    function httpsOverHttps(options) {
      var agent = new TunnelingAgent(options);
      agent.request = https.request;
      agent.createSocket = createSecureSocket;
      agent.defaultPort = 443;
      return agent;
    }


    function TunnelingAgent(options) {
      var self = this;
      self.options = options || {};
      self.proxyOptions = self.options.proxy || {};
      self.maxSockets = self.options.maxSockets || http.Agent.defaultMaxSockets;
      self.requests = [];
      self.sockets = [];

      self.on('free', function onFree(socket, host, port, localAddress) {
        var options = toOptions(host, port, localAddress);
        for (var i = 0, len = self.requests.length; i < len; ++i) {
          var pending = self.requests[i];
          if (pending.host === options.host && pending.port === options.port) {
            // Detect the request to connect same origin server,
            // reuse the connection.
            self.requests.splice(i, 1);
            pending.request.onSocket(socket);
            return;
          }
        }
        socket.destroy();
        self.removeSocket(socket);
      });
    }
    util.inherits(TunnelingAgent, events.EventEmitter);

    TunnelingAgent.prototype.addRequest = function addRequest(req, host, port, localAddress) {
      var self = this;
      var options = mergeOptions({request: req}, self.options, toOptions(host, port, localAddress));

      if (self.sockets.length >= this.maxSockets) {
        // We are over limit so we'll add it to the queue.
        self.requests.push(options);
        return;
      }

      // If we are under maxSockets create a new one.
      self.createSocket(options, function(socket) {
        socket.on('free', onFree);
        socket.on('close', onCloseOrRemove);
        socket.on('agentRemove', onCloseOrRemove);
        req.onSocket(socket);

        function onFree() {
          self.emit('free', socket, options);
        }

        function onCloseOrRemove(err) {
          self.removeSocket(socket);
          socket.removeListener('free', onFree);
          socket.removeListener('close', onCloseOrRemove);
          socket.removeListener('agentRemove', onCloseOrRemove);
        }
      });
    };

    TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
      var self = this;
      var placeholder = {};
      self.sockets.push(placeholder);

      var connectOptions = mergeOptions({}, self.proxyOptions, {
        method: 'CONNECT',
        path: options.host + ':' + options.port,
        agent: false,
        headers: {
          host: options.host + ':' + options.port
        }
      });
      if (options.localAddress) {
        connectOptions.localAddress = options.localAddress;
      }
      if (connectOptions.proxyAuth) {
        connectOptions.headers = connectOptions.headers || {};
        connectOptions.headers['Proxy-Authorization'] = 'Basic ' +
            new Buffer(connectOptions.proxyAuth).toString('base64');
      }

      debug('making CONNECT request');
      var connectReq = self.request(connectOptions);
      connectReq.useChunkedEncodingByDefault = false; // for v0.6
      connectReq.once('response', onResponse); // for v0.6
      connectReq.once('upgrade', onUpgrade);   // for v0.6
      connectReq.once('connect', onConnect);   // for v0.7 or later
      connectReq.once('error', onError);
      connectReq.end();

      function onResponse(res) {
        // Very hacky. This is necessary to avoid http-parser leaks.
        res.upgrade = true;
      }

      function onUpgrade(res, socket, head) {
        // Hacky.
        process.nextTick(function() {
          onConnect(res, socket, head);
        });
      }

      function onConnect(res, socket, head) {
        connectReq.removeAllListeners();
        socket.removeAllListeners();

        if (res.statusCode !== 200) {
          debug('tunneling socket could not be established, statusCode=%d',
            res.statusCode);
          socket.destroy();
          var error = new Error('tunneling socket could not be established, ' +
            'statusCode=' + res.statusCode);
          error.code = 'ECONNRESET';
          options.request.emit('error', error);
          self.removeSocket(placeholder);
          return;
        }
        if (head.length > 0) {
          debug('got illegal response body from proxy');
          socket.destroy();
          var error = new Error('got illegal response body from proxy');
          error.code = 'ECONNRESET';
          options.request.emit('error', error);
          self.removeSocket(placeholder);
          return;
        }
        debug('tunneling connection has established');
        self.sockets[self.sockets.indexOf(placeholder)] = socket;
        return cb(socket);
      }

      function onError(cause) {
        connectReq.removeAllListeners();

        debug('tunneling socket could not be established, cause=%s\n',
              cause.message, cause.stack);
        var error = new Error('tunneling socket could not be established, ' +
                              'cause=' + cause.message);
        error.code = 'ECONNRESET';
        options.request.emit('error', error);
        self.removeSocket(placeholder);
      }
    };

    TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
      var pos = this.sockets.indexOf(socket);
      if (pos === -1) {
        return;
      }
      this.sockets.splice(pos, 1);

      var pending = this.requests.shift();
      if (pending) {
        // If we have pending requests and a socket gets closed a new one
        // needs to be created to take over in the pool for the one that closed.
        this.createSocket(pending, function(socket) {
          pending.request.onSocket(socket);
        });
      }
    };

    function createSecureSocket(options, cb) {
      var self = this;
      TunnelingAgent.prototype.createSocket.call(self, options, function(socket) {
        var hostHeader = options.request.getHeader('host');
        var tlsOptions = mergeOptions({}, self.options, {
          socket: socket,
          servername: hostHeader ? hostHeader.replace(/:.*$/, '') : options.host
        });

        // 0 is dummy port for v0.6
        var secureSocket = tls.connect(0, tlsOptions);
        self.sockets[self.sockets.indexOf(socket)] = secureSocket;
        cb(secureSocket);
      });
    }


    function toOptions(host, port, localAddress) {
      if (typeof host === 'string') { // since v0.10
        return {
          host: host,
          port: port,
          localAddress: localAddress
        };
      }
      return host; // for v0.11 or later
    }

    function mergeOptions(target) {
      for (var i = 1, len = arguments.length; i < len; ++i) {
        var overrides = arguments[i];
        if (typeof overrides === 'object') {
          var keys = Object.keys(overrides);
          for (var j = 0, keyLen = keys.length; j < keyLen; ++j) {
            var k = keys[j];
            if (overrides[k] !== undefined) {
              target[k] = overrides[k];
            }
          }
        }
      }
      return target;
    }


    var debug;
    if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
      debug = function() {
        var args = Array.prototype.slice.call(arguments);
        if (typeof args[0] === 'string') {
          args[0] = 'TUNNEL: ' + args[0];
        } else {
          args.unshift('TUNNEL:');
        }
        console.error.apply(console, args);
      };
    } else {
      debug = function() {};
    }
    var debug_1 = debug; // for test

    var tunnel = {
    	httpOverHttp: httpOverHttp_1,
    	httpsOverHttp: httpsOverHttp_1,
    	httpOverHttps: httpOverHttps_1,
    	httpsOverHttps: httpsOverHttps_1,
    	debug: debug_1
    };

    var tunnel$1 = tunnel;

    var httpClient = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });



    let tunnel;
    var HttpCodes;
    (function (HttpCodes) {
        HttpCodes[HttpCodes["OK"] = 200] = "OK";
        HttpCodes[HttpCodes["MultipleChoices"] = 300] = "MultipleChoices";
        HttpCodes[HttpCodes["MovedPermanently"] = 301] = "MovedPermanently";
        HttpCodes[HttpCodes["ResourceMoved"] = 302] = "ResourceMoved";
        HttpCodes[HttpCodes["SeeOther"] = 303] = "SeeOther";
        HttpCodes[HttpCodes["NotModified"] = 304] = "NotModified";
        HttpCodes[HttpCodes["UseProxy"] = 305] = "UseProxy";
        HttpCodes[HttpCodes["SwitchProxy"] = 306] = "SwitchProxy";
        HttpCodes[HttpCodes["TemporaryRedirect"] = 307] = "TemporaryRedirect";
        HttpCodes[HttpCodes["PermanentRedirect"] = 308] = "PermanentRedirect";
        HttpCodes[HttpCodes["BadRequest"] = 400] = "BadRequest";
        HttpCodes[HttpCodes["Unauthorized"] = 401] = "Unauthorized";
        HttpCodes[HttpCodes["PaymentRequired"] = 402] = "PaymentRequired";
        HttpCodes[HttpCodes["Forbidden"] = 403] = "Forbidden";
        HttpCodes[HttpCodes["NotFound"] = 404] = "NotFound";
        HttpCodes[HttpCodes["MethodNotAllowed"] = 405] = "MethodNotAllowed";
        HttpCodes[HttpCodes["NotAcceptable"] = 406] = "NotAcceptable";
        HttpCodes[HttpCodes["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
        HttpCodes[HttpCodes["RequestTimeout"] = 408] = "RequestTimeout";
        HttpCodes[HttpCodes["Conflict"] = 409] = "Conflict";
        HttpCodes[HttpCodes["Gone"] = 410] = "Gone";
        HttpCodes[HttpCodes["TooManyRequests"] = 429] = "TooManyRequests";
        HttpCodes[HttpCodes["InternalServerError"] = 500] = "InternalServerError";
        HttpCodes[HttpCodes["NotImplemented"] = 501] = "NotImplemented";
        HttpCodes[HttpCodes["BadGateway"] = 502] = "BadGateway";
        HttpCodes[HttpCodes["ServiceUnavailable"] = 503] = "ServiceUnavailable";
        HttpCodes[HttpCodes["GatewayTimeout"] = 504] = "GatewayTimeout";
    })(HttpCodes = exports.HttpCodes || (exports.HttpCodes = {}));
    var Headers;
    (function (Headers) {
        Headers["Accept"] = "accept";
        Headers["ContentType"] = "content-type";
    })(Headers = exports.Headers || (exports.Headers = {}));
    var MediaTypes;
    (function (MediaTypes) {
        MediaTypes["ApplicationJson"] = "application/json";
    })(MediaTypes = exports.MediaTypes || (exports.MediaTypes = {}));
    /**
     * Returns the proxy URL, depending upon the supplied url and proxy environment variables.
     * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
     */
    function getProxyUrl(serverUrl) {
        let proxyUrl = proxy.getProxyUrl(new URL(serverUrl));
        return proxyUrl ? proxyUrl.href : '';
    }
    exports.getProxyUrl = getProxyUrl;
    const HttpRedirectCodes = [
        HttpCodes.MovedPermanently,
        HttpCodes.ResourceMoved,
        HttpCodes.SeeOther,
        HttpCodes.TemporaryRedirect,
        HttpCodes.PermanentRedirect
    ];
    const HttpResponseRetryCodes = [
        HttpCodes.BadGateway,
        HttpCodes.ServiceUnavailable,
        HttpCodes.GatewayTimeout
    ];
    const RetryableHttpVerbs = ['OPTIONS', 'GET', 'DELETE', 'HEAD'];
    const ExponentialBackoffCeiling = 10;
    const ExponentialBackoffTimeSlice = 5;
    class HttpClientError extends Error {
        constructor(message, statusCode) {
            super(message);
            this.name = 'HttpClientError';
            this.statusCode = statusCode;
            Object.setPrototypeOf(this, HttpClientError.prototype);
        }
    }
    exports.HttpClientError = HttpClientError;
    class HttpClientResponse {
        constructor(message) {
            this.message = message;
        }
        readBody() {
            return new Promise(async (resolve, reject) => {
                let output = Buffer.alloc(0);
                this.message.on('data', (chunk) => {
                    output = Buffer.concat([output, chunk]);
                });
                this.message.on('end', () => {
                    resolve(output.toString());
                });
            });
        }
    }
    exports.HttpClientResponse = HttpClientResponse;
    function isHttps(requestUrl) {
        let parsedUrl = new URL(requestUrl);
        return parsedUrl.protocol === 'https:';
    }
    exports.isHttps = isHttps;
    class HttpClient {
        constructor(userAgent, handlers, requestOptions) {
            this._ignoreSslError = false;
            this._allowRedirects = true;
            this._allowRedirectDowngrade = false;
            this._maxRedirects = 50;
            this._allowRetries = false;
            this._maxRetries = 1;
            this._keepAlive = false;
            this._disposed = false;
            this.userAgent = userAgent;
            this.handlers = handlers || [];
            this.requestOptions = requestOptions;
            if (requestOptions) {
                if (requestOptions.ignoreSslError != null) {
                    this._ignoreSslError = requestOptions.ignoreSslError;
                }
                this._socketTimeout = requestOptions.socketTimeout;
                if (requestOptions.allowRedirects != null) {
                    this._allowRedirects = requestOptions.allowRedirects;
                }
                if (requestOptions.allowRedirectDowngrade != null) {
                    this._allowRedirectDowngrade = requestOptions.allowRedirectDowngrade;
                }
                if (requestOptions.maxRedirects != null) {
                    this._maxRedirects = Math.max(requestOptions.maxRedirects, 0);
                }
                if (requestOptions.keepAlive != null) {
                    this._keepAlive = requestOptions.keepAlive;
                }
                if (requestOptions.allowRetries != null) {
                    this._allowRetries = requestOptions.allowRetries;
                }
                if (requestOptions.maxRetries != null) {
                    this._maxRetries = requestOptions.maxRetries;
                }
            }
        }
        options(requestUrl, additionalHeaders) {
            return this.request('OPTIONS', requestUrl, null, additionalHeaders || {});
        }
        get(requestUrl, additionalHeaders) {
            return this.request('GET', requestUrl, null, additionalHeaders || {});
        }
        del(requestUrl, additionalHeaders) {
            return this.request('DELETE', requestUrl, null, additionalHeaders || {});
        }
        post(requestUrl, data, additionalHeaders) {
            return this.request('POST', requestUrl, data, additionalHeaders || {});
        }
        patch(requestUrl, data, additionalHeaders) {
            return this.request('PATCH', requestUrl, data, additionalHeaders || {});
        }
        put(requestUrl, data, additionalHeaders) {
            return this.request('PUT', requestUrl, data, additionalHeaders || {});
        }
        head(requestUrl, additionalHeaders) {
            return this.request('HEAD', requestUrl, null, additionalHeaders || {});
        }
        sendStream(verb, requestUrl, stream, additionalHeaders) {
            return this.request(verb, requestUrl, stream, additionalHeaders);
        }
        /**
         * Gets a typed object from an endpoint
         * Be aware that not found returns a null.  Other errors (4xx, 5xx) reject the promise
         */
        async getJson(requestUrl, additionalHeaders = {}) {
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            let res = await this.get(requestUrl, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        }
        async postJson(requestUrl, obj, additionalHeaders = {}) {
            let data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            let res = await this.post(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        }
        async putJson(requestUrl, obj, additionalHeaders = {}) {
            let data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            let res = await this.put(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        }
        async patchJson(requestUrl, obj, additionalHeaders = {}) {
            let data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            let res = await this.patch(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        }
        /**
         * Makes a raw http request.
         * All other methods such as get, post, patch, and request ultimately call this.
         * Prefer get, del, post and patch
         */
        async request(verb, requestUrl, data, headers) {
            if (this._disposed) {
                throw new Error('Client has already been disposed.');
            }
            let parsedUrl = new URL(requestUrl);
            let info = this._prepareRequest(verb, parsedUrl, headers);
            // Only perform retries on reads since writes may not be idempotent.
            let maxTries = this._allowRetries && RetryableHttpVerbs.indexOf(verb) != -1
                ? this._maxRetries + 1
                : 1;
            let numTries = 0;
            let response;
            while (numTries < maxTries) {
                response = await this.requestRaw(info, data);
                // Check if it's an authentication challenge
                if (response &&
                    response.message &&
                    response.message.statusCode === HttpCodes.Unauthorized) {
                    let authenticationHandler;
                    for (let i = 0; i < this.handlers.length; i++) {
                        if (this.handlers[i].canHandleAuthentication(response)) {
                            authenticationHandler = this.handlers[i];
                            break;
                        }
                    }
                    if (authenticationHandler) {
                        return authenticationHandler.handleAuthentication(this, info, data);
                    }
                    else {
                        // We have received an unauthorized response but have no handlers to handle it.
                        // Let the response return to the caller.
                        return response;
                    }
                }
                let redirectsRemaining = this._maxRedirects;
                while (HttpRedirectCodes.indexOf(response.message.statusCode) != -1 &&
                    this._allowRedirects &&
                    redirectsRemaining > 0) {
                    const redirectUrl = response.message.headers['location'];
                    if (!redirectUrl) {
                        // if there's no location to redirect to, we won't
                        break;
                    }
                    let parsedRedirectUrl = new URL(redirectUrl);
                    if (parsedUrl.protocol == 'https:' &&
                        parsedUrl.protocol != parsedRedirectUrl.protocol &&
                        !this._allowRedirectDowngrade) {
                        throw new Error('Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.');
                    }
                    // we need to finish reading the response before reassigning response
                    // which will leak the open socket.
                    await response.readBody();
                    // strip authorization header if redirected to a different hostname
                    if (parsedRedirectUrl.hostname !== parsedUrl.hostname) {
                        for (let header in headers) {
                            // header names are case insensitive
                            if (header.toLowerCase() === 'authorization') {
                                delete headers[header];
                            }
                        }
                    }
                    // let's make the request with the new redirectUrl
                    info = this._prepareRequest(verb, parsedRedirectUrl, headers);
                    response = await this.requestRaw(info, data);
                    redirectsRemaining--;
                }
                if (HttpResponseRetryCodes.indexOf(response.message.statusCode) == -1) {
                    // If not a retry code, return immediately instead of retrying
                    return response;
                }
                numTries += 1;
                if (numTries < maxTries) {
                    await response.readBody();
                    await this._performExponentialBackoff(numTries);
                }
            }
            return response;
        }
        /**
         * Needs to be called if keepAlive is set to true in request options.
         */
        dispose() {
            if (this._agent) {
                this._agent.destroy();
            }
            this._disposed = true;
        }
        /**
         * Raw request.
         * @param info
         * @param data
         */
        requestRaw(info, data) {
            return new Promise((resolve, reject) => {
                let callbackForResult = function (err, res) {
                    if (err) {
                        reject(err);
                    }
                    resolve(res);
                };
                this.requestRawWithCallback(info, data, callbackForResult);
            });
        }
        /**
         * Raw request with callback.
         * @param info
         * @param data
         * @param onResult
         */
        requestRawWithCallback(info, data, onResult) {
            let socket;
            if (typeof data === 'string') {
                info.options.headers['Content-Length'] = Buffer.byteLength(data, 'utf8');
            }
            let callbackCalled = false;
            let handleResult = (err, res) => {
                if (!callbackCalled) {
                    callbackCalled = true;
                    onResult(err, res);
                }
            };
            let req = info.httpModule.request(info.options, (msg) => {
                let res = new HttpClientResponse(msg);
                handleResult(null, res);
            });
            req.on('socket', sock => {
                socket = sock;
            });
            // If we ever get disconnected, we want the socket to timeout eventually
            req.setTimeout(this._socketTimeout || 3 * 60000, () => {
                if (socket) {
                    socket.end();
                }
                handleResult(new Error('Request timeout: ' + info.options.path), null);
            });
            req.on('error', function (err) {
                // err has statusCode property
                // res should have headers
                handleResult(err, null);
            });
            if (data && typeof data === 'string') {
                req.write(data, 'utf8');
            }
            if (data && typeof data !== 'string') {
                data.on('close', function () {
                    req.end();
                });
                data.pipe(req);
            }
            else {
                req.end();
            }
        }
        /**
         * Gets an http agent. This function is useful when you need an http agent that handles
         * routing through a proxy server - depending upon the url and proxy environment variables.
         * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
         */
        getAgent(serverUrl) {
            let parsedUrl = new URL(serverUrl);
            return this._getAgent(parsedUrl);
        }
        _prepareRequest(method, requestUrl, headers) {
            const info = {};
            info.parsedUrl = requestUrl;
            const usingSsl = info.parsedUrl.protocol === 'https:';
            info.httpModule = usingSsl ? https : http;
            const defaultPort = usingSsl ? 443 : 80;
            info.options = {};
            info.options.host = info.parsedUrl.hostname;
            info.options.port = info.parsedUrl.port
                ? parseInt(info.parsedUrl.port)
                : defaultPort;
            info.options.path =
                (info.parsedUrl.pathname || '') + (info.parsedUrl.search || '');
            info.options.method = method;
            info.options.headers = this._mergeHeaders(headers);
            if (this.userAgent != null) {
                info.options.headers['user-agent'] = this.userAgent;
            }
            info.options.agent = this._getAgent(info.parsedUrl);
            // gives handlers an opportunity to participate
            if (this.handlers) {
                this.handlers.forEach(handler => {
                    handler.prepareRequest(info.options);
                });
            }
            return info;
        }
        _mergeHeaders(headers) {
            const lowercaseKeys = obj => Object.keys(obj).reduce((c, k) => ((c[k.toLowerCase()] = obj[k]), c), {});
            if (this.requestOptions && this.requestOptions.headers) {
                return Object.assign({}, lowercaseKeys(this.requestOptions.headers), lowercaseKeys(headers));
            }
            return lowercaseKeys(headers || {});
        }
        _getExistingOrDefaultHeader(additionalHeaders, header, _default) {
            const lowercaseKeys = obj => Object.keys(obj).reduce((c, k) => ((c[k.toLowerCase()] = obj[k]), c), {});
            let clientHeader;
            if (this.requestOptions && this.requestOptions.headers) {
                clientHeader = lowercaseKeys(this.requestOptions.headers)[header];
            }
            return additionalHeaders[header] || clientHeader || _default;
        }
        _getAgent(parsedUrl) {
            let agent;
            let proxyUrl = proxy.getProxyUrl(parsedUrl);
            let useProxy = proxyUrl && proxyUrl.hostname;
            if (this._keepAlive && useProxy) {
                agent = this._proxyAgent;
            }
            if (this._keepAlive && !useProxy) {
                agent = this._agent;
            }
            // if agent is already assigned use that agent.
            if (!!agent) {
                return agent;
            }
            const usingSsl = parsedUrl.protocol === 'https:';
            let maxSockets = 100;
            if (!!this.requestOptions) {
                maxSockets = this.requestOptions.maxSockets || http.globalAgent.maxSockets;
            }
            if (useProxy) {
                // If using proxy, need tunnel
                if (!tunnel) {
                    tunnel = tunnel$1;
                }
                const agentOptions = {
                    maxSockets: maxSockets,
                    keepAlive: this._keepAlive,
                    proxy: {
                        proxyAuth: `${proxyUrl.username}:${proxyUrl.password}`,
                        host: proxyUrl.hostname,
                        port: proxyUrl.port
                    }
                };
                let tunnelAgent;
                const overHttps = proxyUrl.protocol === 'https:';
                if (usingSsl) {
                    tunnelAgent = overHttps ? tunnel.httpsOverHttps : tunnel.httpsOverHttp;
                }
                else {
                    tunnelAgent = overHttps ? tunnel.httpOverHttps : tunnel.httpOverHttp;
                }
                agent = tunnelAgent(agentOptions);
                this._proxyAgent = agent;
            }
            // if reusing agent across request and tunneling agent isn't assigned create a new agent
            if (this._keepAlive && !agent) {
                const options = { keepAlive: this._keepAlive, maxSockets: maxSockets };
                agent = usingSsl ? new https.Agent(options) : new http.Agent(options);
                this._agent = agent;
            }
            // if not using private agent and tunnel agent isn't setup then use global agent
            if (!agent) {
                agent = usingSsl ? https.globalAgent : http.globalAgent;
            }
            if (usingSsl && this._ignoreSslError) {
                // we don't want to set NODE_TLS_REJECT_UNAUTHORIZED=0 since that will affect request for entire process
                // http.RequestOptions doesn't expose a way to modify RequestOptions.agent.options
                // we have to cast it to any and change it directly
                agent.options = Object.assign(agent.options || {}, {
                    rejectUnauthorized: false
                });
            }
            return agent;
        }
        _performExponentialBackoff(retryNumber) {
            retryNumber = Math.min(ExponentialBackoffCeiling, retryNumber);
            const ms = ExponentialBackoffTimeSlice * Math.pow(2, retryNumber);
            return new Promise(resolve => setTimeout(() => resolve(), ms));
        }
        static dateTimeDeserializer(key, value) {
            if (typeof value === 'string') {
                let a = new Date(value);
                if (!isNaN(a.valueOf())) {
                    return a;
                }
            }
            return value;
        }
        async _processResponse(res, options) {
            return new Promise(async (resolve, reject) => {
                const statusCode = res.message.statusCode;
                const response = {
                    statusCode: statusCode,
                    result: null,
                    headers: {}
                };
                // not found leads to null obj returned
                if (statusCode == HttpCodes.NotFound) {
                    resolve(response);
                }
                let obj;
                let contents;
                // get the result from the body
                try {
                    contents = await res.readBody();
                    if (contents && contents.length > 0) {
                        if (options && options.deserializeDates) {
                            obj = JSON.parse(contents, HttpClient.dateTimeDeserializer);
                        }
                        else {
                            obj = JSON.parse(contents);
                        }
                        response.result = obj;
                    }
                    response.headers = res.message.headers;
                }
                catch (err) {
                    // Invalid resource (contents not json);  leaving result obj null
                }
                // note that 3xx redirects are handled by the http layer.
                if (statusCode > 299) {
                    let msg;
                    // if exception/error in body, attempt to get better error
                    if (obj && obj.message) {
                        msg = obj.message;
                    }
                    else if (contents && contents.length > 0) {
                        // it may be the case that the exception is in the body message as string
                        msg = contents;
                    }
                    else {
                        msg = 'Failed request: (' + statusCode + ')';
                    }
                    let err = new HttpClientError(msg, statusCode);
                    err.result = response.result;
                    reject(err);
                }
                else {
                    resolve(response);
                }
            });
        }
    }
    exports.HttpClient = HttpClient;
    });

    unwrapExports(httpClient);
    var httpClient_1 = httpClient.HttpCodes;
    var httpClient_2 = httpClient.Headers;
    var httpClient_3 = httpClient.MediaTypes;
    var httpClient_4 = httpClient.getProxyUrl;
    var httpClient_5 = httpClient.HttpClientError;
    var httpClient_6 = httpClient.HttpClientResponse;
    var httpClient_7 = httpClient.isHttps;
    var httpClient_8 = httpClient.HttpClient;

    var utils$1 = createCommonjsModule(function (module, exports) {
    var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }));
    var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
        o["default"] = v;
    });
    var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getApiBaseUrl = exports.getProxyAgent = exports.getAuthString = void 0;
    const httpClient$1 = __importStar(httpClient);
    function getAuthString(token, options) {
        if (!token && !options.auth) {
            throw new Error('Parameter token or opts.auth is required');
        }
        else if (token && options.auth) {
            throw new Error('Parameters token and opts.auth may not both be specified');
        }
        return typeof options.auth === 'string' ? options.auth : `token ${token}`;
    }
    exports.getAuthString = getAuthString;
    function getProxyAgent(destinationUrl) {
        const hc = new httpClient$1.HttpClient();
        return hc.getAgent(destinationUrl);
    }
    exports.getProxyAgent = getProxyAgent;
    function getApiBaseUrl() {
        return process.env['GITHUB_API_URL'] || 'https://api.github.com';
    }
    exports.getApiBaseUrl = getApiBaseUrl;
    //# sourceMappingURL=utils.js.map
    });

    unwrapExports(utils$1);
    var utils_1$1 = utils$1.getApiBaseUrl;
    var utils_2 = utils$1.getProxyAgent;
    var utils_3 = utils$1.getAuthString;

    function getUserAgent() {
        if (typeof navigator === "object" && "userAgent" in navigator) {
            return navigator.userAgent;
        }
        if (typeof process === "object" && "version" in process) {
            return `Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})`;
        }
        return "<environment undetectable>";
    }
    //# sourceMappingURL=index.js.map

    var register_1 = register;

    function register (state, name, method, options) {
      if (typeof method !== 'function') {
        throw new Error('method for before hook must be a function')
      }

      if (!options) {
        options = {};
      }

      if (Array.isArray(name)) {
        return name.reverse().reduce(function (callback, name) {
          return register.bind(null, state, name, callback, options)
        }, method)()
      }

      return Promise.resolve()
        .then(function () {
          if (!state.registry[name]) {
            return method(options)
          }

          return (state.registry[name]).reduce(function (method, registered) {
            return registered.hook.bind(null, method, options)
          }, method)()
        })
    }

    var add = addHook;

    function addHook (state, kind, name, hook) {
      var orig = hook;
      if (!state.registry[name]) {
        state.registry[name] = [];
      }

      if (kind === 'before') {
        hook = function (method, options) {
          return Promise.resolve()
            .then(orig.bind(null, options))
            .then(method.bind(null, options))
        };
      }

      if (kind === 'after') {
        hook = function (method, options) {
          var result;
          return Promise.resolve()
            .then(method.bind(null, options))
            .then(function (result_) {
              result = result_;
              return orig(result, options)
            })
            .then(function () {
              return result
            })
        };
      }

      if (kind === 'error') {
        hook = function (method, options) {
          return Promise.resolve()
            .then(method.bind(null, options))
            .catch(function (error) {
              return orig(error, options)
            })
        };
      }

      state.registry[name].push({
        hook: hook,
        orig: orig
      });
    }

    var remove = removeHook;

    function removeHook (state, name, method) {
      if (!state.registry[name]) {
        return
      }

      var index = state.registry[name]
        .map(function (registered) { return registered.orig })
        .indexOf(method);

      if (index === -1) {
        return
      }

      state.registry[name].splice(index, 1);
    }

    // bind with array of arguments: https://stackoverflow.com/a/21792913
    var bind = Function.bind;
    var bindable = bind.bind(bind);

    function bindApi (hook, state, name) {
      var removeHookRef = bindable(remove, null).apply(null, name ? [state, name] : [state]);
      hook.api = { remove: removeHookRef };
      hook.remove = removeHookRef

      ;['before', 'error', 'after', 'wrap'].forEach(function (kind) {
        var args = name ? [state, kind, name] : [state, kind];
        hook[kind] = hook.api[kind] = bindable(add, null).apply(null, args);
      });
    }

    function HookSingular () {
      var singularHookName = 'h';
      var singularHookState = {
        registry: {}
      };
      var singularHook = register_1.bind(null, singularHookState, singularHookName);
      bindApi(singularHook, singularHookState, singularHookName);
      return singularHook
    }

    function HookCollection () {
      var state = {
        registry: {}
      };

      var hook = register_1.bind(null, state);
      bindApi(hook, state);

      return hook
    }

    var collectionHookDeprecationMessageDisplayed = false;
    function Hook () {
      if (!collectionHookDeprecationMessageDisplayed) {
        console.warn('[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4');
        collectionHookDeprecationMessageDisplayed = true;
      }
      return HookCollection()
    }

    Hook.Singular = HookSingular.bind();
    Hook.Collection = HookCollection.bind();

    var beforeAfterHook = Hook;
    // expose constructors as a named property for TypeScript
    var Hook_1 = Hook;
    var Singular = Hook.Singular;
    var Collection = Hook.Collection;
    beforeAfterHook.Hook = Hook_1;
    beforeAfterHook.Singular = Singular;
    beforeAfterHook.Collection = Collection;

    /*!
     * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
     *
     * Copyright (c) 2014-2017, Jon Schlinkert.
     * Released under the MIT License.
     */

    function isObject(o) {
      return Object.prototype.toString.call(o) === '[object Object]';
    }

    function isPlainObject(o) {
      var ctor,prot;

      if (isObject(o) === false) return false;

      // If has modified constructor
      ctor = o.constructor;
      if (ctor === undefined) return true;

      // If has modified prototype
      prot = ctor.prototype;
      if (isObject(prot) === false) return false;

      // If constructor does not have an Object-specific method
      if (prot.hasOwnProperty('isPrototypeOf') === false) {
        return false;
      }

      // Most likely a plain Object
      return true;
    }

    function lowercaseKeys(object) {
        if (!object) {
            return {};
        }
        return Object.keys(object).reduce((newObj, key) => {
            newObj[key.toLowerCase()] = object[key];
            return newObj;
        }, {});
    }

    function mergeDeep(defaults, options) {
        const result = Object.assign({}, defaults);
        Object.keys(options).forEach((key) => {
            if (isPlainObject(options[key])) {
                if (!(key in defaults))
                    Object.assign(result, { [key]: options[key] });
                else
                    result[key] = mergeDeep(defaults[key], options[key]);
            }
            else {
                Object.assign(result, { [key]: options[key] });
            }
        });
        return result;
    }

    function removeUndefinedProperties(obj) {
        for (const key in obj) {
            if (obj[key] === undefined) {
                delete obj[key];
            }
        }
        return obj;
    }

    function merge(defaults, route, options) {
        if (typeof route === "string") {
            let [method, url] = route.split(" ");
            options = Object.assign(url ? { method, url } : { url: method }, options);
        }
        else {
            options = Object.assign({}, route);
        }
        // lowercase header names before merging with defaults to avoid duplicates
        options.headers = lowercaseKeys(options.headers);
        // remove properties with undefined values before merging
        removeUndefinedProperties(options);
        removeUndefinedProperties(options.headers);
        const mergedOptions = mergeDeep(defaults || {}, options);
        // mediaType.previews arrays are merged, instead of overwritten
        if (defaults && defaults.mediaType.previews.length) {
            mergedOptions.mediaType.previews = defaults.mediaType.previews
                .filter((preview) => !mergedOptions.mediaType.previews.includes(preview))
                .concat(mergedOptions.mediaType.previews);
        }
        mergedOptions.mediaType.previews = mergedOptions.mediaType.previews.map((preview) => preview.replace(/-preview/, ""));
        return mergedOptions;
    }

    function addQueryParameters(url, parameters) {
        const separator = /\?/.test(url) ? "&" : "?";
        const names = Object.keys(parameters);
        if (names.length === 0) {
            return url;
        }
        return (url +
            separator +
            names
                .map((name) => {
                if (name === "q") {
                    return ("q=" + parameters.q.split("+").map(encodeURIComponent).join("+"));
                }
                return `${name}=${encodeURIComponent(parameters[name])}`;
            })
                .join("&"));
    }

    const urlVariableRegex = /\{[^}]+\}/g;
    function removeNonChars(variableName) {
        return variableName.replace(/^\W+|\W+$/g, "").split(/,/);
    }
    function extractUrlVariableNames(url) {
        const matches = url.match(urlVariableRegex);
        if (!matches) {
            return [];
        }
        return matches.map(removeNonChars).reduce((a, b) => a.concat(b), []);
    }

    function omit(object, keysToOmit) {
        return Object.keys(object)
            .filter((option) => !keysToOmit.includes(option))
            .reduce((obj, key) => {
            obj[key] = object[key];
            return obj;
        }, {});
    }

    // Based on https://github.com/bramstein/url-template, licensed under BSD
    // TODO: create separate package.
    //
    // Copyright (c) 2012-2014, Bram Stein
    // All rights reserved.
    // Redistribution and use in source and binary forms, with or without
    // modification, are permitted provided that the following conditions
    // are met:
    //  1. Redistributions of source code must retain the above copyright
    //     notice, this list of conditions and the following disclaimer.
    //  2. Redistributions in binary form must reproduce the above copyright
    //     notice, this list of conditions and the following disclaimer in the
    //     documentation and/or other materials provided with the distribution.
    //  3. The name of the author may not be used to endorse or promote products
    //     derived from this software without specific prior written permission.
    // THIS SOFTWARE IS PROVIDED BY THE AUTHOR "AS IS" AND ANY EXPRESS OR IMPLIED
    // WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
    // MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
    // EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
    // INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
    // BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
    // DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
    // OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
    // NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
    // EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    /* istanbul ignore file */
    function encodeReserved(str) {
        return str
            .split(/(%[0-9A-Fa-f]{2})/g)
            .map(function (part) {
            if (!/%[0-9A-Fa-f]/.test(part)) {
                part = encodeURI(part).replace(/%5B/g, "[").replace(/%5D/g, "]");
            }
            return part;
        })
            .join("");
    }
    function encodeUnreserved(str) {
        return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
            return "%" + c.charCodeAt(0).toString(16).toUpperCase();
        });
    }
    function encodeValue(operator, value, key) {
        value =
            operator === "+" || operator === "#"
                ? encodeReserved(value)
                : encodeUnreserved(value);
        if (key) {
            return encodeUnreserved(key) + "=" + value;
        }
        else {
            return value;
        }
    }
    function isDefined(value) {
        return value !== undefined && value !== null;
    }
    function isKeyOperator(operator) {
        return operator === ";" || operator === "&" || operator === "?";
    }
    function getValues(context, operator, key, modifier) {
        var value = context[key], result = [];
        if (isDefined(value) && value !== "") {
            if (typeof value === "string" ||
                typeof value === "number" ||
                typeof value === "boolean") {
                value = value.toString();
                if (modifier && modifier !== "*") {
                    value = value.substring(0, parseInt(modifier, 10));
                }
                result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : ""));
            }
            else {
                if (modifier === "*") {
                    if (Array.isArray(value)) {
                        value.filter(isDefined).forEach(function (value) {
                            result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : ""));
                        });
                    }
                    else {
                        Object.keys(value).forEach(function (k) {
                            if (isDefined(value[k])) {
                                result.push(encodeValue(operator, value[k], k));
                            }
                        });
                    }
                }
                else {
                    const tmp = [];
                    if (Array.isArray(value)) {
                        value.filter(isDefined).forEach(function (value) {
                            tmp.push(encodeValue(operator, value));
                        });
                    }
                    else {
                        Object.keys(value).forEach(function (k) {
                            if (isDefined(value[k])) {
                                tmp.push(encodeUnreserved(k));
                                tmp.push(encodeValue(operator, value[k].toString()));
                            }
                        });
                    }
                    if (isKeyOperator(operator)) {
                        result.push(encodeUnreserved(key) + "=" + tmp.join(","));
                    }
                    else if (tmp.length !== 0) {
                        result.push(tmp.join(","));
                    }
                }
            }
        }
        else {
            if (operator === ";") {
                if (isDefined(value)) {
                    result.push(encodeUnreserved(key));
                }
            }
            else if (value === "" && (operator === "&" || operator === "?")) {
                result.push(encodeUnreserved(key) + "=");
            }
            else if (value === "") {
                result.push("");
            }
        }
        return result;
    }
    function parseUrl(template) {
        return {
            expand: expand.bind(null, template),
        };
    }
    function expand(template, context) {
        var operators = ["+", "#", ".", "/", ";", "?", "&"];
        return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (_, expression, literal) {
            if (expression) {
                let operator = "";
                const values = [];
                if (operators.indexOf(expression.charAt(0)) !== -1) {
                    operator = expression.charAt(0);
                    expression = expression.substr(1);
                }
                expression.split(/,/g).forEach(function (variable) {
                    var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
                    values.push(getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
                });
                if (operator && operator !== "+") {
                    var separator = ",";
                    if (operator === "?") {
                        separator = "&";
                    }
                    else if (operator !== "#") {
                        separator = operator;
                    }
                    return (values.length !== 0 ? operator : "") + values.join(separator);
                }
                else {
                    return values.join(",");
                }
            }
            else {
                return encodeReserved(literal);
            }
        });
    }

    function parse(options) {
        // https://fetch.spec.whatwg.org/#methods
        let method = options.method.toUpperCase();
        // replace :varname with {varname} to make it RFC 6570 compatible
        let url = (options.url || "/").replace(/:([a-z]\w+)/g, "{$1}");
        let headers = Object.assign({}, options.headers);
        let body;
        let parameters = omit(options, [
            "method",
            "baseUrl",
            "url",
            "headers",
            "request",
            "mediaType",
        ]);
        // extract variable names from URL to calculate remaining variables later
        const urlVariableNames = extractUrlVariableNames(url);
        url = parseUrl(url).expand(parameters);
        if (!/^http/.test(url)) {
            url = options.baseUrl + url;
        }
        const omittedParameters = Object.keys(options)
            .filter((option) => urlVariableNames.includes(option))
            .concat("baseUrl");
        const remainingParameters = omit(parameters, omittedParameters);
        const isBinaryRequest = /application\/octet-stream/i.test(headers.accept);
        if (!isBinaryRequest) {
            if (options.mediaType.format) {
                // e.g. application/vnd.github.v3+json => application/vnd.github.v3.raw
                headers.accept = headers.accept
                    .split(/,/)
                    .map((preview) => preview.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/, `application/vnd$1$2.${options.mediaType.format}`))
                    .join(",");
            }
            if (options.mediaType.previews.length) {
                const previewsFromAcceptHeader = headers.accept.match(/[\w-]+(?=-preview)/g) || [];
                headers.accept = previewsFromAcceptHeader
                    .concat(options.mediaType.previews)
                    .map((preview) => {
                    const format = options.mediaType.format
                        ? `.${options.mediaType.format}`
                        : "+json";
                    return `application/vnd.github.${preview}-preview${format}`;
                })
                    .join(",");
            }
        }
        // for GET/HEAD requests, set URL query parameters from remaining parameters
        // for PATCH/POST/PUT/DELETE requests, set request body from remaining parameters
        if (["GET", "HEAD"].includes(method)) {
            url = addQueryParameters(url, remainingParameters);
        }
        else {
            if ("data" in remainingParameters) {
                body = remainingParameters.data;
            }
            else {
                if (Object.keys(remainingParameters).length) {
                    body = remainingParameters;
                }
                else {
                    headers["content-length"] = 0;
                }
            }
        }
        // default content-type for JSON if body is set
        if (!headers["content-type"] && typeof body !== "undefined") {
            headers["content-type"] = "application/json; charset=utf-8";
        }
        // GitHub expects 'content-length: 0' header for PUT/PATCH requests without body.
        // fetch does not allow to set `content-length` header, but we can set body to an empty string
        if (["PATCH", "PUT"].includes(method) && typeof body === "undefined") {
            body = "";
        }
        // Only return body/request keys if present
        return Object.assign({ method, url, headers }, typeof body !== "undefined" ? { body } : null, options.request ? { request: options.request } : null);
    }

    function endpointWithDefaults(defaults, route, options) {
        return parse(merge(defaults, route, options));
    }

    function withDefaults(oldDefaults, newDefaults) {
        const DEFAULTS = merge(oldDefaults, newDefaults);
        const endpoint = endpointWithDefaults.bind(null, DEFAULTS);
        return Object.assign(endpoint, {
            DEFAULTS,
            defaults: withDefaults.bind(null, DEFAULTS),
            merge: merge.bind(null, DEFAULTS),
            parse,
        });
    }

    const VERSION = "6.0.10";

    const userAgent = `octokit-endpoint.js/${VERSION} ${getUserAgent()}`;
    // DEFAULTS has all properties set that EndpointOptions has, except url.
    // So we use RequestParameters and add method as additional required property.
    const DEFAULTS = {
        method: "GET",
        baseUrl: "https://api.github.com",
        headers: {
            accept: "application/vnd.github.v3+json",
            "user-agent": userAgent,
        },
        mediaType: {
            format: "",
            previews: [],
        },
    };

    const endpoint = withDefaults(null, DEFAULTS);
    //# sourceMappingURL=index.js.map

    // Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js

    // fix for "Readable" isn't a named export issue
    const Readable = Stream.Readable;

    const BUFFER = Symbol('buffer');
    const TYPE = Symbol('type');

    class Blob {
    	constructor() {
    		this[TYPE] = '';

    		const blobParts = arguments[0];
    		const options = arguments[1];

    		const buffers = [];
    		let size = 0;

    		if (blobParts) {
    			const a = blobParts;
    			const length = Number(a.length);
    			for (let i = 0; i < length; i++) {
    				const element = a[i];
    				let buffer;
    				if (element instanceof Buffer) {
    					buffer = element;
    				} else if (ArrayBuffer.isView(element)) {
    					buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
    				} else if (element instanceof ArrayBuffer) {
    					buffer = Buffer.from(element);
    				} else if (element instanceof Blob) {
    					buffer = element[BUFFER];
    				} else {
    					buffer = Buffer.from(typeof element === 'string' ? element : String(element));
    				}
    				size += buffer.length;
    				buffers.push(buffer);
    			}
    		}

    		this[BUFFER] = Buffer.concat(buffers);

    		let type = options && options.type !== undefined && String(options.type).toLowerCase();
    		if (type && !/[^\u0020-\u007E]/.test(type)) {
    			this[TYPE] = type;
    		}
    	}
    	get size() {
    		return this[BUFFER].length;
    	}
    	get type() {
    		return this[TYPE];
    	}
    	text() {
    		return Promise.resolve(this[BUFFER].toString());
    	}
    	arrayBuffer() {
    		const buf = this[BUFFER];
    		const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
    		return Promise.resolve(ab);
    	}
    	stream() {
    		const readable = new Readable();
    		readable._read = function () {};
    		readable.push(this[BUFFER]);
    		readable.push(null);
    		return readable;
    	}
    	toString() {
    		return '[object Blob]';
    	}
    	slice() {
    		const size = this.size;

    		const start = arguments[0];
    		const end = arguments[1];
    		let relativeStart, relativeEnd;
    		if (start === undefined) {
    			relativeStart = 0;
    		} else if (start < 0) {
    			relativeStart = Math.max(size + start, 0);
    		} else {
    			relativeStart = Math.min(start, size);
    		}
    		if (end === undefined) {
    			relativeEnd = size;
    		} else if (end < 0) {
    			relativeEnd = Math.max(size + end, 0);
    		} else {
    			relativeEnd = Math.min(end, size);
    		}
    		const span = Math.max(relativeEnd - relativeStart, 0);

    		const buffer = this[BUFFER];
    		const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
    		const blob = new Blob([], { type: arguments[2] });
    		blob[BUFFER] = slicedBuffer;
    		return blob;
    	}
    }

    Object.defineProperties(Blob.prototype, {
    	size: { enumerable: true },
    	type: { enumerable: true },
    	slice: { enumerable: true }
    });

    Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
    	value: 'Blob',
    	writable: false,
    	enumerable: false,
    	configurable: true
    });

    /**
     * fetch-error.js
     *
     * FetchError interface for operational errors
     */

    /**
     * Create FetchError instance
     *
     * @param   String      message      Error message for human
     * @param   String      type         Error type for machine
     * @param   String      systemError  For Node.js system error
     * @return  FetchError
     */
    function FetchError(message, type, systemError) {
      Error.call(this, message);

      this.message = message;
      this.type = type;

      // when err.type is `system`, err.code contains system error code
      if (systemError) {
        this.code = this.errno = systemError.code;
      }

      // hide custom error implementation details from end-users
      Error.captureStackTrace(this, this.constructor);
    }

    FetchError.prototype = Object.create(Error.prototype);
    FetchError.prototype.constructor = FetchError;
    FetchError.prototype.name = 'FetchError';

    let convert;
    try {
    	convert = require('encoding').convert;
    } catch (e) {}

    const INTERNALS = Symbol('Body internals');

    // fix an issue where "PassThrough" isn't a named export for node <10
    const PassThrough = Stream.PassThrough;

    /**
     * Body mixin
     *
     * Ref: https://fetch.spec.whatwg.org/#body
     *
     * @param   Stream  body  Readable stream
     * @param   Object  opts  Response options
     * @return  Void
     */
    function Body(body) {
    	var _this = this;

    	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    	    _ref$size = _ref.size;

    	let size = _ref$size === undefined ? 0 : _ref$size;
    	var _ref$timeout = _ref.timeout;
    	let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;

    	if (body == null) {
    		// body is undefined or null
    		body = null;
    	} else if (isURLSearchParams(body)) {
    		// body is a URLSearchParams
    		body = Buffer.from(body.toString());
    	} else if (isBlob(body)) ; else if (Buffer.isBuffer(body)) ; else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
    		// body is ArrayBuffer
    		body = Buffer.from(body);
    	} else if (ArrayBuffer.isView(body)) {
    		// body is ArrayBufferView
    		body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
    	} else if (body instanceof Stream) ; else {
    		// none of the above
    		// coerce to string then buffer
    		body = Buffer.from(String(body));
    	}
    	this[INTERNALS] = {
    		body,
    		disturbed: false,
    		error: null
    	};
    	this.size = size;
    	this.timeout = timeout;

    	if (body instanceof Stream) {
    		body.on('error', function (err) {
    			const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
    			_this[INTERNALS].error = error;
    		});
    	}
    }

    Body.prototype = {
    	get body() {
    		return this[INTERNALS].body;
    	},

    	get bodyUsed() {
    		return this[INTERNALS].disturbed;
    	},

    	/**
      * Decode response as ArrayBuffer
      *
      * @return  Promise
      */
    	arrayBuffer() {
    		return consumeBody.call(this).then(function (buf) {
    			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
    		});
    	},

    	/**
      * Return raw response as Blob
      *
      * @return Promise
      */
    	blob() {
    		let ct = this.headers && this.headers.get('content-type') || '';
    		return consumeBody.call(this).then(function (buf) {
    			return Object.assign(
    			// Prevent copying
    			new Blob([], {
    				type: ct.toLowerCase()
    			}), {
    				[BUFFER]: buf
    			});
    		});
    	},

    	/**
      * Decode response as json
      *
      * @return  Promise
      */
    	json() {
    		var _this2 = this;

    		return consumeBody.call(this).then(function (buffer) {
    			try {
    				return JSON.parse(buffer.toString());
    			} catch (err) {
    				return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
    			}
    		});
    	},

    	/**
      * Decode response as text
      *
      * @return  Promise
      */
    	text() {
    		return consumeBody.call(this).then(function (buffer) {
    			return buffer.toString();
    		});
    	},

    	/**
      * Decode response as buffer (non-spec api)
      *
      * @return  Promise
      */
    	buffer() {
    		return consumeBody.call(this);
    	},

    	/**
      * Decode response as text, while automatically detecting the encoding and
      * trying to decode to UTF-8 (non-spec api)
      *
      * @return  Promise
      */
    	textConverted() {
    		var _this3 = this;

    		return consumeBody.call(this).then(function (buffer) {
    			return convertBody(buffer, _this3.headers);
    		});
    	}
    };

    // In browsers, all properties are enumerable.
    Object.defineProperties(Body.prototype, {
    	body: { enumerable: true },
    	bodyUsed: { enumerable: true },
    	arrayBuffer: { enumerable: true },
    	blob: { enumerable: true },
    	json: { enumerable: true },
    	text: { enumerable: true }
    });

    Body.mixIn = function (proto) {
    	for (const name of Object.getOwnPropertyNames(Body.prototype)) {
    		// istanbul ignore else: future proof
    		if (!(name in proto)) {
    			const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
    			Object.defineProperty(proto, name, desc);
    		}
    	}
    };

    /**
     * Consume and convert an entire Body to a Buffer.
     *
     * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
     *
     * @return  Promise
     */
    function consumeBody() {
    	var _this4 = this;

    	if (this[INTERNALS].disturbed) {
    		return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
    	}

    	this[INTERNALS].disturbed = true;

    	if (this[INTERNALS].error) {
    		return Body.Promise.reject(this[INTERNALS].error);
    	}

    	let body = this.body;

    	// body is null
    	if (body === null) {
    		return Body.Promise.resolve(Buffer.alloc(0));
    	}

    	// body is blob
    	if (isBlob(body)) {
    		body = body.stream();
    	}

    	// body is buffer
    	if (Buffer.isBuffer(body)) {
    		return Body.Promise.resolve(body);
    	}

    	// istanbul ignore if: should never happen
    	if (!(body instanceof Stream)) {
    		return Body.Promise.resolve(Buffer.alloc(0));
    	}

    	// body is stream
    	// get ready to actually consume the body
    	let accum = [];
    	let accumBytes = 0;
    	let abort = false;

    	return new Body.Promise(function (resolve, reject) {
    		let resTimeout;

    		// allow timeout on slow response body
    		if (_this4.timeout) {
    			resTimeout = setTimeout(function () {
    				abort = true;
    				reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
    			}, _this4.timeout);
    		}

    		// handle stream errors
    		body.on('error', function (err) {
    			if (err.name === 'AbortError') {
    				// if the request was aborted, reject with this Error
    				abort = true;
    				reject(err);
    			} else {
    				// other errors, such as incorrect content-encoding
    				reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
    			}
    		});

    		body.on('data', function (chunk) {
    			if (abort || chunk === null) {
    				return;
    			}

    			if (_this4.size && accumBytes + chunk.length > _this4.size) {
    				abort = true;
    				reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
    				return;
    			}

    			accumBytes += chunk.length;
    			accum.push(chunk);
    		});

    		body.on('end', function () {
    			if (abort) {
    				return;
    			}

    			clearTimeout(resTimeout);

    			try {
    				resolve(Buffer.concat(accum, accumBytes));
    			} catch (err) {
    				// handle streams that have accumulated too much data (issue #414)
    				reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
    			}
    		});
    	});
    }

    /**
     * Detect buffer encoding and convert to target encoding
     * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
     *
     * @param   Buffer  buffer    Incoming buffer
     * @param   String  encoding  Target encoding
     * @return  String
     */
    function convertBody(buffer, headers) {
    	if (typeof convert !== 'function') {
    		throw new Error('The package `encoding` must be installed to use the textConverted() function');
    	}

    	const ct = headers.get('content-type');
    	let charset = 'utf-8';
    	let res, str;

    	// header
    	if (ct) {
    		res = /charset=([^;]*)/i.exec(ct);
    	}

    	// no charset in content type, peek at response body for at most 1024 bytes
    	str = buffer.slice(0, 1024).toString();

    	// html5
    	if (!res && str) {
    		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
    	}

    	// html4
    	if (!res && str) {
    		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);
    		if (!res) {
    			res = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(str);
    			if (res) {
    				res.pop(); // drop last quote
    			}
    		}

    		if (res) {
    			res = /charset=(.*)/i.exec(res.pop());
    		}
    	}

    	// xml
    	if (!res && str) {
    		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
    	}

    	// found charset
    	if (res) {
    		charset = res.pop();

    		// prevent decode issues when sites use incorrect encoding
    		// ref: https://hsivonen.fi/encoding-menu/
    		if (charset === 'gb2312' || charset === 'gbk') {
    			charset = 'gb18030';
    		}
    	}

    	// turn raw buffers into a single utf-8 buffer
    	return convert(buffer, 'UTF-8', charset).toString();
    }

    /**
     * Detect a URLSearchParams object
     * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
     *
     * @param   Object  obj     Object to detect by type or brand
     * @return  String
     */
    function isURLSearchParams(obj) {
    	// Duck-typing as a necessary condition.
    	if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
    		return false;
    	}

    	// Brand-checking and more duck-typing as optional condition.
    	return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
    }

    /**
     * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
     * @param  {*} obj
     * @return {boolean}
     */
    function isBlob(obj) {
    	return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
    }

    /**
     * Clone body given Res/Req instance
     *
     * @param   Mixed  instance  Response or Request instance
     * @return  Mixed
     */
    function clone(instance) {
    	let p1, p2;
    	let body = instance.body;

    	// don't allow cloning a used body
    	if (instance.bodyUsed) {
    		throw new Error('cannot clone body after it is used');
    	}

    	// check that body is a stream and not form-data object
    	// note: we can't clone the form-data object without having it as a dependency
    	if (body instanceof Stream && typeof body.getBoundary !== 'function') {
    		// tee instance body
    		p1 = new PassThrough();
    		p2 = new PassThrough();
    		body.pipe(p1);
    		body.pipe(p2);
    		// set instance body to teed body and return the other teed body
    		instance[INTERNALS].body = p1;
    		body = p2;
    	}

    	return body;
    }

    /**
     * Performs the operation "extract a `Content-Type` value from |object|" as
     * specified in the specification:
     * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
     *
     * This function assumes that instance.body is present.
     *
     * @param   Mixed  instance  Any options.body input
     */
    function extractContentType(body) {
    	if (body === null) {
    		// body is null
    		return null;
    	} else if (typeof body === 'string') {
    		// body is string
    		return 'text/plain;charset=UTF-8';
    	} else if (isURLSearchParams(body)) {
    		// body is a URLSearchParams
    		return 'application/x-www-form-urlencoded;charset=UTF-8';
    	} else if (isBlob(body)) {
    		// body is blob
    		return body.type || null;
    	} else if (Buffer.isBuffer(body)) {
    		// body is buffer
    		return null;
    	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
    		// body is ArrayBuffer
    		return null;
    	} else if (ArrayBuffer.isView(body)) {
    		// body is ArrayBufferView
    		return null;
    	} else if (typeof body.getBoundary === 'function') {
    		// detect form data input from form-data module
    		return `multipart/form-data;boundary=${body.getBoundary()}`;
    	} else if (body instanceof Stream) {
    		// body is stream
    		// can't really do much about this
    		return null;
    	} else {
    		// Body constructor defaults other things to string
    		return 'text/plain;charset=UTF-8';
    	}
    }

    /**
     * The Fetch Standard treats this as if "total bytes" is a property on the body.
     * For us, we have to explicitly get it with a function.
     *
     * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
     *
     * @param   Body    instance   Instance of Body
     * @return  Number?            Number of bytes, or null if not possible
     */
    function getTotalBytes(instance) {
    	const body = instance.body;


    	if (body === null) {
    		// body is null
    		return 0;
    	} else if (isBlob(body)) {
    		return body.size;
    	} else if (Buffer.isBuffer(body)) {
    		// body is buffer
    		return body.length;
    	} else if (body && typeof body.getLengthSync === 'function') {
    		// detect form data input from form-data module
    		if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
    		body.hasKnownLength && body.hasKnownLength()) {
    			// 2.x
    			return body.getLengthSync();
    		}
    		return null;
    	} else {
    		// body is stream
    		return null;
    	}
    }

    /**
     * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
     *
     * @param   Body    instance   Instance of Body
     * @return  Void
     */
    function writeToStream(dest, instance) {
    	const body = instance.body;


    	if (body === null) {
    		// body is null
    		dest.end();
    	} else if (isBlob(body)) {
    		body.stream().pipe(dest);
    	} else if (Buffer.isBuffer(body)) {
    		// body is buffer
    		dest.write(body);
    		dest.end();
    	} else {
    		// body is stream
    		body.pipe(dest);
    	}
    }

    // expose Promise
    Body.Promise = global.Promise;

    /**
     * headers.js
     *
     * Headers class offers convenient helpers
     */

    const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
    const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

    function validateName(name) {
    	name = `${name}`;
    	if (invalidTokenRegex.test(name) || name === '') {
    		throw new TypeError(`${name} is not a legal HTTP header name`);
    	}
    }

    function validateValue(value) {
    	value = `${value}`;
    	if (invalidHeaderCharRegex.test(value)) {
    		throw new TypeError(`${value} is not a legal HTTP header value`);
    	}
    }

    /**
     * Find the key in the map object given a header name.
     *
     * Returns undefined if not found.
     *
     * @param   String  name  Header name
     * @return  String|Undefined
     */
    function find(map, name) {
    	name = name.toLowerCase();
    	for (const key in map) {
    		if (key.toLowerCase() === name) {
    			return key;
    		}
    	}
    	return undefined;
    }

    const MAP = Symbol('map');
    class Headers {
    	/**
      * Headers class
      *
      * @param   Object  headers  Response headers
      * @return  Void
      */
    	constructor() {
    		let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

    		this[MAP] = Object.create(null);

    		if (init instanceof Headers) {
    			const rawHeaders = init.raw();
    			const headerNames = Object.keys(rawHeaders);

    			for (const headerName of headerNames) {
    				for (const value of rawHeaders[headerName]) {
    					this.append(headerName, value);
    				}
    			}

    			return;
    		}

    		// We don't worry about converting prop to ByteString here as append()
    		// will handle it.
    		if (init == null) ; else if (typeof init === 'object') {
    			const method = init[Symbol.iterator];
    			if (method != null) {
    				if (typeof method !== 'function') {
    					throw new TypeError('Header pairs must be iterable');
    				}

    				// sequence<sequence<ByteString>>
    				// Note: per spec we have to first exhaust the lists then process them
    				const pairs = [];
    				for (const pair of init) {
    					if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
    						throw new TypeError('Each header pair must be iterable');
    					}
    					pairs.push(Array.from(pair));
    				}

    				for (const pair of pairs) {
    					if (pair.length !== 2) {
    						throw new TypeError('Each header pair must be a name/value tuple');
    					}
    					this.append(pair[0], pair[1]);
    				}
    			} else {
    				// record<ByteString, ByteString>
    				for (const key of Object.keys(init)) {
    					const value = init[key];
    					this.append(key, value);
    				}
    			}
    		} else {
    			throw new TypeError('Provided initializer must be an object');
    		}
    	}

    	/**
      * Return combined header value given name
      *
      * @param   String  name  Header name
      * @return  Mixed
      */
    	get(name) {
    		name = `${name}`;
    		validateName(name);
    		const key = find(this[MAP], name);
    		if (key === undefined) {
    			return null;
    		}

    		return this[MAP][key].join(', ');
    	}

    	/**
      * Iterate over all headers
      *
      * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
      * @param   Boolean   thisArg   `this` context for callback function
      * @return  Void
      */
    	forEach(callback) {
    		let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

    		let pairs = getHeaders(this);
    		let i = 0;
    		while (i < pairs.length) {
    			var _pairs$i = pairs[i];
    			const name = _pairs$i[0],
    			      value = _pairs$i[1];

    			callback.call(thisArg, value, name, this);
    			pairs = getHeaders(this);
    			i++;
    		}
    	}

    	/**
      * Overwrite header values given name
      *
      * @param   String  name   Header name
      * @param   String  value  Header value
      * @return  Void
      */
    	set(name, value) {
    		name = `${name}`;
    		value = `${value}`;
    		validateName(name);
    		validateValue(value);
    		const key = find(this[MAP], name);
    		this[MAP][key !== undefined ? key : name] = [value];
    	}

    	/**
      * Append a value onto existing header
      *
      * @param   String  name   Header name
      * @param   String  value  Header value
      * @return  Void
      */
    	append(name, value) {
    		name = `${name}`;
    		value = `${value}`;
    		validateName(name);
    		validateValue(value);
    		const key = find(this[MAP], name);
    		if (key !== undefined) {
    			this[MAP][key].push(value);
    		} else {
    			this[MAP][name] = [value];
    		}
    	}

    	/**
      * Check for header name existence
      *
      * @param   String   name  Header name
      * @return  Boolean
      */
    	has(name) {
    		name = `${name}`;
    		validateName(name);
    		return find(this[MAP], name) !== undefined;
    	}

    	/**
      * Delete all header values given name
      *
      * @param   String  name  Header name
      * @return  Void
      */
    	delete(name) {
    		name = `${name}`;
    		validateName(name);
    		const key = find(this[MAP], name);
    		if (key !== undefined) {
    			delete this[MAP][key];
    		}
    	}

    	/**
      * Return raw headers (non-spec api)
      *
      * @return  Object
      */
    	raw() {
    		return this[MAP];
    	}

    	/**
      * Get an iterator on keys.
      *
      * @return  Iterator
      */
    	keys() {
    		return createHeadersIterator(this, 'key');
    	}

    	/**
      * Get an iterator on values.
      *
      * @return  Iterator
      */
    	values() {
    		return createHeadersIterator(this, 'value');
    	}

    	/**
      * Get an iterator on entries.
      *
      * This is the default iterator of the Headers object.
      *
      * @return  Iterator
      */
    	[Symbol.iterator]() {
    		return createHeadersIterator(this, 'key+value');
    	}
    }
    Headers.prototype.entries = Headers.prototype[Symbol.iterator];

    Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
    	value: 'Headers',
    	writable: false,
    	enumerable: false,
    	configurable: true
    });

    Object.defineProperties(Headers.prototype, {
    	get: { enumerable: true },
    	forEach: { enumerable: true },
    	set: { enumerable: true },
    	append: { enumerable: true },
    	has: { enumerable: true },
    	delete: { enumerable: true },
    	keys: { enumerable: true },
    	values: { enumerable: true },
    	entries: { enumerable: true }
    });

    function getHeaders(headers) {
    	let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';

    	const keys = Object.keys(headers[MAP]).sort();
    	return keys.map(kind === 'key' ? function (k) {
    		return k.toLowerCase();
    	} : kind === 'value' ? function (k) {
    		return headers[MAP][k].join(', ');
    	} : function (k) {
    		return [k.toLowerCase(), headers[MAP][k].join(', ')];
    	});
    }

    const INTERNAL = Symbol('internal');

    function createHeadersIterator(target, kind) {
    	const iterator = Object.create(HeadersIteratorPrototype);
    	iterator[INTERNAL] = {
    		target,
    		kind,
    		index: 0
    	};
    	return iterator;
    }

    const HeadersIteratorPrototype = Object.setPrototypeOf({
    	next() {
    		// istanbul ignore if
    		if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
    			throw new TypeError('Value of `this` is not a HeadersIterator');
    		}

    		var _INTERNAL = this[INTERNAL];
    		const target = _INTERNAL.target,
    		      kind = _INTERNAL.kind,
    		      index = _INTERNAL.index;

    		const values = getHeaders(target, kind);
    		const len = values.length;
    		if (index >= len) {
    			return {
    				value: undefined,
    				done: true
    			};
    		}

    		this[INTERNAL].index = index + 1;

    		return {
    			value: values[index],
    			done: false
    		};
    	}
    }, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

    Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
    	value: 'HeadersIterator',
    	writable: false,
    	enumerable: false,
    	configurable: true
    });

    /**
     * Export the Headers object in a form that Node.js can consume.
     *
     * @param   Headers  headers
     * @return  Object
     */
    function exportNodeCompatibleHeaders(headers) {
    	const obj = Object.assign({ __proto__: null }, headers[MAP]);

    	// http.request() only supports string as Host header. This hack makes
    	// specifying custom Host header possible.
    	const hostHeaderKey = find(headers[MAP], 'Host');
    	if (hostHeaderKey !== undefined) {
    		obj[hostHeaderKey] = obj[hostHeaderKey][0];
    	}

    	return obj;
    }

    /**
     * Create a Headers object from an object of headers, ignoring those that do
     * not conform to HTTP grammar productions.
     *
     * @param   Object  obj  Object of headers
     * @return  Headers
     */
    function createHeadersLenient(obj) {
    	const headers = new Headers();
    	for (const name of Object.keys(obj)) {
    		if (invalidTokenRegex.test(name)) {
    			continue;
    		}
    		if (Array.isArray(obj[name])) {
    			for (const val of obj[name]) {
    				if (invalidHeaderCharRegex.test(val)) {
    					continue;
    				}
    				if (headers[MAP][name] === undefined) {
    					headers[MAP][name] = [val];
    				} else {
    					headers[MAP][name].push(val);
    				}
    			}
    		} else if (!invalidHeaderCharRegex.test(obj[name])) {
    			headers[MAP][name] = [obj[name]];
    		}
    	}
    	return headers;
    }

    const INTERNALS$1 = Symbol('Response internals');

    // fix an issue where "STATUS_CODES" aren't a named export for node <10
    const STATUS_CODES = http.STATUS_CODES;

    /**
     * Response class
     *
     * @param   Stream  body  Readable stream
     * @param   Object  opts  Response options
     * @return  Void
     */
    class Response {
    	constructor() {
    		let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    		let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    		Body.call(this, body, opts);

    		const status = opts.status || 200;
    		const headers = new Headers(opts.headers);

    		if (body != null && !headers.has('Content-Type')) {
    			const contentType = extractContentType(body);
    			if (contentType) {
    				headers.append('Content-Type', contentType);
    			}
    		}

    		this[INTERNALS$1] = {
    			url: opts.url,
    			status,
    			statusText: opts.statusText || STATUS_CODES[status],
    			headers,
    			counter: opts.counter
    		};
    	}

    	get url() {
    		return this[INTERNALS$1].url || '';
    	}

    	get status() {
    		return this[INTERNALS$1].status;
    	}

    	/**
      * Convenience property representing if the request ended normally
      */
    	get ok() {
    		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
    	}

    	get redirected() {
    		return this[INTERNALS$1].counter > 0;
    	}

    	get statusText() {
    		return this[INTERNALS$1].statusText;
    	}

    	get headers() {
    		return this[INTERNALS$1].headers;
    	}

    	/**
      * Clone this response
      *
      * @return  Response
      */
    	clone() {
    		return new Response(clone(this), {
    			url: this.url,
    			status: this.status,
    			statusText: this.statusText,
    			headers: this.headers,
    			ok: this.ok,
    			redirected: this.redirected
    		});
    	}
    }

    Body.mixIn(Response.prototype);

    Object.defineProperties(Response.prototype, {
    	url: { enumerable: true },
    	status: { enumerable: true },
    	ok: { enumerable: true },
    	redirected: { enumerable: true },
    	statusText: { enumerable: true },
    	headers: { enumerable: true },
    	clone: { enumerable: true }
    });

    Object.defineProperty(Response.prototype, Symbol.toStringTag, {
    	value: 'Response',
    	writable: false,
    	enumerable: false,
    	configurable: true
    });

    const INTERNALS$2 = Symbol('Request internals');

    // fix an issue where "format", "parse" aren't a named export for node <10
    const parse_url = Url.parse;
    const format_url = Url.format;

    const streamDestructionSupported = 'destroy' in Stream.Readable.prototype;

    /**
     * Check if a value is an instance of Request.
     *
     * @param   Mixed   input
     * @return  Boolean
     */
    function isRequest(input) {
    	return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
    }

    function isAbortSignal(signal) {
    	const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
    	return !!(proto && proto.constructor.name === 'AbortSignal');
    }

    /**
     * Request class
     *
     * @param   Mixed   input  Url or Request instance
     * @param   Object  init   Custom options
     * @return  Void
     */
    class Request {
    	constructor(input) {
    		let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    		let parsedURL;

    		// normalize input
    		if (!isRequest(input)) {
    			if (input && input.href) {
    				// in order to support Node.js' Url objects; though WHATWG's URL objects
    				// will fall into this branch also (since their `toString()` will return
    				// `href` property anyway)
    				parsedURL = parse_url(input.href);
    			} else {
    				// coerce input to a string before attempting to parse
    				parsedURL = parse_url(`${input}`);
    			}
    			input = {};
    		} else {
    			parsedURL = parse_url(input.url);
    		}

    		let method = init.method || input.method || 'GET';
    		method = method.toUpperCase();

    		if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
    			throw new TypeError('Request with GET/HEAD method cannot have body');
    		}

    		let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;

    		Body.call(this, inputBody, {
    			timeout: init.timeout || input.timeout || 0,
    			size: init.size || input.size || 0
    		});

    		const headers = new Headers(init.headers || input.headers || {});

    		if (inputBody != null && !headers.has('Content-Type')) {
    			const contentType = extractContentType(inputBody);
    			if (contentType) {
    				headers.append('Content-Type', contentType);
    			}
    		}

    		let signal = isRequest(input) ? input.signal : null;
    		if ('signal' in init) signal = init.signal;

    		if (signal != null && !isAbortSignal(signal)) {
    			throw new TypeError('Expected signal to be an instanceof AbortSignal');
    		}

    		this[INTERNALS$2] = {
    			method,
    			redirect: init.redirect || input.redirect || 'follow',
    			headers,
    			parsedURL,
    			signal
    		};

    		// node-fetch-only options
    		this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
    		this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
    		this.counter = init.counter || input.counter || 0;
    		this.agent = init.agent || input.agent;
    	}

    	get method() {
    		return this[INTERNALS$2].method;
    	}

    	get url() {
    		return format_url(this[INTERNALS$2].parsedURL);
    	}

    	get headers() {
    		return this[INTERNALS$2].headers;
    	}

    	get redirect() {
    		return this[INTERNALS$2].redirect;
    	}

    	get signal() {
    		return this[INTERNALS$2].signal;
    	}

    	/**
      * Clone this request
      *
      * @return  Request
      */
    	clone() {
    		return new Request(this);
    	}
    }

    Body.mixIn(Request.prototype);

    Object.defineProperty(Request.prototype, Symbol.toStringTag, {
    	value: 'Request',
    	writable: false,
    	enumerable: false,
    	configurable: true
    });

    Object.defineProperties(Request.prototype, {
    	method: { enumerable: true },
    	url: { enumerable: true },
    	headers: { enumerable: true },
    	redirect: { enumerable: true },
    	clone: { enumerable: true },
    	signal: { enumerable: true }
    });

    /**
     * Convert a Request to Node.js http request options.
     *
     * @param   Request  A Request instance
     * @return  Object   The options object to be passed to http.request
     */
    function getNodeRequestOptions(request) {
    	const parsedURL = request[INTERNALS$2].parsedURL;
    	const headers = new Headers(request[INTERNALS$2].headers);

    	// fetch step 1.3
    	if (!headers.has('Accept')) {
    		headers.set('Accept', '*/*');
    	}

    	// Basic fetch
    	if (!parsedURL.protocol || !parsedURL.hostname) {
    		throw new TypeError('Only absolute URLs are supported');
    	}

    	if (!/^https?:$/.test(parsedURL.protocol)) {
    		throw new TypeError('Only HTTP(S) protocols are supported');
    	}

    	if (request.signal && request.body instanceof Stream.Readable && !streamDestructionSupported) {
    		throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
    	}

    	// HTTP-network-or-cache fetch steps 2.4-2.7
    	let contentLengthValue = null;
    	if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
    		contentLengthValue = '0';
    	}
    	if (request.body != null) {
    		const totalBytes = getTotalBytes(request);
    		if (typeof totalBytes === 'number') {
    			contentLengthValue = String(totalBytes);
    		}
    	}
    	if (contentLengthValue) {
    		headers.set('Content-Length', contentLengthValue);
    	}

    	// HTTP-network-or-cache fetch step 2.11
    	if (!headers.has('User-Agent')) {
    		headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
    	}

    	// HTTP-network-or-cache fetch step 2.15
    	if (request.compress && !headers.has('Accept-Encoding')) {
    		headers.set('Accept-Encoding', 'gzip,deflate');
    	}

    	let agent = request.agent;
    	if (typeof agent === 'function') {
    		agent = agent(parsedURL);
    	}

    	if (!headers.has('Connection') && !agent) {
    		headers.set('Connection', 'close');
    	}

    	// HTTP-network fetch step 4.2
    	// chunked encoding is handled by Node.js

    	return Object.assign({}, parsedURL, {
    		method: request.method,
    		headers: exportNodeCompatibleHeaders(headers),
    		agent
    	});
    }

    /**
     * abort-error.js
     *
     * AbortError interface for cancelled requests
     */

    /**
     * Create AbortError instance
     *
     * @param   String      message      Error message for human
     * @return  AbortError
     */
    function AbortError(message) {
      Error.call(this, message);

      this.type = 'aborted';
      this.message = message;

      // hide custom error implementation details from end-users
      Error.captureStackTrace(this, this.constructor);
    }

    AbortError.prototype = Object.create(Error.prototype);
    AbortError.prototype.constructor = AbortError;
    AbortError.prototype.name = 'AbortError';

    // fix an issue where "PassThrough", "resolve" aren't a named export for node <10
    const PassThrough$1 = Stream.PassThrough;
    const resolve_url = Url.resolve;

    /**
     * Fetch function
     *
     * @param   Mixed    url   Absolute url or Request instance
     * @param   Object   opts  Fetch options
     * @return  Promise
     */
    function fetch(url, opts) {

    	// allow custom promise
    	if (!fetch.Promise) {
    		throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
    	}

    	Body.Promise = fetch.Promise;

    	// wrap http.request into fetch
    	return new fetch.Promise(function (resolve, reject) {
    		// build request object
    		const request = new Request(url, opts);
    		const options = getNodeRequestOptions(request);

    		const send = (options.protocol === 'https:' ? https : http).request;
    		const signal = request.signal;

    		let response = null;

    		const abort = function abort() {
    			let error = new AbortError('The user aborted a request.');
    			reject(error);
    			if (request.body && request.body instanceof Stream.Readable) {
    				request.body.destroy(error);
    			}
    			if (!response || !response.body) return;
    			response.body.emit('error', error);
    		};

    		if (signal && signal.aborted) {
    			abort();
    			return;
    		}

    		const abortAndFinalize = function abortAndFinalize() {
    			abort();
    			finalize();
    		};

    		// send request
    		const req = send(options);
    		let reqTimeout;

    		if (signal) {
    			signal.addEventListener('abort', abortAndFinalize);
    		}

    		function finalize() {
    			req.abort();
    			if (signal) signal.removeEventListener('abort', abortAndFinalize);
    			clearTimeout(reqTimeout);
    		}

    		if (request.timeout) {
    			req.once('socket', function (socket) {
    				reqTimeout = setTimeout(function () {
    					reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
    					finalize();
    				}, request.timeout);
    			});
    		}

    		req.on('error', function (err) {
    			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
    			finalize();
    		});

    		req.on('response', function (res) {
    			clearTimeout(reqTimeout);

    			const headers = createHeadersLenient(res.headers);

    			// HTTP fetch step 5
    			if (fetch.isRedirect(res.statusCode)) {
    				// HTTP fetch step 5.2
    				const location = headers.get('Location');

    				// HTTP fetch step 5.3
    				const locationURL = location === null ? null : resolve_url(request.url, location);

    				// HTTP fetch step 5.5
    				switch (request.redirect) {
    					case 'error':
    						reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, 'no-redirect'));
    						finalize();
    						return;
    					case 'manual':
    						// node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
    						if (locationURL !== null) {
    							// handle corrupted header
    							try {
    								headers.set('Location', locationURL);
    							} catch (err) {
    								// istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
    								reject(err);
    							}
    						}
    						break;
    					case 'follow':
    						// HTTP-redirect fetch step 2
    						if (locationURL === null) {
    							break;
    						}

    						// HTTP-redirect fetch step 5
    						if (request.counter >= request.follow) {
    							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
    							finalize();
    							return;
    						}

    						// HTTP-redirect fetch step 6 (counter increment)
    						// Create a new Request object.
    						const requestOpts = {
    							headers: new Headers(request.headers),
    							follow: request.follow,
    							counter: request.counter + 1,
    							agent: request.agent,
    							compress: request.compress,
    							method: request.method,
    							body: request.body,
    							signal: request.signal,
    							timeout: request.timeout,
    							size: request.size
    						};

    						// HTTP-redirect fetch step 9
    						if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
    							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
    							finalize();
    							return;
    						}

    						// HTTP-redirect fetch step 11
    						if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
    							requestOpts.method = 'GET';
    							requestOpts.body = undefined;
    							requestOpts.headers.delete('content-length');
    						}

    						// HTTP-redirect fetch step 15
    						resolve(fetch(new Request(locationURL, requestOpts)));
    						finalize();
    						return;
    				}
    			}

    			// prepare response
    			res.once('end', function () {
    				if (signal) signal.removeEventListener('abort', abortAndFinalize);
    			});
    			let body = res.pipe(new PassThrough$1());

    			const response_options = {
    				url: request.url,
    				status: res.statusCode,
    				statusText: res.statusMessage,
    				headers: headers,
    				size: request.size,
    				timeout: request.timeout,
    				counter: request.counter
    			};

    			// HTTP-network fetch step 12.1.1.3
    			const codings = headers.get('Content-Encoding');

    			// HTTP-network fetch step 12.1.1.4: handle content codings

    			// in following scenarios we ignore compression support
    			// 1. compression support is disabled
    			// 2. HEAD request
    			// 3. no Content-Encoding header
    			// 4. no content response (204)
    			// 5. content not modified response (304)
    			if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
    				response = new Response(body, response_options);
    				resolve(response);
    				return;
    			}

    			// For Node v6+
    			// Be less strict when decoding compressed responses, since sometimes
    			// servers send slightly invalid responses that are still accepted
    			// by common browsers.
    			// Always using Z_SYNC_FLUSH is what cURL does.
    			const zlibOptions = {
    				flush: zlib.Z_SYNC_FLUSH,
    				finishFlush: zlib.Z_SYNC_FLUSH
    			};

    			// for gzip
    			if (codings == 'gzip' || codings == 'x-gzip') {
    				body = body.pipe(zlib.createGunzip(zlibOptions));
    				response = new Response(body, response_options);
    				resolve(response);
    				return;
    			}

    			// for deflate
    			if (codings == 'deflate' || codings == 'x-deflate') {
    				// handle the infamous raw deflate response from old servers
    				// a hack for old IIS and Apache servers
    				const raw = res.pipe(new PassThrough$1());
    				raw.once('data', function (chunk) {
    					// see http://stackoverflow.com/questions/37519828
    					if ((chunk[0] & 0x0F) === 0x08) {
    						body = body.pipe(zlib.createInflate());
    					} else {
    						body = body.pipe(zlib.createInflateRaw());
    					}
    					response = new Response(body, response_options);
    					resolve(response);
    				});
    				return;
    			}

    			// for br
    			if (codings == 'br' && typeof zlib.createBrotliDecompress === 'function') {
    				body = body.pipe(zlib.createBrotliDecompress());
    				response = new Response(body, response_options);
    				resolve(response);
    				return;
    			}

    			// otherwise, use response as-is
    			response = new Response(body, response_options);
    			resolve(response);
    		});

    		writeToStream(req, request);
    	});
    }
    /**
     * Redirect code matching
     *
     * @param   Number   code  Status code
     * @return  Boolean
     */
    fetch.isRedirect = function (code) {
    	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
    };

    // expose Promise
    fetch.Promise = global.Promise;

    class Deprecation extends Error {
      constructor(message) {
        super(message); // Maintains proper stack trace (only available on V8)

        /* istanbul ignore next */

        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor);
        }

        this.name = 'Deprecation';
      }

    }

    // Returns a wrapper function that returns a wrapped callback
    // The wrapper function should do some stuff, and return a
    // presumably different callback function.
    // This makes sure that own properties are retained, so that
    // decorations and such are not lost along the way.
    var wrappy_1 = wrappy;
    function wrappy (fn, cb) {
      if (fn && cb) return wrappy(fn)(cb)

      if (typeof fn !== 'function')
        throw new TypeError('need wrapper function')

      Object.keys(fn).forEach(function (k) {
        wrapper[k] = fn[k];
      });

      return wrapper

      function wrapper() {
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        var ret = fn.apply(this, args);
        var cb = args[args.length-1];
        if (typeof ret === 'function' && ret !== cb) {
          Object.keys(cb).forEach(function (k) {
            ret[k] = cb[k];
          });
        }
        return ret
      }
    }

    var once_1 = wrappy_1(once);
    var strict = wrappy_1(onceStrict);

    once.proto = once(function () {
      Object.defineProperty(Function.prototype, 'once', {
        value: function () {
          return once(this)
        },
        configurable: true
      });

      Object.defineProperty(Function.prototype, 'onceStrict', {
        value: function () {
          return onceStrict(this)
        },
        configurable: true
      });
    });

    function once (fn) {
      var f = function () {
        if (f.called) return f.value
        f.called = true;
        return f.value = fn.apply(this, arguments)
      };
      f.called = false;
      return f
    }

    function onceStrict (fn) {
      var f = function () {
        if (f.called)
          throw new Error(f.onceError)
        f.called = true;
        return f.value = fn.apply(this, arguments)
      };
      var name = fn.name || 'Function wrapped with `once`';
      f.onceError = name + " shouldn't be called more than once";
      f.called = false;
      return f
    }
    once_1.strict = strict;

    const logOnce = once_1((deprecation) => console.warn(deprecation));
    /**
     * Error with extra properties to help with debugging
     */
    class RequestError extends Error {
        constructor(message, statusCode, options) {
            super(message);
            // Maintains proper stack trace (only available on V8)
            /* istanbul ignore next */
            if (Error.captureStackTrace) {
                Error.captureStackTrace(this, this.constructor);
            }
            this.name = "HttpError";
            this.status = statusCode;
            Object.defineProperty(this, "code", {
                get() {
                    logOnce(new Deprecation("[@octokit/request-error] `error.code` is deprecated, use `error.status`."));
                    return statusCode;
                },
            });
            this.headers = options.headers || {};
            // redact request credentials without mutating original request options
            const requestCopy = Object.assign({}, options.request);
            if (options.request.headers.authorization) {
                requestCopy.headers = Object.assign({}, options.request.headers, {
                    authorization: options.request.headers.authorization.replace(/ .*$/, " [REDACTED]"),
                });
            }
            requestCopy.url = requestCopy.url
                // client_id & client_secret can be passed as URL query parameters to increase rate limit
                // see https://developer.github.com/v3/#increasing-the-unauthenticated-rate-limit-for-oauth-applications
                .replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]")
                // OAuth tokens can be passed as URL query parameters, although it is not recommended
                // see https://developer.github.com/v3/#oauth2-token-sent-in-a-header
                .replace(/\baccess_token=\w+/g, "access_token=[REDACTED]");
            this.request = requestCopy;
        }
    }
    //# sourceMappingURL=index.js.map

    const VERSION$1 = "5.4.12";

    function getBufferResponse(response) {
        return response.arrayBuffer();
    }

    function fetchWrapper(requestOptions) {
        if (isPlainObject(requestOptions.body) ||
            Array.isArray(requestOptions.body)) {
            requestOptions.body = JSON.stringify(requestOptions.body);
        }
        let headers = {};
        let status;
        let url;
        const fetch$1 = (requestOptions.request && requestOptions.request.fetch) || fetch;
        return fetch$1(requestOptions.url, Object.assign({
            method: requestOptions.method,
            body: requestOptions.body,
            headers: requestOptions.headers,
            redirect: requestOptions.redirect,
        }, requestOptions.request))
            .then((response) => {
            url = response.url;
            status = response.status;
            for (const keyAndValue of response.headers) {
                headers[keyAndValue[0]] = keyAndValue[1];
            }
            if (status === 204 || status === 205) {
                return;
            }
            // GitHub API returns 200 for HEAD requests
            if (requestOptions.method === "HEAD") {
                if (status < 400) {
                    return;
                }
                throw new RequestError(response.statusText, status, {
                    headers,
                    request: requestOptions,
                });
            }
            if (status === 304) {
                throw new RequestError("Not modified", status, {
                    headers,
                    request: requestOptions,
                });
            }
            if (status >= 400) {
                return response
                    .text()
                    .then((message) => {
                    const error = new RequestError(message, status, {
                        headers,
                        request: requestOptions,
                    });
                    try {
                        let responseBody = JSON.parse(error.message);
                        Object.assign(error, responseBody);
                        let errors = responseBody.errors;
                        // Assumption `errors` would always be in Array format
                        error.message =
                            error.message + ": " + errors.map(JSON.stringify).join(", ");
                    }
                    catch (e) {
                        // ignore, see octokit/rest.js#684
                    }
                    throw error;
                });
            }
            const contentType = response.headers.get("content-type");
            if (/application\/json/.test(contentType)) {
                return response.json();
            }
            if (!contentType || /^text\/|charset=utf-8$/.test(contentType)) {
                return response.text();
            }
            return getBufferResponse(response);
        })
            .then((data) => {
            return {
                status,
                url,
                headers,
                data,
            };
        })
            .catch((error) => {
            if (error instanceof RequestError) {
                throw error;
            }
            throw new RequestError(error.message, 500, {
                headers,
                request: requestOptions,
            });
        });
    }

    function withDefaults$1(oldEndpoint, newDefaults) {
        const endpoint = oldEndpoint.defaults(newDefaults);
        const newApi = function (route, parameters) {
            const endpointOptions = endpoint.merge(route, parameters);
            if (!endpointOptions.request || !endpointOptions.request.hook) {
                return fetchWrapper(endpoint.parse(endpointOptions));
            }
            const request = (route, parameters) => {
                return fetchWrapper(endpoint.parse(endpoint.merge(route, parameters)));
            };
            Object.assign(request, {
                endpoint,
                defaults: withDefaults$1.bind(null, endpoint),
            });
            return endpointOptions.request.hook(request, endpointOptions);
        };
        return Object.assign(newApi, {
            endpoint,
            defaults: withDefaults$1.bind(null, endpoint),
        });
    }

    const request = withDefaults$1(endpoint, {
        headers: {
            "user-agent": `octokit-request.js/${VERSION$1} ${getUserAgent()}`,
        },
    });
    //# sourceMappingURL=index.js.map

    const VERSION$2 = "4.5.8";

    class GraphqlError extends Error {
        constructor(request, response) {
            const message = response.data.errors[0].message;
            super(message);
            Object.assign(this, response.data);
            Object.assign(this, { headers: response.headers });
            this.name = "GraphqlError";
            this.request = request;
            // Maintains proper stack trace (only available on V8)
            /* istanbul ignore next */
            if (Error.captureStackTrace) {
                Error.captureStackTrace(this, this.constructor);
            }
        }
    }

    const NON_VARIABLE_OPTIONS = [
        "method",
        "baseUrl",
        "url",
        "headers",
        "request",
        "query",
        "mediaType",
    ];
    const GHES_V3_SUFFIX_REGEX = /\/api\/v3\/?$/;
    function graphql(request, query, options) {
        if (typeof query === "string" && options && "query" in options) {
            return Promise.reject(new Error(`[@octokit/graphql] "query" cannot be used as variable name`));
        }
        const parsedOptions = typeof query === "string" ? Object.assign({ query }, options) : query;
        const requestOptions = Object.keys(parsedOptions).reduce((result, key) => {
            if (NON_VARIABLE_OPTIONS.includes(key)) {
                result[key] = parsedOptions[key];
                return result;
            }
            if (!result.variables) {
                result.variables = {};
            }
            result.variables[key] = parsedOptions[key];
            return result;
        }, {});
        // workaround for GitHub Enterprise baseUrl set with /api/v3 suffix
        // https://github.com/octokit/auth-app.js/issues/111#issuecomment-657610451
        const baseUrl = parsedOptions.baseUrl || request.endpoint.DEFAULTS.baseUrl;
        if (GHES_V3_SUFFIX_REGEX.test(baseUrl)) {
            requestOptions.url = baseUrl.replace(GHES_V3_SUFFIX_REGEX, "/api/graphql");
        }
        return request(requestOptions).then((response) => {
            if (response.data.errors) {
                const headers = {};
                for (const key of Object.keys(response.headers)) {
                    headers[key] = response.headers[key];
                }
                throw new GraphqlError(requestOptions, {
                    headers,
                    data: response.data,
                });
            }
            return response.data.data;
        });
    }

    function withDefaults$2(request$1, newDefaults) {
        const newRequest = request$1.defaults(newDefaults);
        const newApi = (query, options) => {
            return graphql(newRequest, query, options);
        };
        return Object.assign(newApi, {
            defaults: withDefaults$2.bind(null, newRequest),
            endpoint: request.endpoint,
        });
    }

    const graphql$1 = withDefaults$2(request, {
        headers: {
            "user-agent": `octokit-graphql.js/${VERSION$2} ${getUserAgent()}`,
        },
        method: "POST",
        url: "/graphql",
    });
    function withCustomRequest(customRequest) {
        return withDefaults$2(customRequest, {
            method: "POST",
            url: "/graphql",
        });
    }
    //# sourceMappingURL=index.js.map

    async function auth(token) {
        const tokenType = token.split(/\./).length === 3
            ? "app"
            : /^v\d+\./.test(token)
                ? "installation"
                : "oauth";
        return {
            type: "token",
            token: token,
            tokenType
        };
    }

    /**
     * Prefix token for usage in the Authorization header
     *
     * @param token OAuth token or JSON Web Token
     */
    function withAuthorizationPrefix(token) {
        if (token.split(/\./).length === 3) {
            return `bearer ${token}`;
        }
        return `token ${token}`;
    }

    async function hook(token, request, route, parameters) {
        const endpoint = request.endpoint.merge(route, parameters);
        endpoint.headers.authorization = withAuthorizationPrefix(token);
        return request(endpoint);
    }

    const createTokenAuth = function createTokenAuth(token) {
        if (!token) {
            throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");
        }
        if (typeof token !== "string") {
            throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string");
        }
        token = token.replace(/^(token|bearer) +/i, "");
        return Object.assign(auth.bind(null, token), {
            hook: hook.bind(null, token)
        });
    };
    //# sourceMappingURL=index.js.map

    const VERSION$3 = "3.2.4";

    class Octokit {
        constructor(options = {}) {
            const hook = new Collection();
            const requestDefaults = {
                baseUrl: request.endpoint.DEFAULTS.baseUrl,
                headers: {},
                request: Object.assign({}, options.request, {
                    hook: hook.bind(null, "request"),
                }),
                mediaType: {
                    previews: [],
                    format: "",
                },
            };
            // prepend default user agent with `options.userAgent` if set
            requestDefaults.headers["user-agent"] = [
                options.userAgent,
                `octokit-core.js/${VERSION$3} ${getUserAgent()}`,
            ]
                .filter(Boolean)
                .join(" ");
            if (options.baseUrl) {
                requestDefaults.baseUrl = options.baseUrl;
            }
            if (options.previews) {
                requestDefaults.mediaType.previews = options.previews;
            }
            if (options.timeZone) {
                requestDefaults.headers["time-zone"] = options.timeZone;
            }
            this.request = request.defaults(requestDefaults);
            this.graphql = withCustomRequest(this.request).defaults(requestDefaults);
            this.log = Object.assign({
                debug: () => { },
                info: () => { },
                warn: console.warn.bind(console),
                error: console.error.bind(console),
            }, options.log);
            this.hook = hook;
            // (1) If neither `options.authStrategy` nor `options.auth` are set, the `octokit` instance
            //     is unauthenticated. The `this.auth()` method is a no-op and no request hook is registered.
            // (2) If only `options.auth` is set, use the default token authentication strategy.
            // (3) If `options.authStrategy` is set then use it and pass in `options.auth`. Always pass own request as many strategies accept a custom request instance.
            // TODO: type `options.auth` based on `options.authStrategy`.
            if (!options.authStrategy) {
                if (!options.auth) {
                    // (1)
                    this.auth = async () => ({
                        type: "unauthenticated",
                    });
                }
                else {
                    // (2)
                    const auth = createTokenAuth(options.auth);
                    // @ts-ignore  ¯\_(ツ)_/¯
                    hook.wrap("request", auth.hook);
                    this.auth = auth;
                }
            }
            else {
                const { authStrategy, ...otherOptions } = options;
                const auth = authStrategy(Object.assign({
                    request: this.request,
                    log: this.log,
                    // we pass the current octokit instance as well as its constructor options
                    // to allow for authentication strategies that return a new octokit instance
                    // that shares the same internal state as the current one. The original
                    // requirement for this was the "event-octokit" authentication strategy
                    // of https://github.com/probot/octokit-auth-probot.
                    octokit: this,
                    octokitOptions: otherOptions,
                }, options.auth));
                // @ts-ignore  ¯\_(ツ)_/¯
                hook.wrap("request", auth.hook);
                this.auth = auth;
            }
            // apply plugins
            // https://stackoverflow.com/a/16345172
            const classConstructor = this.constructor;
            classConstructor.plugins.forEach((plugin) => {
                Object.assign(this, plugin(this, options));
            });
        }
        static defaults(defaults) {
            const OctokitWithDefaults = class extends this {
                constructor(...args) {
                    const options = args[0] || {};
                    if (typeof defaults === "function") {
                        super(defaults(options));
                        return;
                    }
                    super(Object.assign({}, defaults, options, options.userAgent && defaults.userAgent
                        ? {
                            userAgent: `${options.userAgent} ${defaults.userAgent}`,
                        }
                        : null));
                }
            };
            return OctokitWithDefaults;
        }
        /**
         * Attach a plugin (or many) to your Octokit instance.
         *
         * @example
         * const API = Octokit.plugin(plugin1, plugin2, plugin3, ...)
         */
        static plugin(...newPlugins) {
            var _a;
            const currentPlugins = this.plugins;
            const NewOctokit = (_a = class extends this {
                },
                _a.plugins = currentPlugins.concat(newPlugins.filter((plugin) => !currentPlugins.includes(plugin))),
                _a);
            return NewOctokit;
        }
    }
    Octokit.VERSION = VERSION$3;
    Octokit.plugins = [];
    //# sourceMappingURL=index.js.map

    var distWeb = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Octokit: Octokit
    });

    const Endpoints = {
        actions: {
            addSelectedRepoToOrgSecret: [
                "PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}",
            ],
            cancelWorkflowRun: [
                "POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel",
            ],
            createOrUpdateOrgSecret: ["PUT /orgs/{org}/actions/secrets/{secret_name}"],
            createOrUpdateRepoSecret: [
                "PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}",
            ],
            createRegistrationTokenForOrg: [
                "POST /orgs/{org}/actions/runners/registration-token",
            ],
            createRegistrationTokenForRepo: [
                "POST /repos/{owner}/{repo}/actions/runners/registration-token",
            ],
            createRemoveTokenForOrg: ["POST /orgs/{org}/actions/runners/remove-token"],
            createRemoveTokenForRepo: [
                "POST /repos/{owner}/{repo}/actions/runners/remove-token",
            ],
            createWorkflowDispatch: [
                "POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches",
            ],
            deleteArtifact: [
                "DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}",
            ],
            deleteOrgSecret: ["DELETE /orgs/{org}/actions/secrets/{secret_name}"],
            deleteRepoSecret: [
                "DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}",
            ],
            deleteSelfHostedRunnerFromOrg: [
                "DELETE /orgs/{org}/actions/runners/{runner_id}",
            ],
            deleteSelfHostedRunnerFromRepo: [
                "DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}",
            ],
            deleteWorkflowRun: ["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}"],
            deleteWorkflowRunLogs: [
                "DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs",
            ],
            disableSelectedRepositoryGithubActionsOrganization: [
                "DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}",
            ],
            disableWorkflow: [
                "PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable",
            ],
            downloadArtifact: [
                "GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}",
            ],
            downloadJobLogsForWorkflowRun: [
                "GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs",
            ],
            downloadWorkflowRunLogs: [
                "GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs",
            ],
            enableSelectedRepositoryGithubActionsOrganization: [
                "PUT /orgs/{org}/actions/permissions/repositories/{repository_id}",
            ],
            enableWorkflow: [
                "PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable",
            ],
            getAllowedActionsOrganization: [
                "GET /orgs/{org}/actions/permissions/selected-actions",
            ],
            getAllowedActionsRepository: [
                "GET /repos/{owner}/{repo}/actions/permissions/selected-actions",
            ],
            getArtifact: ["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"],
            getGithubActionsPermissionsOrganization: [
                "GET /orgs/{org}/actions/permissions",
            ],
            getGithubActionsPermissionsRepository: [
                "GET /repos/{owner}/{repo}/actions/permissions",
            ],
            getJobForWorkflowRun: ["GET /repos/{owner}/{repo}/actions/jobs/{job_id}"],
            getOrgPublicKey: ["GET /orgs/{org}/actions/secrets/public-key"],
            getOrgSecret: ["GET /orgs/{org}/actions/secrets/{secret_name}"],
            getRepoPermissions: [
                "GET /repos/{owner}/{repo}/actions/permissions",
                {},
                { renamed: ["actions", "getGithubActionsPermissionsRepository"] },
            ],
            getRepoPublicKey: ["GET /repos/{owner}/{repo}/actions/secrets/public-key"],
            getRepoSecret: ["GET /repos/{owner}/{repo}/actions/secrets/{secret_name}"],
            getSelfHostedRunnerForOrg: ["GET /orgs/{org}/actions/runners/{runner_id}"],
            getSelfHostedRunnerForRepo: [
                "GET /repos/{owner}/{repo}/actions/runners/{runner_id}",
            ],
            getWorkflow: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}"],
            getWorkflowRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}"],
            getWorkflowRunUsage: [
                "GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing",
            ],
            getWorkflowUsage: [
                "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing",
            ],
            listArtifactsForRepo: ["GET /repos/{owner}/{repo}/actions/artifacts"],
            listJobsForWorkflowRun: [
                "GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs",
            ],
            listOrgSecrets: ["GET /orgs/{org}/actions/secrets"],
            listRepoSecrets: ["GET /repos/{owner}/{repo}/actions/secrets"],
            listRepoWorkflows: ["GET /repos/{owner}/{repo}/actions/workflows"],
            listRunnerApplicationsForOrg: ["GET /orgs/{org}/actions/runners/downloads"],
            listRunnerApplicationsForRepo: [
                "GET /repos/{owner}/{repo}/actions/runners/downloads",
            ],
            listSelectedReposForOrgSecret: [
                "GET /orgs/{org}/actions/secrets/{secret_name}/repositories",
            ],
            listSelectedRepositoriesEnabledGithubActionsOrganization: [
                "GET /orgs/{org}/actions/permissions/repositories",
            ],
            listSelfHostedRunnersForOrg: ["GET /orgs/{org}/actions/runners"],
            listSelfHostedRunnersForRepo: ["GET /repos/{owner}/{repo}/actions/runners"],
            listWorkflowRunArtifacts: [
                "GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts",
            ],
            listWorkflowRuns: [
                "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs",
            ],
            listWorkflowRunsForRepo: ["GET /repos/{owner}/{repo}/actions/runs"],
            reRunWorkflow: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun"],
            removeSelectedRepoFromOrgSecret: [
                "DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}",
            ],
            setAllowedActionsOrganization: [
                "PUT /orgs/{org}/actions/permissions/selected-actions",
            ],
            setAllowedActionsRepository: [
                "PUT /repos/{owner}/{repo}/actions/permissions/selected-actions",
            ],
            setGithubActionsPermissionsOrganization: [
                "PUT /orgs/{org}/actions/permissions",
            ],
            setGithubActionsPermissionsRepository: [
                "PUT /repos/{owner}/{repo}/actions/permissions",
            ],
            setSelectedReposForOrgSecret: [
                "PUT /orgs/{org}/actions/secrets/{secret_name}/repositories",
            ],
            setSelectedRepositoriesEnabledGithubActionsOrganization: [
                "PUT /orgs/{org}/actions/permissions/repositories",
            ],
        },
        activity: {
            checkRepoIsStarredByAuthenticatedUser: ["GET /user/starred/{owner}/{repo}"],
            deleteRepoSubscription: ["DELETE /repos/{owner}/{repo}/subscription"],
            deleteThreadSubscription: [
                "DELETE /notifications/threads/{thread_id}/subscription",
            ],
            getFeeds: ["GET /feeds"],
            getRepoSubscription: ["GET /repos/{owner}/{repo}/subscription"],
            getThread: ["GET /notifications/threads/{thread_id}"],
            getThreadSubscriptionForAuthenticatedUser: [
                "GET /notifications/threads/{thread_id}/subscription",
            ],
            listEventsForAuthenticatedUser: ["GET /users/{username}/events"],
            listNotificationsForAuthenticatedUser: ["GET /notifications"],
            listOrgEventsForAuthenticatedUser: [
                "GET /users/{username}/events/orgs/{org}",
            ],
            listPublicEvents: ["GET /events"],
            listPublicEventsForRepoNetwork: ["GET /networks/{owner}/{repo}/events"],
            listPublicEventsForUser: ["GET /users/{username}/events/public"],
            listPublicOrgEvents: ["GET /orgs/{org}/events"],
            listReceivedEventsForUser: ["GET /users/{username}/received_events"],
            listReceivedPublicEventsForUser: [
                "GET /users/{username}/received_events/public",
            ],
            listRepoEvents: ["GET /repos/{owner}/{repo}/events"],
            listRepoNotificationsForAuthenticatedUser: [
                "GET /repos/{owner}/{repo}/notifications",
            ],
            listReposStarredByAuthenticatedUser: ["GET /user/starred"],
            listReposStarredByUser: ["GET /users/{username}/starred"],
            listReposWatchedByUser: ["GET /users/{username}/subscriptions"],
            listStargazersForRepo: ["GET /repos/{owner}/{repo}/stargazers"],
            listWatchedReposForAuthenticatedUser: ["GET /user/subscriptions"],
            listWatchersForRepo: ["GET /repos/{owner}/{repo}/subscribers"],
            markNotificationsAsRead: ["PUT /notifications"],
            markRepoNotificationsAsRead: ["PUT /repos/{owner}/{repo}/notifications"],
            markThreadAsRead: ["PATCH /notifications/threads/{thread_id}"],
            setRepoSubscription: ["PUT /repos/{owner}/{repo}/subscription"],
            setThreadSubscription: [
                "PUT /notifications/threads/{thread_id}/subscription",
            ],
            starRepoForAuthenticatedUser: ["PUT /user/starred/{owner}/{repo}"],
            unstarRepoForAuthenticatedUser: ["DELETE /user/starred/{owner}/{repo}"],
        },
        apps: {
            addRepoToInstallation: [
                "PUT /user/installations/{installation_id}/repositories/{repository_id}",
            ],
            checkToken: ["POST /applications/{client_id}/token"],
            createContentAttachment: [
                "POST /content_references/{content_reference_id}/attachments",
                { mediaType: { previews: ["corsair"] } },
            ],
            createFromManifest: ["POST /app-manifests/{code}/conversions"],
            createInstallationAccessToken: [
                "POST /app/installations/{installation_id}/access_tokens",
            ],
            deleteAuthorization: ["DELETE /applications/{client_id}/grant"],
            deleteInstallation: ["DELETE /app/installations/{installation_id}"],
            deleteToken: ["DELETE /applications/{client_id}/token"],
            getAuthenticated: ["GET /app"],
            getBySlug: ["GET /apps/{app_slug}"],
            getInstallation: ["GET /app/installations/{installation_id}"],
            getOrgInstallation: ["GET /orgs/{org}/installation"],
            getRepoInstallation: ["GET /repos/{owner}/{repo}/installation"],
            getSubscriptionPlanForAccount: [
                "GET /marketplace_listing/accounts/{account_id}",
            ],
            getSubscriptionPlanForAccountStubbed: [
                "GET /marketplace_listing/stubbed/accounts/{account_id}",
            ],
            getUserInstallation: ["GET /users/{username}/installation"],
            getWebhookConfigForApp: ["GET /app/hook/config"],
            listAccountsForPlan: ["GET /marketplace_listing/plans/{plan_id}/accounts"],
            listAccountsForPlanStubbed: [
                "GET /marketplace_listing/stubbed/plans/{plan_id}/accounts",
            ],
            listInstallationReposForAuthenticatedUser: [
                "GET /user/installations/{installation_id}/repositories",
            ],
            listInstallations: ["GET /app/installations"],
            listInstallationsForAuthenticatedUser: ["GET /user/installations"],
            listPlans: ["GET /marketplace_listing/plans"],
            listPlansStubbed: ["GET /marketplace_listing/stubbed/plans"],
            listReposAccessibleToInstallation: ["GET /installation/repositories"],
            listSubscriptionsForAuthenticatedUser: ["GET /user/marketplace_purchases"],
            listSubscriptionsForAuthenticatedUserStubbed: [
                "GET /user/marketplace_purchases/stubbed",
            ],
            removeRepoFromInstallation: [
                "DELETE /user/installations/{installation_id}/repositories/{repository_id}",
            ],
            resetToken: ["PATCH /applications/{client_id}/token"],
            revokeInstallationAccessToken: ["DELETE /installation/token"],
            suspendInstallation: ["PUT /app/installations/{installation_id}/suspended"],
            unsuspendInstallation: [
                "DELETE /app/installations/{installation_id}/suspended",
            ],
            updateWebhookConfigForApp: ["PATCH /app/hook/config"],
        },
        billing: {
            getGithubActionsBillingOrg: ["GET /orgs/{org}/settings/billing/actions"],
            getGithubActionsBillingUser: [
                "GET /users/{username}/settings/billing/actions",
            ],
            getGithubPackagesBillingOrg: ["GET /orgs/{org}/settings/billing/packages"],
            getGithubPackagesBillingUser: [
                "GET /users/{username}/settings/billing/packages",
            ],
            getSharedStorageBillingOrg: [
                "GET /orgs/{org}/settings/billing/shared-storage",
            ],
            getSharedStorageBillingUser: [
                "GET /users/{username}/settings/billing/shared-storage",
            ],
        },
        checks: {
            create: ["POST /repos/{owner}/{repo}/check-runs"],
            createSuite: ["POST /repos/{owner}/{repo}/check-suites"],
            get: ["GET /repos/{owner}/{repo}/check-runs/{check_run_id}"],
            getSuite: ["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}"],
            listAnnotations: [
                "GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations",
            ],
            listForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/check-runs"],
            listForSuite: [
                "GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs",
            ],
            listSuitesForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/check-suites"],
            rerequestSuite: [
                "POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest",
            ],
            setSuitesPreferences: [
                "PATCH /repos/{owner}/{repo}/check-suites/preferences",
            ],
            update: ["PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}"],
        },
        codeScanning: {
            getAlert: [
                "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}",
                {},
                { renamedParameters: { alert_id: "alert_number" } },
            ],
            listAlertsForRepo: ["GET /repos/{owner}/{repo}/code-scanning/alerts"],
            listRecentAnalyses: ["GET /repos/{owner}/{repo}/code-scanning/analyses"],
            updateAlert: [
                "PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}",
            ],
            uploadSarif: ["POST /repos/{owner}/{repo}/code-scanning/sarifs"],
        },
        codesOfConduct: {
            getAllCodesOfConduct: [
                "GET /codes_of_conduct",
                { mediaType: { previews: ["scarlet-witch"] } },
            ],
            getConductCode: [
                "GET /codes_of_conduct/{key}",
                { mediaType: { previews: ["scarlet-witch"] } },
            ],
            getForRepo: [
                "GET /repos/{owner}/{repo}/community/code_of_conduct",
                { mediaType: { previews: ["scarlet-witch"] } },
            ],
        },
        emojis: { get: ["GET /emojis"] },
        enterpriseAdmin: {
            disableSelectedOrganizationGithubActionsEnterprise: [
                "DELETE /enterprises/{enterprise}/actions/permissions/organizations/{org_id}",
            ],
            enableSelectedOrganizationGithubActionsEnterprise: [
                "PUT /enterprises/{enterprise}/actions/permissions/organizations/{org_id}",
            ],
            getAllowedActionsEnterprise: [
                "GET /enterprises/{enterprise}/actions/permissions/selected-actions",
            ],
            getGithubActionsPermissionsEnterprise: [
                "GET /enterprises/{enterprise}/actions/permissions",
            ],
            listSelectedOrganizationsEnabledGithubActionsEnterprise: [
                "GET /enterprises/{enterprise}/actions/permissions/organizations",
            ],
            setAllowedActionsEnterprise: [
                "PUT /enterprises/{enterprise}/actions/permissions/selected-actions",
            ],
            setGithubActionsPermissionsEnterprise: [
                "PUT /enterprises/{enterprise}/actions/permissions",
            ],
            setSelectedOrganizationsEnabledGithubActionsEnterprise: [
                "PUT /enterprises/{enterprise}/actions/permissions/organizations",
            ],
        },
        gists: {
            checkIsStarred: ["GET /gists/{gist_id}/star"],
            create: ["POST /gists"],
            createComment: ["POST /gists/{gist_id}/comments"],
            delete: ["DELETE /gists/{gist_id}"],
            deleteComment: ["DELETE /gists/{gist_id}/comments/{comment_id}"],
            fork: ["POST /gists/{gist_id}/forks"],
            get: ["GET /gists/{gist_id}"],
            getComment: ["GET /gists/{gist_id}/comments/{comment_id}"],
            getRevision: ["GET /gists/{gist_id}/{sha}"],
            list: ["GET /gists"],
            listComments: ["GET /gists/{gist_id}/comments"],
            listCommits: ["GET /gists/{gist_id}/commits"],
            listForUser: ["GET /users/{username}/gists"],
            listForks: ["GET /gists/{gist_id}/forks"],
            listPublic: ["GET /gists/public"],
            listStarred: ["GET /gists/starred"],
            star: ["PUT /gists/{gist_id}/star"],
            unstar: ["DELETE /gists/{gist_id}/star"],
            update: ["PATCH /gists/{gist_id}"],
            updateComment: ["PATCH /gists/{gist_id}/comments/{comment_id}"],
        },
        git: {
            createBlob: ["POST /repos/{owner}/{repo}/git/blobs"],
            createCommit: ["POST /repos/{owner}/{repo}/git/commits"],
            createRef: ["POST /repos/{owner}/{repo}/git/refs"],
            createTag: ["POST /repos/{owner}/{repo}/git/tags"],
            createTree: ["POST /repos/{owner}/{repo}/git/trees"],
            deleteRef: ["DELETE /repos/{owner}/{repo}/git/refs/{ref}"],
            getBlob: ["GET /repos/{owner}/{repo}/git/blobs/{file_sha}"],
            getCommit: ["GET /repos/{owner}/{repo}/git/commits/{commit_sha}"],
            getRef: ["GET /repos/{owner}/{repo}/git/ref/{ref}"],
            getTag: ["GET /repos/{owner}/{repo}/git/tags/{tag_sha}"],
            getTree: ["GET /repos/{owner}/{repo}/git/trees/{tree_sha}"],
            listMatchingRefs: ["GET /repos/{owner}/{repo}/git/matching-refs/{ref}"],
            updateRef: ["PATCH /repos/{owner}/{repo}/git/refs/{ref}"],
        },
        gitignore: {
            getAllTemplates: ["GET /gitignore/templates"],
            getTemplate: ["GET /gitignore/templates/{name}"],
        },
        interactions: {
            getRestrictionsForOrg: ["GET /orgs/{org}/interaction-limits"],
            getRestrictionsForRepo: ["GET /repos/{owner}/{repo}/interaction-limits"],
            getRestrictionsForYourPublicRepos: ["GET /user/interaction-limits"],
            removeRestrictionsForOrg: ["DELETE /orgs/{org}/interaction-limits"],
            removeRestrictionsForRepo: [
                "DELETE /repos/{owner}/{repo}/interaction-limits",
            ],
            removeRestrictionsForYourPublicRepos: ["DELETE /user/interaction-limits"],
            setRestrictionsForOrg: ["PUT /orgs/{org}/interaction-limits"],
            setRestrictionsForRepo: ["PUT /repos/{owner}/{repo}/interaction-limits"],
            setRestrictionsForYourPublicRepos: ["PUT /user/interaction-limits"],
        },
        issues: {
            addAssignees: [
                "POST /repos/{owner}/{repo}/issues/{issue_number}/assignees",
            ],
            addLabels: ["POST /repos/{owner}/{repo}/issues/{issue_number}/labels"],
            checkUserCanBeAssigned: ["GET /repos/{owner}/{repo}/assignees/{assignee}"],
            create: ["POST /repos/{owner}/{repo}/issues"],
            createComment: [
                "POST /repos/{owner}/{repo}/issues/{issue_number}/comments",
            ],
            createLabel: ["POST /repos/{owner}/{repo}/labels"],
            createMilestone: ["POST /repos/{owner}/{repo}/milestones"],
            deleteComment: [
                "DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}",
            ],
            deleteLabel: ["DELETE /repos/{owner}/{repo}/labels/{name}"],
            deleteMilestone: [
                "DELETE /repos/{owner}/{repo}/milestones/{milestone_number}",
            ],
            get: ["GET /repos/{owner}/{repo}/issues/{issue_number}"],
            getComment: ["GET /repos/{owner}/{repo}/issues/comments/{comment_id}"],
            getEvent: ["GET /repos/{owner}/{repo}/issues/events/{event_id}"],
            getLabel: ["GET /repos/{owner}/{repo}/labels/{name}"],
            getMilestone: ["GET /repos/{owner}/{repo}/milestones/{milestone_number}"],
            list: ["GET /issues"],
            listAssignees: ["GET /repos/{owner}/{repo}/assignees"],
            listComments: ["GET /repos/{owner}/{repo}/issues/{issue_number}/comments"],
            listCommentsForRepo: ["GET /repos/{owner}/{repo}/issues/comments"],
            listEvents: ["GET /repos/{owner}/{repo}/issues/{issue_number}/events"],
            listEventsForRepo: ["GET /repos/{owner}/{repo}/issues/events"],
            listEventsForTimeline: [
                "GET /repos/{owner}/{repo}/issues/{issue_number}/timeline",
                { mediaType: { previews: ["mockingbird"] } },
            ],
            listForAuthenticatedUser: ["GET /user/issues"],
            listForOrg: ["GET /orgs/{org}/issues"],
            listForRepo: ["GET /repos/{owner}/{repo}/issues"],
            listLabelsForMilestone: [
                "GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels",
            ],
            listLabelsForRepo: ["GET /repos/{owner}/{repo}/labels"],
            listLabelsOnIssue: [
                "GET /repos/{owner}/{repo}/issues/{issue_number}/labels",
            ],
            listMilestones: ["GET /repos/{owner}/{repo}/milestones"],
            lock: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/lock"],
            removeAllLabels: [
                "DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels",
            ],
            removeAssignees: [
                "DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees",
            ],
            removeLabel: [
                "DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}",
            ],
            setLabels: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/labels"],
            unlock: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock"],
            update: ["PATCH /repos/{owner}/{repo}/issues/{issue_number}"],
            updateComment: ["PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}"],
            updateLabel: ["PATCH /repos/{owner}/{repo}/labels/{name}"],
            updateMilestone: [
                "PATCH /repos/{owner}/{repo}/milestones/{milestone_number}",
            ],
        },
        licenses: {
            get: ["GET /licenses/{license}"],
            getAllCommonlyUsed: ["GET /licenses"],
            getForRepo: ["GET /repos/{owner}/{repo}/license"],
        },
        markdown: {
            render: ["POST /markdown"],
            renderRaw: [
                "POST /markdown/raw",
                { headers: { "content-type": "text/plain; charset=utf-8" } },
            ],
        },
        meta: {
            get: ["GET /meta"],
            getOctocat: ["GET /octocat"],
            getZen: ["GET /zen"],
            root: ["GET /"],
        },
        migrations: {
            cancelImport: ["DELETE /repos/{owner}/{repo}/import"],
            deleteArchiveForAuthenticatedUser: [
                "DELETE /user/migrations/{migration_id}/archive",
                { mediaType: { previews: ["wyandotte"] } },
            ],
            deleteArchiveForOrg: [
                "DELETE /orgs/{org}/migrations/{migration_id}/archive",
                { mediaType: { previews: ["wyandotte"] } },
            ],
            downloadArchiveForOrg: [
                "GET /orgs/{org}/migrations/{migration_id}/archive",
                { mediaType: { previews: ["wyandotte"] } },
            ],
            getArchiveForAuthenticatedUser: [
                "GET /user/migrations/{migration_id}/archive",
                { mediaType: { previews: ["wyandotte"] } },
            ],
            getCommitAuthors: ["GET /repos/{owner}/{repo}/import/authors"],
            getImportStatus: ["GET /repos/{owner}/{repo}/import"],
            getLargeFiles: ["GET /repos/{owner}/{repo}/import/large_files"],
            getStatusForAuthenticatedUser: [
                "GET /user/migrations/{migration_id}",
                { mediaType: { previews: ["wyandotte"] } },
            ],
            getStatusForOrg: [
                "GET /orgs/{org}/migrations/{migration_id}",
                { mediaType: { previews: ["wyandotte"] } },
            ],
            listForAuthenticatedUser: [
                "GET /user/migrations",
                { mediaType: { previews: ["wyandotte"] } },
            ],
            listForOrg: [
                "GET /orgs/{org}/migrations",
                { mediaType: { previews: ["wyandotte"] } },
            ],
            listReposForOrg: [
                "GET /orgs/{org}/migrations/{migration_id}/repositories",
                { mediaType: { previews: ["wyandotte"] } },
            ],
            listReposForUser: [
                "GET /user/migrations/{migration_id}/repositories",
                { mediaType: { previews: ["wyandotte"] } },
            ],
            mapCommitAuthor: ["PATCH /repos/{owner}/{repo}/import/authors/{author_id}"],
            setLfsPreference: ["PATCH /repos/{owner}/{repo}/import/lfs"],
            startForAuthenticatedUser: ["POST /user/migrations"],
            startForOrg: ["POST /orgs/{org}/migrations"],
            startImport: ["PUT /repos/{owner}/{repo}/import"],
            unlockRepoForAuthenticatedUser: [
                "DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock",
                { mediaType: { previews: ["wyandotte"] } },
            ],
            unlockRepoForOrg: [
                "DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock",
                { mediaType: { previews: ["wyandotte"] } },
            ],
            updateImport: ["PATCH /repos/{owner}/{repo}/import"],
        },
        orgs: {
            blockUser: ["PUT /orgs/{org}/blocks/{username}"],
            checkBlockedUser: ["GET /orgs/{org}/blocks/{username}"],
            checkMembershipForUser: ["GET /orgs/{org}/members/{username}"],
            checkPublicMembershipForUser: ["GET /orgs/{org}/public_members/{username}"],
            convertMemberToOutsideCollaborator: [
                "PUT /orgs/{org}/outside_collaborators/{username}",
            ],
            createInvitation: ["POST /orgs/{org}/invitations"],
            createWebhook: ["POST /orgs/{org}/hooks"],
            deleteWebhook: ["DELETE /orgs/{org}/hooks/{hook_id}"],
            get: ["GET /orgs/{org}"],
            getMembershipForAuthenticatedUser: ["GET /user/memberships/orgs/{org}"],
            getMembershipForUser: ["GET /orgs/{org}/memberships/{username}"],
            getWebhook: ["GET /orgs/{org}/hooks/{hook_id}"],
            getWebhookConfigForOrg: ["GET /orgs/{org}/hooks/{hook_id}/config"],
            list: ["GET /organizations"],
            listAppInstallations: ["GET /orgs/{org}/installations"],
            listBlockedUsers: ["GET /orgs/{org}/blocks"],
            listForAuthenticatedUser: ["GET /user/orgs"],
            listForUser: ["GET /users/{username}/orgs"],
            listInvitationTeams: ["GET /orgs/{org}/invitations/{invitation_id}/teams"],
            listMembers: ["GET /orgs/{org}/members"],
            listMembershipsForAuthenticatedUser: ["GET /user/memberships/orgs"],
            listOutsideCollaborators: ["GET /orgs/{org}/outside_collaborators"],
            listPendingInvitations: ["GET /orgs/{org}/invitations"],
            listPublicMembers: ["GET /orgs/{org}/public_members"],
            listWebhooks: ["GET /orgs/{org}/hooks"],
            pingWebhook: ["POST /orgs/{org}/hooks/{hook_id}/pings"],
            removeMember: ["DELETE /orgs/{org}/members/{username}"],
            removeMembershipForUser: ["DELETE /orgs/{org}/memberships/{username}"],
            removeOutsideCollaborator: [
                "DELETE /orgs/{org}/outside_collaborators/{username}",
            ],
            removePublicMembershipForAuthenticatedUser: [
                "DELETE /orgs/{org}/public_members/{username}",
            ],
            setMembershipForUser: ["PUT /orgs/{org}/memberships/{username}"],
            setPublicMembershipForAuthenticatedUser: [
                "PUT /orgs/{org}/public_members/{username}",
            ],
            unblockUser: ["DELETE /orgs/{org}/blocks/{username}"],
            update: ["PATCH /orgs/{org}"],
            updateMembershipForAuthenticatedUser: [
                "PATCH /user/memberships/orgs/{org}",
            ],
            updateWebhook: ["PATCH /orgs/{org}/hooks/{hook_id}"],
            updateWebhookConfigForOrg: ["PATCH /orgs/{org}/hooks/{hook_id}/config"],
        },
        projects: {
            addCollaborator: [
                "PUT /projects/{project_id}/collaborators/{username}",
                { mediaType: { previews: ["inertia"] } },
            ],
            createCard: [
                "POST /projects/columns/{column_id}/cards",
                { mediaType: { previews: ["inertia"] } },
            ],
            createColumn: [
                "POST /projects/{project_id}/columns",
                { mediaType: { previews: ["inertia"] } },
            ],
            createForAuthenticatedUser: [
                "POST /user/projects",
                { mediaType: { previews: ["inertia"] } },
            ],
            createForOrg: [
                "POST /orgs/{org}/projects",
                { mediaType: { previews: ["inertia"] } },
            ],
            createForRepo: [
                "POST /repos/{owner}/{repo}/projects",
                { mediaType: { previews: ["inertia"] } },
            ],
            delete: [
                "DELETE /projects/{project_id}",
                { mediaType: { previews: ["inertia"] } },
            ],
            deleteCard: [
                "DELETE /projects/columns/cards/{card_id}",
                { mediaType: { previews: ["inertia"] } },
            ],
            deleteColumn: [
                "DELETE /projects/columns/{column_id}",
                { mediaType: { previews: ["inertia"] } },
            ],
            get: [
                "GET /projects/{project_id}",
                { mediaType: { previews: ["inertia"] } },
            ],
            getCard: [
                "GET /projects/columns/cards/{card_id}",
                { mediaType: { previews: ["inertia"] } },
            ],
            getColumn: [
                "GET /projects/columns/{column_id}",
                { mediaType: { previews: ["inertia"] } },
            ],
            getPermissionForUser: [
                "GET /projects/{project_id}/collaborators/{username}/permission",
                { mediaType: { previews: ["inertia"] } },
            ],
            listCards: [
                "GET /projects/columns/{column_id}/cards",
                { mediaType: { previews: ["inertia"] } },
            ],
            listCollaborators: [
                "GET /projects/{project_id}/collaborators",
                { mediaType: { previews: ["inertia"] } },
            ],
            listColumns: [
                "GET /projects/{project_id}/columns",
                { mediaType: { previews: ["inertia"] } },
            ],
            listForOrg: [
                "GET /orgs/{org}/projects",
                { mediaType: { previews: ["inertia"] } },
            ],
            listForRepo: [
                "GET /repos/{owner}/{repo}/projects",
                { mediaType: { previews: ["inertia"] } },
            ],
            listForUser: [
                "GET /users/{username}/projects",
                { mediaType: { previews: ["inertia"] } },
            ],
            moveCard: [
                "POST /projects/columns/cards/{card_id}/moves",
                { mediaType: { previews: ["inertia"] } },
            ],
            moveColumn: [
                "POST /projects/columns/{column_id}/moves",
                { mediaType: { previews: ["inertia"] } },
            ],
            removeCollaborator: [
                "DELETE /projects/{project_id}/collaborators/{username}",
                { mediaType: { previews: ["inertia"] } },
            ],
            update: [
                "PATCH /projects/{project_id}",
                { mediaType: { previews: ["inertia"] } },
            ],
            updateCard: [
                "PATCH /projects/columns/cards/{card_id}",
                { mediaType: { previews: ["inertia"] } },
            ],
            updateColumn: [
                "PATCH /projects/columns/{column_id}",
                { mediaType: { previews: ["inertia"] } },
            ],
        },
        pulls: {
            checkIfMerged: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/merge"],
            create: ["POST /repos/{owner}/{repo}/pulls"],
            createReplyForReviewComment: [
                "POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies",
            ],
            createReview: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],
            createReviewComment: [
                "POST /repos/{owner}/{repo}/pulls/{pull_number}/comments",
            ],
            deletePendingReview: [
                "DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}",
            ],
            deleteReviewComment: [
                "DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}",
            ],
            dismissReview: [
                "PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals",
            ],
            get: ["GET /repos/{owner}/{repo}/pulls/{pull_number}"],
            getReview: [
                "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}",
            ],
            getReviewComment: ["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}"],
            list: ["GET /repos/{owner}/{repo}/pulls"],
            listCommentsForReview: [
                "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments",
            ],
            listCommits: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/commits"],
            listFiles: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/files"],
            listRequestedReviewers: [
                "GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers",
            ],
            listReviewComments: [
                "GET /repos/{owner}/{repo}/pulls/{pull_number}/comments",
            ],
            listReviewCommentsForRepo: ["GET /repos/{owner}/{repo}/pulls/comments"],
            listReviews: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],
            merge: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge"],
            removeRequestedReviewers: [
                "DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers",
            ],
            requestReviewers: [
                "POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers",
            ],
            submitReview: [
                "POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events",
            ],
            update: ["PATCH /repos/{owner}/{repo}/pulls/{pull_number}"],
            updateBranch: [
                "PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch",
                { mediaType: { previews: ["lydian"] } },
            ],
            updateReview: [
                "PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}",
            ],
            updateReviewComment: [
                "PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}",
            ],
        },
        rateLimit: { get: ["GET /rate_limit"] },
        reactions: {
            createForCommitComment: [
                "POST /repos/{owner}/{repo}/comments/{comment_id}/reactions",
                { mediaType: { previews: ["squirrel-girl"] } },
            ],
            createForIssue: [
                "POST /repos/{owner}/{repo}/issues/{issue_number}/reactions",
                { mediaType: { previews: ["squirrel-girl"] } },
            ],
            createForIssueComment: [
                "POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions",
                { mediaType: { previews: ["squirrel-girl"] } },
            ],
            createForPullRequestReviewComment: [
                "POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions",
                { mediaType: { previews: ["squirrel-girl"] } },
            ],
            createForTeamDiscussionCommentInOrg: [
                "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions",
                { mediaType: { previews: ["squirrel-girl"] } },
            ],
            createForTeamDiscussionInOrg: [
                "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions",
                { mediaType: { previews: ["squirrel-girl"] } },
            ],
            deleteForCommitComment: [
                "DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}",
                { mediaType: { previews: ["squirrel-girl"] } },
            ],
            deleteForIssue: [
                "DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}",
                { mediaType: { previews: ["squirrel-girl"] } },
            ],
            deleteForIssueComment: [
                "DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}",
                { mediaType: { previews: ["squirrel-girl"] } },
            ],
            deleteForPullRequestComment: [
                "DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}",
                { mediaType: { previews: ["squirrel-girl"] } },
            ],
            deleteForTeamDiscussion: [
                "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}",
                { mediaType: { previews: ["squirrel-girl"] } },
            ],
            deleteForTeamDiscussionComment: [
                "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}",
                { mediaType: { previews: ["squirrel-girl"] } },
            ],
            deleteLegacy: [
                "DELETE /reactions/{reaction_id}",
                { mediaType: { previews: ["squirrel-girl"] } },
                {
                    deprecated: "octokit.reactions.deleteLegacy() is deprecated, see https://docs.github.com/v3/reactions/#delete-a-reaction-legacy",
                },
            ],
            listForCommitComment: [
                "GET /repos/{owner}/{repo}/comments/{comment_id}/reactions",
                { mediaType: { previews: ["squirrel-girl"] } },
            ],
            listForIssue: [
                "GET /repos/{owner}/{repo}/issues/{issue_number}/reactions",
                { mediaType: { previews: ["squirrel-girl"] } },
            ],
            listForIssueComment: [
                "GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions",
                { mediaType: { previews: ["squirrel-girl"] } },
            ],
            listForPullRequestReviewComment: [
                "GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions",
                { mediaType: { previews: ["squirrel-girl"] } },
            ],
            listForTeamDiscussionCommentInOrg: [
                "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions",
                { mediaType: { previews: ["squirrel-girl"] } },
            ],
            listForTeamDiscussionInOrg: [
                "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions",
                { mediaType: { previews: ["squirrel-girl"] } },
            ],
        },
        repos: {
            acceptInvitation: ["PATCH /user/repository_invitations/{invitation_id}"],
            addAppAccessRestrictions: [
                "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
                {},
                { mapToData: "apps" },
            ],
            addCollaborator: ["PUT /repos/{owner}/{repo}/collaborators/{username}"],
            addStatusCheckContexts: [
                "POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
                {},
                { mapToData: "contexts" },
            ],
            addTeamAccessRestrictions: [
                "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
                {},
                { mapToData: "teams" },
            ],
            addUserAccessRestrictions: [
                "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
                {},
                { mapToData: "users" },
            ],
            checkCollaborator: ["GET /repos/{owner}/{repo}/collaborators/{username}"],
            checkVulnerabilityAlerts: [
                "GET /repos/{owner}/{repo}/vulnerability-alerts",
                { mediaType: { previews: ["dorian"] } },
            ],
            compareCommits: ["GET /repos/{owner}/{repo}/compare/{base}...{head}"],
            createCommitComment: [
                "POST /repos/{owner}/{repo}/commits/{commit_sha}/comments",
            ],
            createCommitSignatureProtection: [
                "POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
                { mediaType: { previews: ["zzzax"] } },
            ],
            createCommitStatus: ["POST /repos/{owner}/{repo}/statuses/{sha}"],
            createDeployKey: ["POST /repos/{owner}/{repo}/keys"],
            createDeployment: ["POST /repos/{owner}/{repo}/deployments"],
            createDeploymentStatus: [
                "POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses",
            ],
            createDispatchEvent: ["POST /repos/{owner}/{repo}/dispatches"],
            createForAuthenticatedUser: ["POST /user/repos"],
            createFork: ["POST /repos/{owner}/{repo}/forks"],
            createInOrg: ["POST /orgs/{org}/repos"],
            createOrUpdateFileContents: ["PUT /repos/{owner}/{repo}/contents/{path}"],
            createPagesSite: [
                "POST /repos/{owner}/{repo}/pages",
                { mediaType: { previews: ["switcheroo"] } },
            ],
            createRelease: ["POST /repos/{owner}/{repo}/releases"],
            createUsingTemplate: [
                "POST /repos/{template_owner}/{template_repo}/generate",
                { mediaType: { previews: ["baptiste"] } },
            ],
            createWebhook: ["POST /repos/{owner}/{repo}/hooks"],
            declineInvitation: ["DELETE /user/repository_invitations/{invitation_id}"],
            delete: ["DELETE /repos/{owner}/{repo}"],
            deleteAccessRestrictions: [
                "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions",
            ],
            deleteAdminBranchProtection: [
                "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins",
            ],
            deleteBranchProtection: [
                "DELETE /repos/{owner}/{repo}/branches/{branch}/protection",
            ],
            deleteCommitComment: ["DELETE /repos/{owner}/{repo}/comments/{comment_id}"],
            deleteCommitSignatureProtection: [
                "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
                { mediaType: { previews: ["zzzax"] } },
            ],
            deleteDeployKey: ["DELETE /repos/{owner}/{repo}/keys/{key_id}"],
            deleteDeployment: [
                "DELETE /repos/{owner}/{repo}/deployments/{deployment_id}",
            ],
            deleteFile: ["DELETE /repos/{owner}/{repo}/contents/{path}"],
            deleteInvitation: [
                "DELETE /repos/{owner}/{repo}/invitations/{invitation_id}",
            ],
            deletePagesSite: [
                "DELETE /repos/{owner}/{repo}/pages",
                { mediaType: { previews: ["switcheroo"] } },
            ],
            deletePullRequestReviewProtection: [
                "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews",
            ],
            deleteRelease: ["DELETE /repos/{owner}/{repo}/releases/{release_id}"],
            deleteReleaseAsset: [
                "DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}",
            ],
            deleteWebhook: ["DELETE /repos/{owner}/{repo}/hooks/{hook_id}"],
            disableAutomatedSecurityFixes: [
                "DELETE /repos/{owner}/{repo}/automated-security-fixes",
                { mediaType: { previews: ["london"] } },
            ],
            disableVulnerabilityAlerts: [
                "DELETE /repos/{owner}/{repo}/vulnerability-alerts",
                { mediaType: { previews: ["dorian"] } },
            ],
            downloadArchive: [
                "GET /repos/{owner}/{repo}/zipball/{ref}",
                {},
                { renamed: ["repos", "downloadZipballArchive"] },
            ],
            downloadTarballArchive: ["GET /repos/{owner}/{repo}/tarball/{ref}"],
            downloadZipballArchive: ["GET /repos/{owner}/{repo}/zipball/{ref}"],
            enableAutomatedSecurityFixes: [
                "PUT /repos/{owner}/{repo}/automated-security-fixes",
                { mediaType: { previews: ["london"] } },
            ],
            enableVulnerabilityAlerts: [
                "PUT /repos/{owner}/{repo}/vulnerability-alerts",
                { mediaType: { previews: ["dorian"] } },
            ],
            get: ["GET /repos/{owner}/{repo}"],
            getAccessRestrictions: [
                "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions",
            ],
            getAdminBranchProtection: [
                "GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins",
            ],
            getAllStatusCheckContexts: [
                "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
            ],
            getAllTopics: [
                "GET /repos/{owner}/{repo}/topics",
                { mediaType: { previews: ["mercy"] } },
            ],
            getAppsWithAccessToProtectedBranch: [
                "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
            ],
            getBranch: ["GET /repos/{owner}/{repo}/branches/{branch}"],
            getBranchProtection: [
                "GET /repos/{owner}/{repo}/branches/{branch}/protection",
            ],
            getClones: ["GET /repos/{owner}/{repo}/traffic/clones"],
            getCodeFrequencyStats: ["GET /repos/{owner}/{repo}/stats/code_frequency"],
            getCollaboratorPermissionLevel: [
                "GET /repos/{owner}/{repo}/collaborators/{username}/permission",
            ],
            getCombinedStatusForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/status"],
            getCommit: ["GET /repos/{owner}/{repo}/commits/{ref}"],
            getCommitActivityStats: ["GET /repos/{owner}/{repo}/stats/commit_activity"],
            getCommitComment: ["GET /repos/{owner}/{repo}/comments/{comment_id}"],
            getCommitSignatureProtection: [
                "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
                { mediaType: { previews: ["zzzax"] } },
            ],
            getCommunityProfileMetrics: ["GET /repos/{owner}/{repo}/community/profile"],
            getContent: ["GET /repos/{owner}/{repo}/contents/{path}"],
            getContributorsStats: ["GET /repos/{owner}/{repo}/stats/contributors"],
            getDeployKey: ["GET /repos/{owner}/{repo}/keys/{key_id}"],
            getDeployment: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}"],
            getDeploymentStatus: [
                "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}",
            ],
            getLatestPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/latest"],
            getLatestRelease: ["GET /repos/{owner}/{repo}/releases/latest"],
            getPages: ["GET /repos/{owner}/{repo}/pages"],
            getPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/{build_id}"],
            getParticipationStats: ["GET /repos/{owner}/{repo}/stats/participation"],
            getPullRequestReviewProtection: [
                "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews",
            ],
            getPunchCardStats: ["GET /repos/{owner}/{repo}/stats/punch_card"],
            getReadme: ["GET /repos/{owner}/{repo}/readme"],
            getRelease: ["GET /repos/{owner}/{repo}/releases/{release_id}"],
            getReleaseAsset: ["GET /repos/{owner}/{repo}/releases/assets/{asset_id}"],
            getReleaseByTag: ["GET /repos/{owner}/{repo}/releases/tags/{tag}"],
            getStatusChecksProtection: [
                "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",
            ],
            getTeamsWithAccessToProtectedBranch: [
                "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
            ],
            getTopPaths: ["GET /repos/{owner}/{repo}/traffic/popular/paths"],
            getTopReferrers: ["GET /repos/{owner}/{repo}/traffic/popular/referrers"],
            getUsersWithAccessToProtectedBranch: [
                "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
            ],
            getViews: ["GET /repos/{owner}/{repo}/traffic/views"],
            getWebhook: ["GET /repos/{owner}/{repo}/hooks/{hook_id}"],
            getWebhookConfigForRepo: [
                "GET /repos/{owner}/{repo}/hooks/{hook_id}/config",
            ],
            listBranches: ["GET /repos/{owner}/{repo}/branches"],
            listBranchesForHeadCommit: [
                "GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head",
                { mediaType: { previews: ["groot"] } },
            ],
            listCollaborators: ["GET /repos/{owner}/{repo}/collaborators"],
            listCommentsForCommit: [
                "GET /repos/{owner}/{repo}/commits/{commit_sha}/comments",
            ],
            listCommitCommentsForRepo: ["GET /repos/{owner}/{repo}/comments"],
            listCommitStatusesForRef: [
                "GET /repos/{owner}/{repo}/commits/{ref}/statuses",
            ],
            listCommits: ["GET /repos/{owner}/{repo}/commits"],
            listContributors: ["GET /repos/{owner}/{repo}/contributors"],
            listDeployKeys: ["GET /repos/{owner}/{repo}/keys"],
            listDeploymentStatuses: [
                "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses",
            ],
            listDeployments: ["GET /repos/{owner}/{repo}/deployments"],
            listForAuthenticatedUser: ["GET /user/repos"],
            listForOrg: ["GET /orgs/{org}/repos"],
            listForUser: ["GET /users/{username}/repos"],
            listForks: ["GET /repos/{owner}/{repo}/forks"],
            listInvitations: ["GET /repos/{owner}/{repo}/invitations"],
            listInvitationsForAuthenticatedUser: ["GET /user/repository_invitations"],
            listLanguages: ["GET /repos/{owner}/{repo}/languages"],
            listPagesBuilds: ["GET /repos/{owner}/{repo}/pages/builds"],
            listPublic: ["GET /repositories"],
            listPullRequestsAssociatedWithCommit: [
                "GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls",
                { mediaType: { previews: ["groot"] } },
            ],
            listReleaseAssets: [
                "GET /repos/{owner}/{repo}/releases/{release_id}/assets",
            ],
            listReleases: ["GET /repos/{owner}/{repo}/releases"],
            listTags: ["GET /repos/{owner}/{repo}/tags"],
            listTeams: ["GET /repos/{owner}/{repo}/teams"],
            listWebhooks: ["GET /repos/{owner}/{repo}/hooks"],
            merge: ["POST /repos/{owner}/{repo}/merges"],
            pingWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/pings"],
            removeAppAccessRestrictions: [
                "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
                {},
                { mapToData: "apps" },
            ],
            removeCollaborator: [
                "DELETE /repos/{owner}/{repo}/collaborators/{username}",
            ],
            removeStatusCheckContexts: [
                "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
                {},
                { mapToData: "contexts" },
            ],
            removeStatusCheckProtection: [
                "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",
            ],
            removeTeamAccessRestrictions: [
                "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
                {},
                { mapToData: "teams" },
            ],
            removeUserAccessRestrictions: [
                "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
                {},
                { mapToData: "users" },
            ],
            replaceAllTopics: [
                "PUT /repos/{owner}/{repo}/topics",
                { mediaType: { previews: ["mercy"] } },
            ],
            requestPagesBuild: ["POST /repos/{owner}/{repo}/pages/builds"],
            setAdminBranchProtection: [
                "POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins",
            ],
            setAppAccessRestrictions: [
                "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
                {},
                { mapToData: "apps" },
            ],
            setStatusCheckContexts: [
                "PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
                {},
                { mapToData: "contexts" },
            ],
            setTeamAccessRestrictions: [
                "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
                {},
                { mapToData: "teams" },
            ],
            setUserAccessRestrictions: [
                "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
                {},
                { mapToData: "users" },
            ],
            testPushWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/tests"],
            transfer: ["POST /repos/{owner}/{repo}/transfer"],
            update: ["PATCH /repos/{owner}/{repo}"],
            updateBranchProtection: [
                "PUT /repos/{owner}/{repo}/branches/{branch}/protection",
            ],
            updateCommitComment: ["PATCH /repos/{owner}/{repo}/comments/{comment_id}"],
            updateInformationAboutPagesSite: ["PUT /repos/{owner}/{repo}/pages"],
            updateInvitation: [
                "PATCH /repos/{owner}/{repo}/invitations/{invitation_id}",
            ],
            updatePullRequestReviewProtection: [
                "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews",
            ],
            updateRelease: ["PATCH /repos/{owner}/{repo}/releases/{release_id}"],
            updateReleaseAsset: [
                "PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}",
            ],
            updateStatusCheckPotection: [
                "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",
                {},
                { renamed: ["repos", "updateStatusCheckProtection"] },
            ],
            updateStatusCheckProtection: [
                "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",
            ],
            updateWebhook: ["PATCH /repos/{owner}/{repo}/hooks/{hook_id}"],
            updateWebhookConfigForRepo: [
                "PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config",
            ],
            uploadReleaseAsset: [
                "POST /repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}",
                { baseUrl: "https://uploads.github.com" },
            ],
        },
        search: {
            code: ["GET /search/code"],
            commits: ["GET /search/commits", { mediaType: { previews: ["cloak"] } }],
            issuesAndPullRequests: ["GET /search/issues"],
            labels: ["GET /search/labels"],
            repos: ["GET /search/repositories"],
            topics: ["GET /search/topics", { mediaType: { previews: ["mercy"] } }],
            users: ["GET /search/users"],
        },
        secretScanning: {
            getAlert: [
                "GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}",
            ],
            listAlertsForRepo: ["GET /repos/{owner}/{repo}/secret-scanning/alerts"],
            updateAlert: [
                "PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}",
            ],
        },
        teams: {
            addOrUpdateMembershipForUserInOrg: [
                "PUT /orgs/{org}/teams/{team_slug}/memberships/{username}",
            ],
            addOrUpdateProjectPermissionsInOrg: [
                "PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}",
                { mediaType: { previews: ["inertia"] } },
            ],
            addOrUpdateRepoPermissionsInOrg: [
                "PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}",
            ],
            checkPermissionsForProjectInOrg: [
                "GET /orgs/{org}/teams/{team_slug}/projects/{project_id}",
                { mediaType: { previews: ["inertia"] } },
            ],
            checkPermissionsForRepoInOrg: [
                "GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}",
            ],
            create: ["POST /orgs/{org}/teams"],
            createDiscussionCommentInOrg: [
                "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments",
            ],
            createDiscussionInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions"],
            deleteDiscussionCommentInOrg: [
                "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}",
            ],
            deleteDiscussionInOrg: [
                "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}",
            ],
            deleteInOrg: ["DELETE /orgs/{org}/teams/{team_slug}"],
            getByName: ["GET /orgs/{org}/teams/{team_slug}"],
            getDiscussionCommentInOrg: [
                "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}",
            ],
            getDiscussionInOrg: [
                "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}",
            ],
            getMembershipForUserInOrg: [
                "GET /orgs/{org}/teams/{team_slug}/memberships/{username}",
            ],
            list: ["GET /orgs/{org}/teams"],
            listChildInOrg: ["GET /orgs/{org}/teams/{team_slug}/teams"],
            listDiscussionCommentsInOrg: [
                "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments",
            ],
            listDiscussionsInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions"],
            listForAuthenticatedUser: ["GET /user/teams"],
            listMembersInOrg: ["GET /orgs/{org}/teams/{team_slug}/members"],
            listPendingInvitationsInOrg: [
                "GET /orgs/{org}/teams/{team_slug}/invitations",
            ],
            listProjectsInOrg: [
                "GET /orgs/{org}/teams/{team_slug}/projects",
                { mediaType: { previews: ["inertia"] } },
            ],
            listReposInOrg: ["GET /orgs/{org}/teams/{team_slug}/repos"],
            removeMembershipForUserInOrg: [
                "DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}",
            ],
            removeProjectInOrg: [
                "DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}",
            ],
            removeRepoInOrg: [
                "DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}",
            ],
            updateDiscussionCommentInOrg: [
                "PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}",
            ],
            updateDiscussionInOrg: [
                "PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}",
            ],
            updateInOrg: ["PATCH /orgs/{org}/teams/{team_slug}"],
        },
        users: {
            addEmailForAuthenticated: ["POST /user/emails"],
            block: ["PUT /user/blocks/{username}"],
            checkBlocked: ["GET /user/blocks/{username}"],
            checkFollowingForUser: ["GET /users/{username}/following/{target_user}"],
            checkPersonIsFollowedByAuthenticated: ["GET /user/following/{username}"],
            createGpgKeyForAuthenticated: ["POST /user/gpg_keys"],
            createPublicSshKeyForAuthenticated: ["POST /user/keys"],
            deleteEmailForAuthenticated: ["DELETE /user/emails"],
            deleteGpgKeyForAuthenticated: ["DELETE /user/gpg_keys/{gpg_key_id}"],
            deletePublicSshKeyForAuthenticated: ["DELETE /user/keys/{key_id}"],
            follow: ["PUT /user/following/{username}"],
            getAuthenticated: ["GET /user"],
            getByUsername: ["GET /users/{username}"],
            getContextForUser: ["GET /users/{username}/hovercard"],
            getGpgKeyForAuthenticated: ["GET /user/gpg_keys/{gpg_key_id}"],
            getPublicSshKeyForAuthenticated: ["GET /user/keys/{key_id}"],
            list: ["GET /users"],
            listBlockedByAuthenticated: ["GET /user/blocks"],
            listEmailsForAuthenticated: ["GET /user/emails"],
            listFollowedByAuthenticated: ["GET /user/following"],
            listFollowersForAuthenticatedUser: ["GET /user/followers"],
            listFollowersForUser: ["GET /users/{username}/followers"],
            listFollowingForUser: ["GET /users/{username}/following"],
            listGpgKeysForAuthenticated: ["GET /user/gpg_keys"],
            listGpgKeysForUser: ["GET /users/{username}/gpg_keys"],
            listPublicEmailsForAuthenticated: ["GET /user/public_emails"],
            listPublicKeysForUser: ["GET /users/{username}/keys"],
            listPublicSshKeysForAuthenticated: ["GET /user/keys"],
            setPrimaryEmailVisibilityForAuthenticated: ["PATCH /user/email/visibility"],
            unblock: ["DELETE /user/blocks/{username}"],
            unfollow: ["DELETE /user/following/{username}"],
            updateAuthenticated: ["PATCH /user"],
        },
    };

    const VERSION$4 = "4.4.1";

    function endpointsToMethods(octokit, endpointsMap) {
        const newMethods = {};
        for (const [scope, endpoints] of Object.entries(endpointsMap)) {
            for (const [methodName, endpoint] of Object.entries(endpoints)) {
                const [route, defaults, decorations] = endpoint;
                const [method, url] = route.split(/ /);
                const endpointDefaults = Object.assign({ method, url }, defaults);
                if (!newMethods[scope]) {
                    newMethods[scope] = {};
                }
                const scopeMethods = newMethods[scope];
                if (decorations) {
                    scopeMethods[methodName] = decorate(octokit, scope, methodName, endpointDefaults, decorations);
                    continue;
                }
                scopeMethods[methodName] = octokit.request.defaults(endpointDefaults);
            }
        }
        return newMethods;
    }
    function decorate(octokit, scope, methodName, defaults, decorations) {
        const requestWithDefaults = octokit.request.defaults(defaults);
        /* istanbul ignore next */
        function withDecorations(...args) {
            // @ts-ignore https://github.com/microsoft/TypeScript/issues/25488
            let options = requestWithDefaults.endpoint.merge(...args);
            // There are currently no other decorations than `.mapToData`
            if (decorations.mapToData) {
                options = Object.assign({}, options, {
                    data: options[decorations.mapToData],
                    [decorations.mapToData]: undefined,
                });
                return requestWithDefaults(options);
            }
            if (decorations.renamed) {
                const [newScope, newMethodName] = decorations.renamed;
                octokit.log.warn(`octokit.${scope}.${methodName}() has been renamed to octokit.${newScope}.${newMethodName}()`);
            }
            if (decorations.deprecated) {
                octokit.log.warn(decorations.deprecated);
            }
            if (decorations.renamedParameters) {
                // @ts-ignore https://github.com/microsoft/TypeScript/issues/25488
                const options = requestWithDefaults.endpoint.merge(...args);
                for (const [name, alias] of Object.entries(decorations.renamedParameters)) {
                    if (name in options) {
                        octokit.log.warn(`"${name}" parameter is deprecated for "octokit.${scope}.${methodName}()". Use "${alias}" instead`);
                        if (!(alias in options)) {
                            options[alias] = options[name];
                        }
                        delete options[name];
                    }
                }
                return requestWithDefaults(options);
            }
            // @ts-ignore https://github.com/microsoft/TypeScript/issues/25488
            return requestWithDefaults(...args);
        }
        return Object.assign(withDecorations, requestWithDefaults);
    }

    /**
     * This plugin is a 1:1 copy of internal @octokit/rest plugins. The primary
     * goal is to rebuild @octokit/rest on top of @octokit/core. Once that is
     * done, we will remove the registerEndpoints methods and return the methods
     * directly as with the other plugins. At that point we will also remove the
     * legacy workarounds and deprecations.
     *
     * See the plan at
     * https://github.com/octokit/plugin-rest-endpoint-methods.js/pull/1
     */
    function restEndpointMethods(octokit) {
        return endpointsToMethods(octokit, Endpoints);
    }
    restEndpointMethods.VERSION = VERSION$4;
    //# sourceMappingURL=index.js.map

    var distWeb$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        restEndpointMethods: restEndpointMethods
    });

    const VERSION$5 = "2.6.2";

    /**
     * Some “list” response that can be paginated have a different response structure
     *
     * They have a `total_count` key in the response (search also has `incomplete_results`,
     * /installation/repositories also has `repository_selection`), as well as a key with
     * the list of the items which name varies from endpoint to endpoint.
     *
     * Octokit normalizes these responses so that paginated results are always returned following
     * the same structure. One challenge is that if the list response has only one page, no Link
     * header is provided, so this header alone is not sufficient to check wether a response is
     * paginated or not.
     *
     * We check if a "total_count" key is present in the response data, but also make sure that
     * a "url" property is not, as the "Get the combined status for a specific ref" endpoint would
     * otherwise match: https://developer.github.com/v3/repos/statuses/#get-the-combined-status-for-a-specific-ref
     */
    function normalizePaginatedListResponse(response) {
        const responseNeedsNormalization = "total_count" in response.data && !("url" in response.data);
        if (!responseNeedsNormalization)
            return response;
        // keep the additional properties intact as there is currently no other way
        // to retrieve the same information.
        const incompleteResults = response.data.incomplete_results;
        const repositorySelection = response.data.repository_selection;
        const totalCount = response.data.total_count;
        delete response.data.incomplete_results;
        delete response.data.repository_selection;
        delete response.data.total_count;
        const namespaceKey = Object.keys(response.data)[0];
        const data = response.data[namespaceKey];
        response.data = data;
        if (typeof incompleteResults !== "undefined") {
            response.data.incomplete_results = incompleteResults;
        }
        if (typeof repositorySelection !== "undefined") {
            response.data.repository_selection = repositorySelection;
        }
        response.data.total_count = totalCount;
        return response;
    }

    function iterator(octokit, route, parameters) {
        const options = typeof route === "function"
            ? route.endpoint(parameters)
            : octokit.request.endpoint(route, parameters);
        const requestMethod = typeof route === "function" ? route : octokit.request;
        const method = options.method;
        const headers = options.headers;
        let url = options.url;
        return {
            [Symbol.asyncIterator]: () => ({
                async next() {
                    if (!url)
                        return { done: true };
                    const response = await requestMethod({ method, url, headers });
                    const normalizedResponse = normalizePaginatedListResponse(response);
                    // `response.headers.link` format:
                    // '<https://api.github.com/users/aseemk/followers?page=2>; rel="next", <https://api.github.com/users/aseemk/followers?page=2>; rel="last"'
                    // sets `url` to undefined if "next" URL is not present or `link` header is not set
                    url = ((normalizedResponse.headers.link || "").match(/<([^>]+)>;\s*rel="next"/) || [])[1];
                    return { value: normalizedResponse };
                },
            }),
        };
    }

    function paginate(octokit, route, parameters, mapFn) {
        if (typeof parameters === "function") {
            mapFn = parameters;
            parameters = undefined;
        }
        return gather(octokit, [], iterator(octokit, route, parameters)[Symbol.asyncIterator](), mapFn);
    }
    function gather(octokit, results, iterator, mapFn) {
        return iterator.next().then((result) => {
            if (result.done) {
                return results;
            }
            let earlyExit = false;
            function done() {
                earlyExit = true;
            }
            results = results.concat(mapFn ? mapFn(result.value, done) : result.value.data);
            if (earlyExit) {
                return results;
            }
            return gather(octokit, results, iterator, mapFn);
        });
    }

    const composePaginateRest = Object.assign(paginate, {
        iterator,
    });

    /**
     * @param octokit Octokit instance
     * @param options Options passed to Octokit constructor
     */
    function paginateRest(octokit) {
        return {
            paginate: Object.assign(paginate.bind(null, octokit), {
                iterator: iterator.bind(null, octokit),
            }),
        };
    }
    paginateRest.VERSION = VERSION$5;
    //# sourceMappingURL=index.js.map

    var distWeb$2 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        composePaginateRest: composePaginateRest,
        paginateRest: paginateRest
    });

    var utils$2 = createCommonjsModule(function (module, exports) {
    var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }));
    var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
        o["default"] = v;
    });
    var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getOctokitOptions = exports.GitHub = exports.context = void 0;
    const Context = __importStar(context);
    const Utils = __importStar(utils$1);
    // octokit + plugins



    exports.context = new Context.Context();
    const baseUrl = Utils.getApiBaseUrl();
    const defaults = {
        baseUrl,
        request: {
            agent: Utils.getProxyAgent(baseUrl)
        }
    };
    exports.GitHub = distWeb.Octokit.plugin(distWeb$1.restEndpointMethods, distWeb$2.paginateRest).defaults(defaults);
    /**
     * Convience function to correctly format Octokit Options to pass into the constructor.
     *
     * @param     token    the repo PAT or GITHUB_TOKEN
     * @param     options  other options to set
     */
    function getOctokitOptions(token, options) {
        const opts = Object.assign({}, options || {}); // Shallow clone - don't mutate the object provided by the caller
        // Auth
        const auth = Utils.getAuthString(token, opts);
        if (auth) {
            opts.auth = auth;
        }
        return opts;
    }
    exports.getOctokitOptions = getOctokitOptions;
    //# sourceMappingURL=utils.js.map
    });

    unwrapExports(utils$2);
    var utils_1$2 = utils$2.getOctokitOptions;
    var utils_2$1 = utils$2.GitHub;
    var utils_3$1 = utils$2.context;

    var github = createCommonjsModule(function (module, exports) {
    var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }));
    var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
        o["default"] = v;
    });
    var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getOctokit = exports.context = void 0;
    const Context = __importStar(context);

    exports.context = new Context.Context();
    /**
     * Returns a hydrated octokit ready to use for GitHub Actions
     *
     * @param     token    the repo PAT or GITHUB_TOKEN
     * @param     options  other options to set
     */
    function getOctokit(token, options) {
        return new utils$2.GitHub(utils$2.getOctokitOptions(token, options));
    }
    exports.getOctokit = getOctokit;
    //# sourceMappingURL=github.js.map
    });

    var github$1 = unwrapExports(github);
    var github_1 = github.getOctokit;
    var github_2 = github.context;

    var bind$1 = function bind(fn, thisArg) {
      return function wrap() {
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        return fn.apply(thisArg, args);
      };
    };

    /*global toString:true*/

    // utils is a library of generic helper functions non-specific to axios

    var toString = Object.prototype.toString;

    /**
     * Determine if a value is an Array
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is an Array, otherwise false
     */
    function isArray(val) {
      return toString.call(val) === '[object Array]';
    }

    /**
     * Determine if a value is undefined
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if the value is undefined, otherwise false
     */
    function isUndefined(val) {
      return typeof val === 'undefined';
    }

    /**
     * Determine if a value is a Buffer
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Buffer, otherwise false
     */
    function isBuffer(val) {
      return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
        && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
    }

    /**
     * Determine if a value is an ArrayBuffer
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is an ArrayBuffer, otherwise false
     */
    function isArrayBuffer(val) {
      return toString.call(val) === '[object ArrayBuffer]';
    }

    /**
     * Determine if a value is a FormData
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is an FormData, otherwise false
     */
    function isFormData(val) {
      return (typeof FormData !== 'undefined') && (val instanceof FormData);
    }

    /**
     * Determine if a value is a view on an ArrayBuffer
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
     */
    function isArrayBufferView(val) {
      var result;
      if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
        result = ArrayBuffer.isView(val);
      } else {
        result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
      }
      return result;
    }

    /**
     * Determine if a value is a String
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a String, otherwise false
     */
    function isString(val) {
      return typeof val === 'string';
    }

    /**
     * Determine if a value is a Number
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Number, otherwise false
     */
    function isNumber(val) {
      return typeof val === 'number';
    }

    /**
     * Determine if a value is an Object
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is an Object, otherwise false
     */
    function isObject$1(val) {
      return val !== null && typeof val === 'object';
    }

    /**
     * Determine if a value is a plain Object
     *
     * @param {Object} val The value to test
     * @return {boolean} True if value is a plain Object, otherwise false
     */
    function isPlainObject$1(val) {
      if (toString.call(val) !== '[object Object]') {
        return false;
      }

      var prototype = Object.getPrototypeOf(val);
      return prototype === null || prototype === Object.prototype;
    }

    /**
     * Determine if a value is a Date
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Date, otherwise false
     */
    function isDate(val) {
      return toString.call(val) === '[object Date]';
    }

    /**
     * Determine if a value is a File
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a File, otherwise false
     */
    function isFile(val) {
      return toString.call(val) === '[object File]';
    }

    /**
     * Determine if a value is a Blob
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Blob, otherwise false
     */
    function isBlob$1(val) {
      return toString.call(val) === '[object Blob]';
    }

    /**
     * Determine if a value is a Function
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Function, otherwise false
     */
    function isFunction(val) {
      return toString.call(val) === '[object Function]';
    }

    /**
     * Determine if a value is a Stream
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Stream, otherwise false
     */
    function isStream(val) {
      return isObject$1(val) && isFunction(val.pipe);
    }

    /**
     * Determine if a value is a URLSearchParams object
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a URLSearchParams object, otherwise false
     */
    function isURLSearchParams$1(val) {
      return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
    }

    /**
     * Trim excess whitespace off the beginning and end of a string
     *
     * @param {String} str The String to trim
     * @returns {String} The String freed of excess whitespace
     */
    function trim(str) {
      return str.replace(/^\s*/, '').replace(/\s*$/, '');
    }

    /**
     * Determine if we're running in a standard browser environment
     *
     * This allows axios to run in a web worker, and react-native.
     * Both environments support XMLHttpRequest, but not fully standard globals.
     *
     * web workers:
     *  typeof window -> undefined
     *  typeof document -> undefined
     *
     * react-native:
     *  navigator.product -> 'ReactNative'
     * nativescript
     *  navigator.product -> 'NativeScript' or 'NS'
     */
    function isStandardBrowserEnv() {
      if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                               navigator.product === 'NativeScript' ||
                                               navigator.product === 'NS')) {
        return false;
      }
      return (
        typeof window !== 'undefined' &&
        typeof document !== 'undefined'
      );
    }

    /**
     * Iterate over an Array or an Object invoking a function for each item.
     *
     * If `obj` is an Array callback will be called passing
     * the value, index, and complete array for each item.
     *
     * If 'obj' is an Object callback will be called passing
     * the value, key, and complete object for each property.
     *
     * @param {Object|Array} obj The object to iterate
     * @param {Function} fn The callback to invoke for each item
     */
    function forEach(obj, fn) {
      // Don't bother if no value provided
      if (obj === null || typeof obj === 'undefined') {
        return;
      }

      // Force an array if not already something iterable
      if (typeof obj !== 'object') {
        /*eslint no-param-reassign:0*/
        obj = [obj];
      }

      if (isArray(obj)) {
        // Iterate over array values
        for (var i = 0, l = obj.length; i < l; i++) {
          fn.call(null, obj[i], i, obj);
        }
      } else {
        // Iterate over object keys
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            fn.call(null, obj[key], key, obj);
          }
        }
      }
    }

    /**
     * Accepts varargs expecting each argument to be an object, then
     * immutably merges the properties of each object and returns result.
     *
     * When multiple objects contain the same key the later object in
     * the arguments list will take precedence.
     *
     * Example:
     *
     * ```js
     * var result = merge({foo: 123}, {foo: 456});
     * console.log(result.foo); // outputs 456
     * ```
     *
     * @param {Object} obj1 Object to merge
     * @returns {Object} Result of all merge properties
     */
    function merge$1(/* obj1, obj2, obj3, ... */) {
      var result = {};
      function assignValue(val, key) {
        if (isPlainObject$1(result[key]) && isPlainObject$1(val)) {
          result[key] = merge$1(result[key], val);
        } else if (isPlainObject$1(val)) {
          result[key] = merge$1({}, val);
        } else if (isArray(val)) {
          result[key] = val.slice();
        } else {
          result[key] = val;
        }
      }

      for (var i = 0, l = arguments.length; i < l; i++) {
        forEach(arguments[i], assignValue);
      }
      return result;
    }

    /**
     * Extends object a by mutably adding to it the properties of object b.
     *
     * @param {Object} a The object to be extended
     * @param {Object} b The object to copy properties from
     * @param {Object} thisArg The object to bind function to
     * @return {Object} The resulting value of object a
     */
    function extend(a, b, thisArg) {
      forEach(b, function assignValue(val, key) {
        if (thisArg && typeof val === 'function') {
          a[key] = bind$1(val, thisArg);
        } else {
          a[key] = val;
        }
      });
      return a;
    }

    /**
     * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
     *
     * @param {string} content with BOM
     * @return {string} content value without BOM
     */
    function stripBOM(content) {
      if (content.charCodeAt(0) === 0xFEFF) {
        content = content.slice(1);
      }
      return content;
    }

    var utils$3 = {
      isArray: isArray,
      isArrayBuffer: isArrayBuffer,
      isBuffer: isBuffer,
      isFormData: isFormData,
      isArrayBufferView: isArrayBufferView,
      isString: isString,
      isNumber: isNumber,
      isObject: isObject$1,
      isPlainObject: isPlainObject$1,
      isUndefined: isUndefined,
      isDate: isDate,
      isFile: isFile,
      isBlob: isBlob$1,
      isFunction: isFunction,
      isStream: isStream,
      isURLSearchParams: isURLSearchParams$1,
      isStandardBrowserEnv: isStandardBrowserEnv,
      forEach: forEach,
      merge: merge$1,
      extend: extend,
      trim: trim,
      stripBOM: stripBOM
    };

    function encode(val) {
      return encodeURIComponent(val).
        replace(/%3A/gi, ':').
        replace(/%24/g, '$').
        replace(/%2C/gi, ',').
        replace(/%20/g, '+').
        replace(/%5B/gi, '[').
        replace(/%5D/gi, ']');
    }

    /**
     * Build a URL by appending params to the end
     *
     * @param {string} url The base of the url (e.g., http://www.google.com)
     * @param {object} [params] The params to be appended
     * @returns {string} The formatted url
     */
    var buildURL = function buildURL(url, params, paramsSerializer) {
      /*eslint no-param-reassign:0*/
      if (!params) {
        return url;
      }

      var serializedParams;
      if (paramsSerializer) {
        serializedParams = paramsSerializer(params);
      } else if (utils$3.isURLSearchParams(params)) {
        serializedParams = params.toString();
      } else {
        var parts = [];

        utils$3.forEach(params, function serialize(val, key) {
          if (val === null || typeof val === 'undefined') {
            return;
          }

          if (utils$3.isArray(val)) {
            key = key + '[]';
          } else {
            val = [val];
          }

          utils$3.forEach(val, function parseValue(v) {
            if (utils$3.isDate(v)) {
              v = v.toISOString();
            } else if (utils$3.isObject(v)) {
              v = JSON.stringify(v);
            }
            parts.push(encode(key) + '=' + encode(v));
          });
        });

        serializedParams = parts.join('&');
      }

      if (serializedParams) {
        var hashmarkIndex = url.indexOf('#');
        if (hashmarkIndex !== -1) {
          url = url.slice(0, hashmarkIndex);
        }

        url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
      }

      return url;
    };

    function InterceptorManager() {
      this.handlers = [];
    }

    /**
     * Add a new interceptor to the stack
     *
     * @param {Function} fulfilled The function to handle `then` for a `Promise`
     * @param {Function} rejected The function to handle `reject` for a `Promise`
     *
     * @return {Number} An ID used to remove interceptor later
     */
    InterceptorManager.prototype.use = function use(fulfilled, rejected) {
      this.handlers.push({
        fulfilled: fulfilled,
        rejected: rejected
      });
      return this.handlers.length - 1;
    };

    /**
     * Remove an interceptor from the stack
     *
     * @param {Number} id The ID that was returned by `use`
     */
    InterceptorManager.prototype.eject = function eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    };

    /**
     * Iterate over all the registered interceptors
     *
     * This method is particularly useful for skipping over any
     * interceptors that may have become `null` calling `eject`.
     *
     * @param {Function} fn The function to call for each interceptor
     */
    InterceptorManager.prototype.forEach = function forEach(fn) {
      utils$3.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
          fn(h);
        }
      });
    };

    var InterceptorManager_1 = InterceptorManager;

    /**
     * Transform the data for a request or a response
     *
     * @param {Object|String} data The data to be transformed
     * @param {Array} headers The headers for the request or response
     * @param {Array|Function} fns A single function or Array of functions
     * @returns {*} The resulting transformed data
     */
    var transformData = function transformData(data, headers, fns) {
      /*eslint no-param-reassign:0*/
      utils$3.forEach(fns, function transform(fn) {
        data = fn(data, headers);
      });

      return data;
    };

    var isCancel = function isCancel(value) {
      return !!(value && value.__CANCEL__);
    };

    var normalizeHeaderName = function normalizeHeaderName(headers, normalizedName) {
      utils$3.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
          headers[normalizedName] = value;
          delete headers[name];
        }
      });
    };

    /**
     * Update an Error with the specified config, error code, and response.
     *
     * @param {Error} error The error to update.
     * @param {Object} config The config.
     * @param {string} [code] The error code (for example, 'ECONNABORTED').
     * @param {Object} [request] The request.
     * @param {Object} [response] The response.
     * @returns {Error} The error.
     */
    var enhanceError = function enhanceError(error, config, code, request, response) {
      error.config = config;
      if (code) {
        error.code = code;
      }

      error.request = request;
      error.response = response;
      error.isAxiosError = true;

      error.toJSON = function toJSON() {
        return {
          // Standard
          message: this.message,
          name: this.name,
          // Microsoft
          description: this.description,
          number: this.number,
          // Mozilla
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          // Axios
          config: this.config,
          code: this.code
        };
      };
      return error;
    };

    /**
     * Create an Error with the specified message, config, error code, request and response.
     *
     * @param {string} message The error message.
     * @param {Object} config The config.
     * @param {string} [code] The error code (for example, 'ECONNABORTED').
     * @param {Object} [request] The request.
     * @param {Object} [response] The response.
     * @returns {Error} The created error.
     */
    var createError = function createError(message, config, code, request, response) {
      var error = new Error(message);
      return enhanceError(error, config, code, request, response);
    };

    /**
     * Resolve or reject a Promise based on response status.
     *
     * @param {Function} resolve A function that resolves the promise.
     * @param {Function} reject A function that rejects the promise.
     * @param {object} response The response.
     */
    var settle = function settle(resolve, reject, response) {
      var validateStatus = response.config.validateStatus;
      if (!response.status || !validateStatus || validateStatus(response.status)) {
        resolve(response);
      } else {
        reject(createError(
          'Request failed with status code ' + response.status,
          response.config,
          null,
          response.request,
          response
        ));
      }
    };

    var cookies = (
      utils$3.isStandardBrowserEnv() ?

      // Standard browser envs support document.cookie
        (function standardBrowserEnv() {
          return {
            write: function write(name, value, expires, path, domain, secure) {
              var cookie = [];
              cookie.push(name + '=' + encodeURIComponent(value));

              if (utils$3.isNumber(expires)) {
                cookie.push('expires=' + new Date(expires).toGMTString());
              }

              if (utils$3.isString(path)) {
                cookie.push('path=' + path);
              }

              if (utils$3.isString(domain)) {
                cookie.push('domain=' + domain);
              }

              if (secure === true) {
                cookie.push('secure');
              }

              document.cookie = cookie.join('; ');
            },

            read: function read(name) {
              var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
              return (match ? decodeURIComponent(match[3]) : null);
            },

            remove: function remove(name) {
              this.write(name, '', Date.now() - 86400000);
            }
          };
        })() :

      // Non standard browser env (web workers, react-native) lack needed support.
        (function nonStandardBrowserEnv() {
          return {
            write: function write() {},
            read: function read() { return null; },
            remove: function remove() {}
          };
        })()
    );

    /**
     * Determines whether the specified URL is absolute
     *
     * @param {string} url The URL to test
     * @returns {boolean} True if the specified URL is absolute, otherwise false
     */
    var isAbsoluteURL = function isAbsoluteURL(url) {
      // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
      // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
      // by any combination of letters, digits, plus, period, or hyphen.
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
    };

    /**
     * Creates a new URL by combining the specified URLs
     *
     * @param {string} baseURL The base URL
     * @param {string} relativeURL The relative URL
     * @returns {string} The combined URL
     */
    var combineURLs = function combineURLs(baseURL, relativeURL) {
      return relativeURL
        ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
        : baseURL;
    };

    /**
     * Creates a new URL by combining the baseURL with the requestedURL,
     * only when the requestedURL is not already an absolute URL.
     * If the requestURL is absolute, this function returns the requestedURL untouched.
     *
     * @param {string} baseURL The base URL
     * @param {string} requestedURL Absolute or relative URL to combine
     * @returns {string} The combined full path
     */
    var buildFullPath = function buildFullPath(baseURL, requestedURL) {
      if (baseURL && !isAbsoluteURL(requestedURL)) {
        return combineURLs(baseURL, requestedURL);
      }
      return requestedURL;
    };

    // Headers whose duplicates are ignored by node
    // c.f. https://nodejs.org/api/http.html#http_message_headers
    var ignoreDuplicateOf = [
      'age', 'authorization', 'content-length', 'content-type', 'etag',
      'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
      'last-modified', 'location', 'max-forwards', 'proxy-authorization',
      'referer', 'retry-after', 'user-agent'
    ];

    /**
     * Parse headers into an object
     *
     * ```
     * Date: Wed, 27 Aug 2014 08:58:49 GMT
     * Content-Type: application/json
     * Connection: keep-alive
     * Transfer-Encoding: chunked
     * ```
     *
     * @param {String} headers Headers needing to be parsed
     * @returns {Object} Headers parsed into an object
     */
    var parseHeaders = function parseHeaders(headers) {
      var parsed = {};
      var key;
      var val;
      var i;

      if (!headers) { return parsed; }

      utils$3.forEach(headers.split('\n'), function parser(line) {
        i = line.indexOf(':');
        key = utils$3.trim(line.substr(0, i)).toLowerCase();
        val = utils$3.trim(line.substr(i + 1));

        if (key) {
          if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
            return;
          }
          if (key === 'set-cookie') {
            parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
          } else {
            parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
          }
        }
      });

      return parsed;
    };

    var isURLSameOrigin = (
      utils$3.isStandardBrowserEnv() ?

      // Standard browser envs have full support of the APIs needed to test
      // whether the request URL is of the same origin as current location.
        (function standardBrowserEnv() {
          var msie = /(msie|trident)/i.test(navigator.userAgent);
          var urlParsingNode = document.createElement('a');
          var originURL;

          /**
        * Parse a URL to discover it's components
        *
        * @param {String} url The URL to be parsed
        * @returns {Object}
        */
          function resolveURL(url) {
            var href = url;

            if (msie) {
            // IE needs attribute set twice to normalize properties
              urlParsingNode.setAttribute('href', href);
              href = urlParsingNode.href;
            }

            urlParsingNode.setAttribute('href', href);

            // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
            return {
              href: urlParsingNode.href,
              protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
              host: urlParsingNode.host,
              search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
              hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
              hostname: urlParsingNode.hostname,
              port: urlParsingNode.port,
              pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                urlParsingNode.pathname :
                '/' + urlParsingNode.pathname
            };
          }

          originURL = resolveURL(window.location.href);

          /**
        * Determine if a URL shares the same origin as the current location
        *
        * @param {String} requestURL The URL to test
        * @returns {boolean} True if URL shares the same origin, otherwise false
        */
          return function isURLSameOrigin(requestURL) {
            var parsed = (utils$3.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
            return (parsed.protocol === originURL.protocol &&
                parsed.host === originURL.host);
          };
        })() :

      // Non standard browser envs (web workers, react-native) lack needed support.
        (function nonStandardBrowserEnv() {
          return function isURLSameOrigin() {
            return true;
          };
        })()
    );

    var xhr = function xhrAdapter(config) {
      return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config.data;
        var requestHeaders = config.headers;

        if (utils$3.isFormData(requestData)) {
          delete requestHeaders['Content-Type']; // Let the browser set it
        }

        var request = new XMLHttpRequest();

        // HTTP basic authentication
        if (config.auth) {
          var username = config.auth.username || '';
          var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
          requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
        }

        var fullPath = buildFullPath(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

        // Set the request timeout in MS
        request.timeout = config.timeout;

        // Listen for ready state
        request.onreadystatechange = function handleLoad() {
          if (!request || request.readyState !== 4) {
            return;
          }

          // The request errored out and we didn't get a response, this will be
          // handled by onerror instead
          // With one exception: request that using file: protocol, most browsers
          // will return status as 0 even though it's a successful request
          if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
            return;
          }

          // Prepare the response
          var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
          var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
          var response = {
            data: responseData,
            status: request.status,
            statusText: request.statusText,
            headers: responseHeaders,
            config: config,
            request: request
          };

          settle(resolve, reject, response);

          // Clean up request
          request = null;
        };

        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
          if (!request) {
            return;
          }

          reject(createError('Request aborted', config, 'ECONNABORTED', request));

          // Clean up request
          request = null;
        };

        // Handle low level network errors
        request.onerror = function handleError() {
          // Real errors are hidden from us by the browser
          // onerror should only fire if it's a network error
          reject(createError('Network Error', config, null, request));

          // Clean up request
          request = null;
        };

        // Handle timeout
        request.ontimeout = function handleTimeout() {
          var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
          if (config.timeoutErrorMessage) {
            timeoutErrorMessage = config.timeoutErrorMessage;
          }
          reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
            request));

          // Clean up request
          request = null;
        };

        // Add xsrf header
        // This is only done if running in a standard browser environment.
        // Specifically not if we're in a web worker, or react-native.
        if (utils$3.isStandardBrowserEnv()) {
          // Add xsrf header
          var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
            cookies.read(config.xsrfCookieName) :
            undefined;

          if (xsrfValue) {
            requestHeaders[config.xsrfHeaderName] = xsrfValue;
          }
        }

        // Add headers to the request
        if ('setRequestHeader' in request) {
          utils$3.forEach(requestHeaders, function setRequestHeader(val, key) {
            if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
              // Remove Content-Type if data is undefined
              delete requestHeaders[key];
            } else {
              // Otherwise add header to the request
              request.setRequestHeader(key, val);
            }
          });
        }

        // Add withCredentials to request if needed
        if (!utils$3.isUndefined(config.withCredentials)) {
          request.withCredentials = !!config.withCredentials;
        }

        // Add responseType to request if needed
        if (config.responseType) {
          try {
            request.responseType = config.responseType;
          } catch (e) {
            // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
            // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
            if (config.responseType !== 'json') {
              throw e;
            }
          }
        }

        // Handle progress if needed
        if (typeof config.onDownloadProgress === 'function') {
          request.addEventListener('progress', config.onDownloadProgress);
        }

        // Not all browsers support upload events
        if (typeof config.onUploadProgress === 'function' && request.upload) {
          request.upload.addEventListener('progress', config.onUploadProgress);
        }

        if (config.cancelToken) {
          // Handle cancellation
          config.cancelToken.promise.then(function onCanceled(cancel) {
            if (!request) {
              return;
            }

            request.abort();
            reject(cancel);
            // Clean up request
            request = null;
          });
        }

        if (!requestData) {
          requestData = null;
        }

        // Send the request
        request.send(requestData);
      });
    };

    /**
     * Helpers.
     */

    var s = 1000;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var y = d * 365.25;

    /**
     * Parse or format the given `val`.
     *
     * Options:
     *
     *  - `long` verbose formatting [false]
     *
     * @param {String|Number} val
     * @param {Object} [options]
     * @throws {Error} throw an error if val is not a non-empty string or a number
     * @return {String|Number}
     * @api public
     */

    var ms = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === 'string' && val.length > 0) {
        return parse$1(val);
      } else if (type === 'number' && isNaN(val) === false) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        'val is not a non-empty string or a valid number. val=' +
          JSON.stringify(val)
      );
    };

    /**
     * Parse the given `str` and return milliseconds.
     *
     * @param {String} str
     * @return {Number}
     * @api private
     */

    function parse$1(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || 'ms').toLowerCase();
      switch (type) {
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
          return n * y;
        case 'days':
        case 'day':
        case 'd':
          return n * d;
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
          return n * h;
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
          return n * m;
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
          return n * s;
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
          return n;
        default:
          return undefined;
      }
    }

    /**
     * Short format for `ms`.
     *
     * @param {Number} ms
     * @return {String}
     * @api private
     */

    function fmtShort(ms) {
      if (ms >= d) {
        return Math.round(ms / d) + 'd';
      }
      if (ms >= h) {
        return Math.round(ms / h) + 'h';
      }
      if (ms >= m) {
        return Math.round(ms / m) + 'm';
      }
      if (ms >= s) {
        return Math.round(ms / s) + 's';
      }
      return ms + 'ms';
    }

    /**
     * Long format for `ms`.
     *
     * @param {Number} ms
     * @return {String}
     * @api private
     */

    function fmtLong(ms) {
      return plural(ms, d, 'day') ||
        plural(ms, h, 'hour') ||
        plural(ms, m, 'minute') ||
        plural(ms, s, 'second') ||
        ms + ' ms';
    }

    /**
     * Pluralization helper.
     */

    function plural(ms, n, name) {
      if (ms < n) {
        return;
      }
      if (ms < n * 1.5) {
        return Math.floor(ms / n) + ' ' + name;
      }
      return Math.ceil(ms / n) + ' ' + name + 's';
    }

    var debug$1 = createCommonjsModule(function (module, exports) {
    /**
     * This is the common logic for both the Node.js and web browser
     * implementations of `debug()`.
     *
     * Expose `debug()` as the module.
     */

    exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
    exports.coerce = coerce;
    exports.disable = disable;
    exports.enable = enable;
    exports.enabled = enabled;
    exports.humanize = ms;

    /**
     * The currently active debug mode names, and names to skip.
     */

    exports.names = [];
    exports.skips = [];

    /**
     * Map of special "%n" handling functions, for the debug "format" argument.
     *
     * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
     */

    exports.formatters = {};

    /**
     * Previous log timestamp.
     */

    var prevTime;

    /**
     * Select a color.
     * @param {String} namespace
     * @return {Number}
     * @api private
     */

    function selectColor(namespace) {
      var hash = 0, i;

      for (i in namespace) {
        hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
      }

      return exports.colors[Math.abs(hash) % exports.colors.length];
    }

    /**
     * Create a debugger with the given `namespace`.
     *
     * @param {String} namespace
     * @return {Function}
     * @api public
     */

    function createDebug(namespace) {

      function debug() {
        // disabled?
        if (!debug.enabled) return;

        var self = debug;

        // set `diff` timestamp
        var curr = +new Date();
        var ms = curr - (prevTime || curr);
        self.diff = ms;
        self.prev = prevTime;
        self.curr = curr;
        prevTime = curr;

        // turn the `arguments` into a proper Array
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }

        args[0] = exports.coerce(args[0]);

        if ('string' !== typeof args[0]) {
          // anything else let's inspect with %O
          args.unshift('%O');
        }

        // apply any `formatters` transformations
        var index = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
          // if we encounter an escaped % then don't increase the array index
          if (match === '%%') return match;
          index++;
          var formatter = exports.formatters[format];
          if ('function' === typeof formatter) {
            var val = args[index];
            match = formatter.call(self, val);

            // now we need to remove `args[index]` since it's inlined in the `format`
            args.splice(index, 1);
            index--;
          }
          return match;
        });

        // apply env-specific formatting (colors, etc.)
        exports.formatArgs.call(self, args);

        var logFn = debug.log || exports.log || console.log.bind(console);
        logFn.apply(self, args);
      }

      debug.namespace = namespace;
      debug.enabled = exports.enabled(namespace);
      debug.useColors = exports.useColors();
      debug.color = selectColor(namespace);

      // env-specific initialization logic for debug instances
      if ('function' === typeof exports.init) {
        exports.init(debug);
      }

      return debug;
    }

    /**
     * Enables a debug mode by namespaces. This can include modes
     * separated by a colon and wildcards.
     *
     * @param {String} namespaces
     * @api public
     */

    function enable(namespaces) {
      exports.save(namespaces);

      exports.names = [];
      exports.skips = [];

      var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
      var len = split.length;

      for (var i = 0; i < len; i++) {
        if (!split[i]) continue; // ignore empty strings
        namespaces = split[i].replace(/\*/g, '.*?');
        if (namespaces[0] === '-') {
          exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
        } else {
          exports.names.push(new RegExp('^' + namespaces + '$'));
        }
      }
    }

    /**
     * Disable debug output.
     *
     * @api public
     */

    function disable() {
      exports.enable('');
    }

    /**
     * Returns true if the given mode name is enabled, false otherwise.
     *
     * @param {String} name
     * @return {Boolean}
     * @api public
     */

    function enabled(name) {
      var i, len;
      for (i = 0, len = exports.skips.length; i < len; i++) {
        if (exports.skips[i].test(name)) {
          return false;
        }
      }
      for (i = 0, len = exports.names.length; i < len; i++) {
        if (exports.names[i].test(name)) {
          return true;
        }
      }
      return false;
    }

    /**
     * Coerce `val`.
     *
     * @param {Mixed} val
     * @return {Mixed}
     * @api private
     */

    function coerce(val) {
      if (val instanceof Error) return val.stack || val.message;
      return val;
    }
    });
    var debug_1$1 = debug$1.coerce;
    var debug_2 = debug$1.disable;
    var debug_3 = debug$1.enable;
    var debug_4 = debug$1.enabled;
    var debug_5 = debug$1.humanize;
    var debug_6 = debug$1.names;
    var debug_7 = debug$1.skips;
    var debug_8 = debug$1.formatters;

    var browser = createCommonjsModule(function (module, exports) {
    /**
     * This is the web browser implementation of `debug()`.
     *
     * Expose `debug()` as the module.
     */

    exports = module.exports = debug$1;
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = 'undefined' != typeof chrome
                   && 'undefined' != typeof chrome.storage
                      ? chrome.storage.local
                      : localstorage();

    /**
     * Colors.
     */

    exports.colors = [
      'lightseagreen',
      'forestgreen',
      'goldenrod',
      'dodgerblue',
      'darkorchid',
      'crimson'
    ];

    /**
     * Currently only WebKit-based Web Inspectors, Firefox >= v31,
     * and the Firebug extension (any Firefox version) are known
     * to support "%c" CSS customizations.
     *
     * TODO: add a `localStorage` variable to explicitly enable/disable colors
     */

    function useColors() {
      // NB: In an Electron preload script, document will be defined but not fully
      // initialized. Since we know we're in Chrome, we'll just detect this case
      // explicitly
      if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
        return true;
      }

      // is webkit? http://stackoverflow.com/a/16459606/376773
      // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
      return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
        // is firebug? http://stackoverflow.com/a/398120/376773
        (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
        // is firefox >= v31?
        // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
        (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
        // double check webkit in userAgent just in case we are in a worker
        (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
    }

    /**
     * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
     */

    exports.formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (err) {
        return '[UnexpectedJSONParseError]: ' + err.message;
      }
    };


    /**
     * Colorize log arguments if enabled.
     *
     * @api public
     */

    function formatArgs(args) {
      var useColors = this.useColors;

      args[0] = (useColors ? '%c' : '')
        + this.namespace
        + (useColors ? ' %c' : ' ')
        + args[0]
        + (useColors ? '%c ' : ' ')
        + '+' + exports.humanize(this.diff);

      if (!useColors) return;

      var c = 'color: ' + this.color;
      args.splice(1, 0, c, 'color: inherit');

      // the final "%c" is somewhat tricky, because there could be other
      // arguments passed either before or after the %c, so we need to
      // figure out the correct index to insert the CSS into
      var index = 0;
      var lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, function(match) {
        if ('%%' === match) return;
        index++;
        if ('%c' === match) {
          // we only are interested in the *last* %c
          // (the user may have provided their own)
          lastC = index;
        }
      });

      args.splice(lastC, 0, c);
    }

    /**
     * Invokes `console.log()` when available.
     * No-op when `console.log` is not a "function".
     *
     * @api public
     */

    function log() {
      // this hackery is required for IE8/9, where
      // the `console.log` function doesn't have 'apply'
      return 'object' === typeof console
        && console.log
        && Function.prototype.apply.call(console.log, console, arguments);
    }

    /**
     * Save `namespaces`.
     *
     * @param {String} namespaces
     * @api private
     */

    function save(namespaces) {
      try {
        if (null == namespaces) {
          exports.storage.removeItem('debug');
        } else {
          exports.storage.debug = namespaces;
        }
      } catch(e) {}
    }

    /**
     * Load `namespaces`.
     *
     * @return {String} returns the previously persisted debug modes
     * @api private
     */

    function load() {
      var r;
      try {
        r = exports.storage.debug;
      } catch(e) {}

      // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
      if (!r && typeof process !== 'undefined' && 'env' in process) {
        r = process.env.DEBUG;
      }

      return r;
    }

    /**
     * Enable namespaces listed in `localStorage.debug` initially.
     */

    exports.enable(load());

    /**
     * Localstorage attempts to return the localstorage.
     *
     * This is necessary because safari throws
     * when a user disables cookies/localstorage
     * and you attempt to access it.
     *
     * @return {LocalStorage}
     * @api private
     */

    function localstorage() {
      try {
        return window.localStorage;
      } catch (e) {}
    }
    });
    var browser_1 = browser.log;
    var browser_2 = browser.formatArgs;
    var browser_3 = browser.save;
    var browser_4 = browser.load;
    var browser_5 = browser.useColors;
    var browser_6 = browser.storage;
    var browser_7 = browser.colors;

    var node = createCommonjsModule(function (module, exports) {
    /**
     * Module dependencies.
     */




    /**
     * This is the Node.js implementation of `debug()`.
     *
     * Expose `debug()` as the module.
     */

    exports = module.exports = debug$1;
    exports.init = init;
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;

    /**
     * Colors.
     */

    exports.colors = [6, 2, 3, 4, 5, 1];

    /**
     * Build up the default `inspectOpts` object from the environment variables.
     *
     *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
     */

    exports.inspectOpts = Object.keys(process.env).filter(function (key) {
      return /^debug_/i.test(key);
    }).reduce(function (obj, key) {
      // camel-case
      var prop = key
        .substring(6)
        .toLowerCase()
        .replace(/_([a-z])/g, function (_, k) { return k.toUpperCase() });

      // coerce string value into JS value
      var val = process.env[key];
      if (/^(yes|on|true|enabled)$/i.test(val)) val = true;
      else if (/^(no|off|false|disabled)$/i.test(val)) val = false;
      else if (val === 'null') val = null;
      else val = Number(val);

      obj[prop] = val;
      return obj;
    }, {});

    /**
     * The file descriptor to write the `debug()` calls to.
     * Set the `DEBUG_FD` env variable to override with another value. i.e.:
     *
     *   $ DEBUG_FD=3 node script.js 3>debug.log
     */

    var fd = parseInt(process.env.DEBUG_FD, 10) || 2;

    if (1 !== fd && 2 !== fd) {
      util.deprecate(function(){}, 'except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)')();
    }

    var stream = 1 === fd ? process.stdout :
                 2 === fd ? process.stderr :
                 createWritableStdioStream(fd);

    /**
     * Is stdout a TTY? Colored output is enabled when `true`.
     */

    function useColors() {
      return 'colors' in exports.inspectOpts
        ? Boolean(exports.inspectOpts.colors)
        : tty.isatty(fd);
    }

    /**
     * Map %o to `util.inspect()`, all on a single line.
     */

    exports.formatters.o = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts)
        .split('\n').map(function(str) {
          return str.trim()
        }).join(' ');
    };

    /**
     * Map %o to `util.inspect()`, allowing multiple lines if needed.
     */

    exports.formatters.O = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts);
    };

    /**
     * Adds ANSI color escape codes if enabled.
     *
     * @api public
     */

    function formatArgs(args) {
      var name = this.namespace;
      var useColors = this.useColors;

      if (useColors) {
        var c = this.color;
        var prefix = '  \u001b[3' + c + ';1m' + name + ' ' + '\u001b[0m';

        args[0] = prefix + args[0].split('\n').join('\n' + prefix);
        args.push('\u001b[3' + c + 'm+' + exports.humanize(this.diff) + '\u001b[0m');
      } else {
        args[0] = new Date().toUTCString()
          + ' ' + name + ' ' + args[0];
      }
    }

    /**
     * Invokes `util.format()` with the specified arguments and writes to `stream`.
     */

    function log() {
      return stream.write(util.format.apply(util, arguments) + '\n');
    }

    /**
     * Save `namespaces`.
     *
     * @param {String} namespaces
     * @api private
     */

    function save(namespaces) {
      if (null == namespaces) {
        // If you set a process.env field to null or undefined, it gets cast to the
        // string 'null' or 'undefined'. Just delete instead.
        delete process.env.DEBUG;
      } else {
        process.env.DEBUG = namespaces;
      }
    }

    /**
     * Load `namespaces`.
     *
     * @return {String} returns the previously persisted debug modes
     * @api private
     */

    function load() {
      return process.env.DEBUG;
    }

    /**
     * Copied from `node/src/node.js`.
     *
     * XXX: It's lame that node doesn't expose this API out-of-the-box. It also
     * relies on the undocumented `tty_wrap.guessHandleType()` which is also lame.
     */

    function createWritableStdioStream (fd) {
      var stream;
      var tty_wrap = process.binding('tty_wrap');

      // Note stream._type is used for test-module-load-list.js

      switch (tty_wrap.guessHandleType(fd)) {
        case 'TTY':
          stream = new tty.WriteStream(fd);
          stream._type = 'tty';

          // Hack to have stream not keep the event loop alive.
          // See https://github.com/joyent/node/issues/1726
          if (stream._handle && stream._handle.unref) {
            stream._handle.unref();
          }
          break;

        case 'FILE':
          var fs$1 = fs;
          stream = new fs$1.SyncWriteStream(fd, { autoClose: false });
          stream._type = 'fs';
          break;

        case 'PIPE':
        case 'TCP':
          var net$1 = net;
          stream = new net$1.Socket({
            fd: fd,
            readable: false,
            writable: true
          });

          // FIXME Should probably have an option in net.Socket to create a
          // stream from an existing fd which is writable only. But for now
          // we'll just add this hack and set the `readable` member to false.
          // Test: ./node test/fixtures/echo.js < /etc/passwd
          stream.readable = false;
          stream.read = null;
          stream._type = 'pipe';

          // FIXME Hack to have stream not keep the event loop alive.
          // See https://github.com/joyent/node/issues/1726
          if (stream._handle && stream._handle.unref) {
            stream._handle.unref();
          }
          break;

        default:
          // Probably an error on in uv_guess_handle()
          throw new Error('Implement me. Unknown stream file type!');
      }

      // For supporting legacy API we put the FD here.
      stream.fd = fd;

      stream._isStdio = true;

      return stream;
    }

    /**
     * Init logic for `debug` instances.
     *
     * Create a new `inspectOpts` object in case `useColors` is set
     * differently for a particular `debug` instance.
     */

    function init (debug) {
      debug.inspectOpts = {};

      var keys = Object.keys(exports.inspectOpts);
      for (var i = 0; i < keys.length; i++) {
        debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
      }
    }

    /**
     * Enable namespaces listed in `process.env.DEBUG` initially.
     */

    exports.enable(load());
    });
    var node_1 = node.init;
    var node_2 = node.log;
    var node_3 = node.formatArgs;
    var node_4 = node.save;
    var node_5 = node.load;
    var node_6 = node.useColors;
    var node_7 = node.colors;
    var node_8 = node.inspectOpts;

    var src = createCommonjsModule(function (module) {
    /**
     * Detect Electron renderer process, which is node, but we should
     * treat as a browser.
     */

    if (typeof process !== 'undefined' && process.type === 'renderer') {
      module.exports = browser;
    } else {
      module.exports = node;
    }
    });

    var debug$2;
    try {
      /* eslint global-require: off */
      debug$2 = src("follow-redirects");
    }
    catch (error) {
      debug$2 = function () { /* */ };
    }
    var debug_1$2 = debug$2;

    var URL$1 = Url.URL;


    var Writable = Stream.Writable;



    // Create handlers that pass events from native requests
    var eventHandlers = Object.create(null);
    ["abort", "aborted", "connect", "error", "socket", "timeout"].forEach(function (event) {
      eventHandlers[event] = function (arg1, arg2, arg3) {
        this._redirectable.emit(event, arg1, arg2, arg3);
      };
    });

    // Error types with codes
    var RedirectionError = createErrorType(
      "ERR_FR_REDIRECTION_FAILURE",
      ""
    );
    var TooManyRedirectsError = createErrorType(
      "ERR_FR_TOO_MANY_REDIRECTS",
      "Maximum number of redirects exceeded"
    );
    var MaxBodyLengthExceededError = createErrorType(
      "ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
      "Request body larger than maxBodyLength limit"
    );
    var WriteAfterEndError = createErrorType(
      "ERR_STREAM_WRITE_AFTER_END",
      "write after end"
    );

    // An HTTP(S) request that can be redirected
    function RedirectableRequest(options, responseCallback) {
      // Initialize the request
      Writable.call(this);
      this._sanitizeOptions(options);
      this._options = options;
      this._ended = false;
      this._ending = false;
      this._redirectCount = 0;
      this._redirects = [];
      this._requestBodyLength = 0;
      this._requestBodyBuffers = [];

      // Attach a callback if passed
      if (responseCallback) {
        this.on("response", responseCallback);
      }

      // React to responses of native requests
      var self = this;
      this._onNativeResponse = function (response) {
        self._processResponse(response);
      };

      // Perform the first request
      this._performRequest();
    }
    RedirectableRequest.prototype = Object.create(Writable.prototype);

    // Writes buffered data to the current native request
    RedirectableRequest.prototype.write = function (data, encoding, callback) {
      // Writing is not allowed if end has been called
      if (this._ending) {
        throw new WriteAfterEndError();
      }

      // Validate input and shift parameters if necessary
      if (!(typeof data === "string" || typeof data === "object" && ("length" in data))) {
        throw new TypeError("data should be a string, Buffer or Uint8Array");
      }
      if (typeof encoding === "function") {
        callback = encoding;
        encoding = null;
      }

      // Ignore empty buffers, since writing them doesn't invoke the callback
      // https://github.com/nodejs/node/issues/22066
      if (data.length === 0) {
        if (callback) {
          callback();
        }
        return;
      }
      // Only write when we don't exceed the maximum body length
      if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
        this._requestBodyLength += data.length;
        this._requestBodyBuffers.push({ data: data, encoding: encoding });
        this._currentRequest.write(data, encoding, callback);
      }
      // Error when we exceed the maximum body length
      else {
        this.emit("error", new MaxBodyLengthExceededError());
        this.abort();
      }
    };

    // Ends the current native request
    RedirectableRequest.prototype.end = function (data, encoding, callback) {
      // Shift parameters if necessary
      if (typeof data === "function") {
        callback = data;
        data = encoding = null;
      }
      else if (typeof encoding === "function") {
        callback = encoding;
        encoding = null;
      }

      // Write data if needed and end
      if (!data) {
        this._ended = this._ending = true;
        this._currentRequest.end(null, null, callback);
      }
      else {
        var self = this;
        var currentRequest = this._currentRequest;
        this.write(data, encoding, function () {
          self._ended = true;
          currentRequest.end(null, null, callback);
        });
        this._ending = true;
      }
    };

    // Sets a header value on the current native request
    RedirectableRequest.prototype.setHeader = function (name, value) {
      this._options.headers[name] = value;
      this._currentRequest.setHeader(name, value);
    };

    // Clears a header value on the current native request
    RedirectableRequest.prototype.removeHeader = function (name) {
      delete this._options.headers[name];
      this._currentRequest.removeHeader(name);
    };

    // Global timeout for all underlying requests
    RedirectableRequest.prototype.setTimeout = function (msecs, callback) {
      if (callback) {
        this.once("timeout", callback);
      }

      if (this.socket) {
        startTimer(this, msecs);
      }
      else {
        var self = this;
        this._currentRequest.once("socket", function () {
          startTimer(self, msecs);
        });
      }

      this.once("response", clearTimer);
      this.once("error", clearTimer);

      return this;
    };

    function startTimer(request, msecs) {
      clearTimeout(request._timeout);
      request._timeout = setTimeout(function () {
        request.emit("timeout");
      }, msecs);
    }

    function clearTimer() {
      clearTimeout(this._timeout);
    }

    // Proxy all other public ClientRequest methods
    [
      "abort", "flushHeaders", "getHeader",
      "setNoDelay", "setSocketKeepAlive",
    ].forEach(function (method) {
      RedirectableRequest.prototype[method] = function (a, b) {
        return this._currentRequest[method](a, b);
      };
    });

    // Proxy all public ClientRequest properties
    ["aborted", "connection", "socket"].forEach(function (property) {
      Object.defineProperty(RedirectableRequest.prototype, property, {
        get: function () { return this._currentRequest[property]; },
      });
    });

    RedirectableRequest.prototype._sanitizeOptions = function (options) {
      // Ensure headers are always present
      if (!options.headers) {
        options.headers = {};
      }

      // Since http.request treats host as an alias of hostname,
      // but the url module interprets host as hostname plus port,
      // eliminate the host property to avoid confusion.
      if (options.host) {
        // Use hostname if set, because it has precedence
        if (!options.hostname) {
          options.hostname = options.host;
        }
        delete options.host;
      }

      // Complete the URL object when necessary
      if (!options.pathname && options.path) {
        var searchPos = options.path.indexOf("?");
        if (searchPos < 0) {
          options.pathname = options.path;
        }
        else {
          options.pathname = options.path.substring(0, searchPos);
          options.search = options.path.substring(searchPos);
        }
      }
    };


    // Executes the next native request (initial or redirect)
    RedirectableRequest.prototype._performRequest = function () {
      // Load the native protocol
      var protocol = this._options.protocol;
      var nativeProtocol = this._options.nativeProtocols[protocol];
      if (!nativeProtocol) {
        this.emit("error", new TypeError("Unsupported protocol " + protocol));
        return;
      }

      // If specified, use the agent corresponding to the protocol
      // (HTTP and HTTPS use different types of agents)
      if (this._options.agents) {
        var scheme = protocol.substr(0, protocol.length - 1);
        this._options.agent = this._options.agents[scheme];
      }

      // Create the native request
      var request = this._currentRequest =
            nativeProtocol.request(this._options, this._onNativeResponse);
      this._currentUrl = Url.format(this._options);

      // Set up event handlers
      request._redirectable = this;
      for (var event in eventHandlers) {
        /* istanbul ignore else */
        if (event) {
          request.on(event, eventHandlers[event]);
        }
      }

      // End a redirected request
      // (The first request must be ended explicitly with RedirectableRequest#end)
      if (this._isRedirect) {
        // Write the request entity and end.
        var i = 0;
        var self = this;
        var buffers = this._requestBodyBuffers;
        (function writeNext(error) {
          // Only write if this request has not been redirected yet
          /* istanbul ignore else */
          if (request === self._currentRequest) {
            // Report any write errors
            /* istanbul ignore if */
            if (error) {
              self.emit("error", error);
            }
            // Write the next buffer if there are still left
            else if (i < buffers.length) {
              var buffer = buffers[i++];
              /* istanbul ignore else */
              if (!request.finished) {
                request.write(buffer.data, buffer.encoding, writeNext);
              }
            }
            // End the request if `end` has been called on us
            else if (self._ended) {
              request.end();
            }
          }
        }());
      }
    };

    // Processes a response from the current native request
    RedirectableRequest.prototype._processResponse = function (response) {
      // Store the redirected response
      var statusCode = response.statusCode;
      if (this._options.trackRedirects) {
        this._redirects.push({
          url: this._currentUrl,
          headers: response.headers,
          statusCode: statusCode,
        });
      }

      // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
      // that further action needs to be taken by the user agent in order to
      // fulfill the request. If a Location header field is provided,
      // the user agent MAY automatically redirect its request to the URI
      // referenced by the Location field value,
      // even if the specific status code is not understood.
      var location = response.headers.location;
      if (location && this._options.followRedirects !== false &&
          statusCode >= 300 && statusCode < 400) {
        // Abort the current request
        this._currentRequest.removeAllListeners();
        this._currentRequest.on("error", noop);
        this._currentRequest.abort();
        // Discard the remainder of the response to avoid waiting for data
        response.destroy();

        // RFC7231§6.4: A client SHOULD detect and intervene
        // in cyclical redirections (i.e., "infinite" redirection loops).
        if (++this._redirectCount > this._options.maxRedirects) {
          this.emit("error", new TooManyRedirectsError());
          return;
        }

        // RFC7231§6.4: Automatic redirection needs to done with
        // care for methods not known to be safe, […]
        // RFC7231§6.4.2–3: For historical reasons, a user agent MAY change
        // the request method from POST to GET for the subsequent request.
        if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" ||
            // RFC7231§6.4.4: The 303 (See Other) status code indicates that
            // the server is redirecting the user agent to a different resource […]
            // A user agent can perform a retrieval request targeting that URI
            // (a GET or HEAD request if using HTTP) […]
            (statusCode === 303) && !/^(?:GET|HEAD)$/.test(this._options.method)) {
          this._options.method = "GET";
          // Drop a possible entity and headers related to it
          this._requestBodyBuffers = [];
          removeMatchingHeaders(/^content-/i, this._options.headers);
        }

        // Drop the Host header, as the redirect might lead to a different host
        var previousHostName = removeMatchingHeaders(/^host$/i, this._options.headers) ||
          Url.parse(this._currentUrl).hostname;

        // Create the redirected request
        var redirectUrl = Url.resolve(this._currentUrl, location);
        debug_1$2("redirecting to", redirectUrl);
        this._isRedirect = true;
        var redirectUrlParts = Url.parse(redirectUrl);
        Object.assign(this._options, redirectUrlParts);

        // Drop the Authorization header if redirecting to another host
        if (redirectUrlParts.hostname !== previousHostName) {
          removeMatchingHeaders(/^authorization$/i, this._options.headers);
        }

        // Evaluate the beforeRedirect callback
        if (typeof this._options.beforeRedirect === "function") {
          var responseDetails = { headers: response.headers };
          try {
            this._options.beforeRedirect.call(null, this._options, responseDetails);
          }
          catch (err) {
            this.emit("error", err);
            return;
          }
          this._sanitizeOptions(this._options);
        }

        // Perform the redirected request
        try {
          this._performRequest();
        }
        catch (cause) {
          var error = new RedirectionError("Redirected request failed: " + cause.message);
          error.cause = cause;
          this.emit("error", error);
        }
      }
      else {
        // The response is not a redirect; return it as-is
        response.responseUrl = this._currentUrl;
        response.redirects = this._redirects;
        this.emit("response", response);

        // Clean up
        this._requestBodyBuffers = [];
      }
    };

    // Wraps the key/value object of protocols with redirect functionality
    function wrap(protocols) {
      // Default settings
      var exports = {
        maxRedirects: 21,
        maxBodyLength: 10 * 1024 * 1024,
      };

      // Wrap each protocol
      var nativeProtocols = {};
      Object.keys(protocols).forEach(function (scheme) {
        var protocol = scheme + ":";
        var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
        var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);

        // Executes a request, following redirects
        wrappedProtocol.request = function (input, options, callback) {
          // Parse parameters
          if (typeof input === "string") {
            var urlStr = input;
            try {
              input = urlToOptions(new URL$1(urlStr));
            }
            catch (err) {
              /* istanbul ignore next */
              input = Url.parse(urlStr);
            }
          }
          else if (URL$1 && (input instanceof URL$1)) {
            input = urlToOptions(input);
          }
          else {
            callback = options;
            options = input;
            input = { protocol: protocol };
          }
          if (typeof options === "function") {
            callback = options;
            options = null;
          }

          // Set defaults
          options = Object.assign({
            maxRedirects: exports.maxRedirects,
            maxBodyLength: exports.maxBodyLength,
          }, input, options);
          options.nativeProtocols = nativeProtocols;

          assert.equal(options.protocol, protocol, "protocol mismatch");
          debug_1$2("options", options);
          return new RedirectableRequest(options, callback);
        };

        // Executes a GET request, following redirects
        wrappedProtocol.get = function (input, options, callback) {
          var request = wrappedProtocol.request(input, options, callback);
          request.end();
          return request;
        };
      });
      return exports;
    }

    /* istanbul ignore next */
    function noop() { /* empty */ }

    // from https://github.com/nodejs/node/blob/master/lib/internal/url.js
    function urlToOptions(urlObject) {
      var options = {
        protocol: urlObject.protocol,
        hostname: urlObject.hostname.startsWith("[") ?
          /* istanbul ignore next */
          urlObject.hostname.slice(1, -1) :
          urlObject.hostname,
        hash: urlObject.hash,
        search: urlObject.search,
        pathname: urlObject.pathname,
        path: urlObject.pathname + urlObject.search,
        href: urlObject.href,
      };
      if (urlObject.port !== "") {
        options.port = Number(urlObject.port);
      }
      return options;
    }

    function removeMatchingHeaders(regex, headers) {
      var lastValue;
      for (var header in headers) {
        if (regex.test(header)) {
          lastValue = headers[header];
          delete headers[header];
        }
      }
      return lastValue;
    }

    function createErrorType(code, defaultMessage) {
      function CustomError(message) {
        Error.captureStackTrace(this, this.constructor);
        this.message = message || defaultMessage;
      }
      CustomError.prototype = new Error();
      CustomError.prototype.constructor = CustomError;
      CustomError.prototype.name = "Error [" + code + "]";
      CustomError.prototype.code = code;
      return CustomError;
    }

    // Exports
    var followRedirects = wrap({ http: http, https: https });
    var wrap_1 = wrap;
    followRedirects.wrap = wrap_1;

    var _from = "axios@0.21.0";
    var _id = "axios@0.21.0";
    var _inBundle = false;
    var _integrity = "sha1-Jt8IiAOiNQ3/LCf5b++Z/klEKso=";
    var _location = "/axios";
    var _phantomChildren = {
    };
    var _requested = {
    	type: "version",
    	registry: true,
    	raw: "axios@0.21.0",
    	name: "axios",
    	escapedName: "axios",
    	rawSpec: "0.21.0",
    	saveSpec: null,
    	fetchSpec: "0.21.0"
    };
    var _requiredBy = [
    	"/"
    ];
    var _resolved = "https://registry.npm.taobao.org/axios/download/axios-0.21.0.tgz";
    var _shasum = "26df088803a2350dff2c27f96fef99fe49442aca";
    var _spec = "axios@0.21.0";
    var _where = "/Users/zerol/zerol/github/echoings/actions.notify";
    var author = {
    	name: "Matt Zabriskie"
    };
    var browser$1 = {
    	"./lib/adapters/http.js": "./lib/adapters/xhr.js"
    };
    var bugs = {
    	url: "https://github.com/axios/axios/issues"
    };
    var bundleDependencies = false;
    var bundlesize = [
    	{
    		path: "./dist/axios.min.js",
    		threshold: "5kB"
    	}
    ];
    var dependencies = {
    	"follow-redirects": "^1.10.0"
    };
    var deprecated = false;
    var description = "Promise based HTTP client for the browser and node.js";
    var devDependencies = {
    	bundlesize: "^0.17.0",
    	coveralls: "^3.0.0",
    	"es6-promise": "^4.2.4",
    	grunt: "^1.0.2",
    	"grunt-banner": "^0.6.0",
    	"grunt-cli": "^1.2.0",
    	"grunt-contrib-clean": "^1.1.0",
    	"grunt-contrib-watch": "^1.0.0",
    	"grunt-eslint": "^20.1.0",
    	"grunt-karma": "^2.0.0",
    	"grunt-mocha-test": "^0.13.3",
    	"grunt-ts": "^6.0.0-beta.19",
    	"grunt-webpack": "^1.0.18",
    	"istanbul-instrumenter-loader": "^1.0.0",
    	"jasmine-core": "^2.4.1",
    	karma: "^1.3.0",
    	"karma-chrome-launcher": "^2.2.0",
    	"karma-coverage": "^1.1.1",
    	"karma-firefox-launcher": "^1.1.0",
    	"karma-jasmine": "^1.1.1",
    	"karma-jasmine-ajax": "^0.1.13",
    	"karma-opera-launcher": "^1.0.0",
    	"karma-safari-launcher": "^1.0.0",
    	"karma-sauce-launcher": "^1.2.0",
    	"karma-sinon": "^1.0.5",
    	"karma-sourcemap-loader": "^0.3.7",
    	"karma-webpack": "^1.7.0",
    	"load-grunt-tasks": "^3.5.2",
    	minimist: "^1.2.0",
    	mocha: "^5.2.0",
    	sinon: "^4.5.0",
    	typescript: "^2.8.1",
    	"url-search-params": "^0.10.0",
    	webpack: "^1.13.1",
    	"webpack-dev-server": "^1.14.1"
    };
    var homepage = "https://github.com/axios/axios";
    var jsdelivr = "dist/axios.min.js";
    var keywords = [
    	"xhr",
    	"http",
    	"ajax",
    	"promise",
    	"node"
    ];
    var license = "MIT";
    var main = "index.js";
    var name = "axios";
    var repository = {
    	type: "git",
    	url: "git+https://github.com/axios/axios.git"
    };
    var scripts = {
    	build: "NODE_ENV=production grunt build",
    	coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
    	examples: "node ./examples/server.js",
    	fix: "eslint --fix lib/**/*.js",
    	postversion: "git push && git push --tags",
    	preversion: "npm test",
    	start: "node ./sandbox/server.js",
    	test: "grunt test && bundlesize",
    	version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json"
    };
    var typings = "./index.d.ts";
    var unpkg = "dist/axios.min.js";
    var version = "0.21.0";
    var _package = {
    	_from: _from,
    	_id: _id,
    	_inBundle: _inBundle,
    	_integrity: _integrity,
    	_location: _location,
    	_phantomChildren: _phantomChildren,
    	_requested: _requested,
    	_requiredBy: _requiredBy,
    	_resolved: _resolved,
    	_shasum: _shasum,
    	_spec: _spec,
    	_where: _where,
    	author: author,
    	browser: browser$1,
    	bugs: bugs,
    	bundleDependencies: bundleDependencies,
    	bundlesize: bundlesize,
    	dependencies: dependencies,
    	deprecated: deprecated,
    	description: description,
    	devDependencies: devDependencies,
    	homepage: homepage,
    	jsdelivr: jsdelivr,
    	keywords: keywords,
    	license: license,
    	main: main,
    	name: name,
    	repository: repository,
    	scripts: scripts,
    	typings: typings,
    	unpkg: unpkg,
    	version: version
    };

    var _package$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        _from: _from,
        _id: _id,
        _inBundle: _inBundle,
        _integrity: _integrity,
        _location: _location,
        _phantomChildren: _phantomChildren,
        _requested: _requested,
        _requiredBy: _requiredBy,
        _resolved: _resolved,
        _shasum: _shasum,
        _spec: _spec,
        _where: _where,
        author: author,
        browser: browser$1,
        bugs: bugs,
        bundleDependencies: bundleDependencies,
        bundlesize: bundlesize,
        dependencies: dependencies,
        deprecated: deprecated,
        description: description,
        devDependencies: devDependencies,
        homepage: homepage,
        jsdelivr: jsdelivr,
        keywords: keywords,
        license: license,
        main: main,
        name: name,
        repository: repository,
        scripts: scripts,
        typings: typings,
        unpkg: unpkg,
        version: version,
        'default': _package
    });

    var pkg = getCjsExportFromNamespace(_package$1);

    var httpFollow = followRedirects.http;
    var httpsFollow = followRedirects.https;






    var isHttps = /https:?/;

    /*eslint consistent-return:0*/
    var http_1 = function httpAdapter(config) {
      return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
        var resolve = function resolve(value) {
          resolvePromise(value);
        };
        var reject = function reject(value) {
          rejectPromise(value);
        };
        var data = config.data;
        var headers = config.headers;

        // Set User-Agent (required by some servers)
        // Only set header if it hasn't been set in config
        // See https://github.com/axios/axios/issues/69
        if (!headers['User-Agent'] && !headers['user-agent']) {
          headers['User-Agent'] = 'axios/' + pkg.version;
        }

        if (data && !utils$3.isStream(data)) {
          if (Buffer.isBuffer(data)) ; else if (utils$3.isArrayBuffer(data)) {
            data = Buffer.from(new Uint8Array(data));
          } else if (utils$3.isString(data)) {
            data = Buffer.from(data, 'utf-8');
          } else {
            return reject(createError(
              'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
              config
            ));
          }

          // Add Content-Length header if data exists
          headers['Content-Length'] = data.length;
        }

        // HTTP basic authentication
        var auth = undefined;
        if (config.auth) {
          var username = config.auth.username || '';
          var password = config.auth.password || '';
          auth = username + ':' + password;
        }

        // Parse url
        var fullPath = buildFullPath(config.baseURL, config.url);
        var parsed = Url.parse(fullPath);
        var protocol = parsed.protocol || 'http:';

        if (!auth && parsed.auth) {
          var urlAuth = parsed.auth.split(':');
          var urlUsername = urlAuth[0] || '';
          var urlPassword = urlAuth[1] || '';
          auth = urlUsername + ':' + urlPassword;
        }

        if (auth) {
          delete headers.Authorization;
        }

        var isHttpsRequest = isHttps.test(protocol);
        var agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;

        var options = {
          path: buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ''),
          method: config.method.toUpperCase(),
          headers: headers,
          agent: agent,
          agents: { http: config.httpAgent, https: config.httpsAgent },
          auth: auth
        };

        if (config.socketPath) {
          options.socketPath = config.socketPath;
        } else {
          options.hostname = parsed.hostname;
          options.port = parsed.port;
        }

        var proxy = config.proxy;
        if (!proxy && proxy !== false) {
          var proxyEnv = protocol.slice(0, -1) + '_proxy';
          var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
          if (proxyUrl) {
            var parsedProxyUrl = Url.parse(proxyUrl);
            var noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;
            var shouldProxy = true;

            if (noProxyEnv) {
              var noProxy = noProxyEnv.split(',').map(function trim(s) {
                return s.trim();
              });

              shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {
                if (!proxyElement) {
                  return false;
                }
                if (proxyElement === '*') {
                  return true;
                }
                if (proxyElement[0] === '.' &&
                    parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement) {
                  return true;
                }

                return parsed.hostname === proxyElement;
              });
            }


            if (shouldProxy) {
              proxy = {
                host: parsedProxyUrl.hostname,
                port: parsedProxyUrl.port
              };

              if (parsedProxyUrl.auth) {
                var proxyUrlAuth = parsedProxyUrl.auth.split(':');
                proxy.auth = {
                  username: proxyUrlAuth[0],
                  password: proxyUrlAuth[1]
                };
              }
            }
          }
        }

        if (proxy) {
          options.hostname = proxy.host;
          options.host = proxy.host;
          options.headers.host = parsed.hostname + (parsed.port ? ':' + parsed.port : '');
          options.port = proxy.port;
          options.path = protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path;

          // Basic proxy authorization
          if (proxy.auth) {
            var base64 = Buffer.from(proxy.auth.username + ':' + proxy.auth.password, 'utf8').toString('base64');
            options.headers['Proxy-Authorization'] = 'Basic ' + base64;
          }
        }

        var transport;
        var isHttpsProxy = isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);
        if (config.transport) {
          transport = config.transport;
        } else if (config.maxRedirects === 0) {
          transport = isHttpsProxy ? https : http;
        } else {
          if (config.maxRedirects) {
            options.maxRedirects = config.maxRedirects;
          }
          transport = isHttpsProxy ? httpsFollow : httpFollow;
        }

        if (config.maxBodyLength > -1) {
          options.maxBodyLength = config.maxBodyLength;
        }

        // Create the request
        var req = transport.request(options, function handleResponse(res) {
          if (req.aborted) return;

          // uncompress the response body transparently if required
          var stream = res;

          // return the last request in case of redirects
          var lastRequest = res.req || req;


          // if no content, is HEAD request or decompress disabled we should not decompress
          if (res.statusCode !== 204 && lastRequest.method !== 'HEAD' && config.decompress !== false) {
            switch (res.headers['content-encoding']) {
            /*eslint default-case:0*/
            case 'gzip':
            case 'compress':
            case 'deflate':
            // add the unzipper to the body stream processing pipeline
              stream = stream.pipe(zlib.createUnzip());

              // remove the content-encoding in order to not confuse downstream operations
              delete res.headers['content-encoding'];
              break;
            }
          }

          var response = {
            status: res.statusCode,
            statusText: res.statusMessage,
            headers: res.headers,
            config: config,
            request: lastRequest
          };

          if (config.responseType === 'stream') {
            response.data = stream;
            settle(resolve, reject, response);
          } else {
            var responseBuffer = [];
            stream.on('data', function handleStreamData(chunk) {
              responseBuffer.push(chunk);

              // make sure the content length is not over the maxContentLength if specified
              if (config.maxContentLength > -1 && Buffer.concat(responseBuffer).length > config.maxContentLength) {
                stream.destroy();
                reject(createError('maxContentLength size of ' + config.maxContentLength + ' exceeded',
                  config, null, lastRequest));
              }
            });

            stream.on('error', function handleStreamError(err) {
              if (req.aborted) return;
              reject(enhanceError(err, config, null, lastRequest));
            });

            stream.on('end', function handleStreamEnd() {
              var responseData = Buffer.concat(responseBuffer);
              if (config.responseType !== 'arraybuffer') {
                responseData = responseData.toString(config.responseEncoding);
                if (!config.responseEncoding || config.responseEncoding === 'utf8') {
                  responseData = utils$3.stripBOM(responseData);
                }
              }

              response.data = responseData;
              settle(resolve, reject, response);
            });
          }
        });

        // Handle errors
        req.on('error', function handleRequestError(err) {
          if (req.aborted && err.code !== 'ERR_FR_TOO_MANY_REDIRECTS') return;
          reject(enhanceError(err, config, null, req));
        });

        // Handle request timeout
        if (config.timeout) {
          // Sometime, the response will be very slow, and does not respond, the connect event will be block by event loop system.
          // And timer callback will be fired, and abort() will be invoked before connection, then get "socket hang up" and code ECONNRESET.
          // At this time, if we have a large number of request, nodejs will hang up some socket on background. and the number will up and up.
          // And then these socket which be hang up will devoring CPU little by little.
          // ClientRequest.setTimeout will be fired on the specify milliseconds, and can make sure that abort() will be fired after connect.
          req.setTimeout(config.timeout, function handleRequestTimeout() {
            req.abort();
            reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', req));
          });
        }

        if (config.cancelToken) {
          // Handle cancellation
          config.cancelToken.promise.then(function onCanceled(cancel) {
            if (req.aborted) return;

            req.abort();
            reject(cancel);
          });
        }

        // Send the request
        if (utils$3.isStream(data)) {
          data.on('error', function handleStreamError(err) {
            reject(enhanceError(err, config, null, req));
          }).pipe(req);
        } else {
          req.end(data);
        }
      });
    };

    var DEFAULT_CONTENT_TYPE = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };

    function setContentTypeIfUnset(headers, value) {
      if (!utils$3.isUndefined(headers) && utils$3.isUndefined(headers['Content-Type'])) {
        headers['Content-Type'] = value;
      }
    }

    function getDefaultAdapter() {
      var adapter;
      if (typeof XMLHttpRequest !== 'undefined') {
        // For browsers use XHR adapter
        adapter = xhr;
      } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
        // For node use HTTP adapter
        adapter = http_1;
      }
      return adapter;
    }

    var defaults = {
      adapter: getDefaultAdapter(),

      transformRequest: [function transformRequest(data, headers) {
        normalizeHeaderName(headers, 'Accept');
        normalizeHeaderName(headers, 'Content-Type');
        if (utils$3.isFormData(data) ||
          utils$3.isArrayBuffer(data) ||
          utils$3.isBuffer(data) ||
          utils$3.isStream(data) ||
          utils$3.isFile(data) ||
          utils$3.isBlob(data)
        ) {
          return data;
        }
        if (utils$3.isArrayBufferView(data)) {
          return data.buffer;
        }
        if (utils$3.isURLSearchParams(data)) {
          setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
          return data.toString();
        }
        if (utils$3.isObject(data)) {
          setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
          return JSON.stringify(data);
        }
        return data;
      }],

      transformResponse: [function transformResponse(data) {
        /*eslint no-param-reassign:0*/
        if (typeof data === 'string') {
          try {
            data = JSON.parse(data);
          } catch (e) { /* Ignore */ }
        }
        return data;
      }],

      /**
       * A timeout in milliseconds to abort a request. If set to 0 (default) a
       * timeout is not created.
       */
      timeout: 0,

      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN',

      maxContentLength: -1,
      maxBodyLength: -1,

      validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
      }
    };

    defaults.headers = {
      common: {
        'Accept': 'application/json, text/plain, */*'
      }
    };

    utils$3.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
      defaults.headers[method] = {};
    });

    utils$3.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
      defaults.headers[method] = utils$3.merge(DEFAULT_CONTENT_TYPE);
    });

    var defaults_1 = defaults;

    /**
     * Throws a `Cancel` if cancellation has been requested.
     */
    function throwIfCancellationRequested(config) {
      if (config.cancelToken) {
        config.cancelToken.throwIfRequested();
      }
    }

    /**
     * Dispatch a request to the server using the configured adapter.
     *
     * @param {object} config The config that is to be used for the request
     * @returns {Promise} The Promise to be fulfilled
     */
    var dispatchRequest = function dispatchRequest(config) {
      throwIfCancellationRequested(config);

      // Ensure headers exist
      config.headers = config.headers || {};

      // Transform request data
      config.data = transformData(
        config.data,
        config.headers,
        config.transformRequest
      );

      // Flatten headers
      config.headers = utils$3.merge(
        config.headers.common || {},
        config.headers[config.method] || {},
        config.headers
      );

      utils$3.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        function cleanHeaderConfig(method) {
          delete config.headers[method];
        }
      );

      var adapter = config.adapter || defaults_1.adapter;

      return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);

        // Transform response data
        response.data = transformData(
          response.data,
          response.headers,
          config.transformResponse
        );

        return response;
      }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
          throwIfCancellationRequested(config);

          // Transform response data
          if (reason && reason.response) {
            reason.response.data = transformData(
              reason.response.data,
              reason.response.headers,
              config.transformResponse
            );
          }
        }

        return Promise.reject(reason);
      });
    };

    /**
     * Config-specific merge-function which creates a new config-object
     * by merging two configuration objects together.
     *
     * @param {Object} config1
     * @param {Object} config2
     * @returns {Object} New object resulting from merging config2 to config1
     */
    var mergeConfig = function mergeConfig(config1, config2) {
      // eslint-disable-next-line no-param-reassign
      config2 = config2 || {};
      var config = {};

      var valueFromConfig2Keys = ['url', 'method', 'data'];
      var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
      var defaultToConfig2Keys = [
        'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
        'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
        'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
        'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
        'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
      ];
      var directMergeKeys = ['validateStatus'];

      function getMergedValue(target, source) {
        if (utils$3.isPlainObject(target) && utils$3.isPlainObject(source)) {
          return utils$3.merge(target, source);
        } else if (utils$3.isPlainObject(source)) {
          return utils$3.merge({}, source);
        } else if (utils$3.isArray(source)) {
          return source.slice();
        }
        return source;
      }

      function mergeDeepProperties(prop) {
        if (!utils$3.isUndefined(config2[prop])) {
          config[prop] = getMergedValue(config1[prop], config2[prop]);
        } else if (!utils$3.isUndefined(config1[prop])) {
          config[prop] = getMergedValue(undefined, config1[prop]);
        }
      }

      utils$3.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
        if (!utils$3.isUndefined(config2[prop])) {
          config[prop] = getMergedValue(undefined, config2[prop]);
        }
      });

      utils$3.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

      utils$3.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
        if (!utils$3.isUndefined(config2[prop])) {
          config[prop] = getMergedValue(undefined, config2[prop]);
        } else if (!utils$3.isUndefined(config1[prop])) {
          config[prop] = getMergedValue(undefined, config1[prop]);
        }
      });

      utils$3.forEach(directMergeKeys, function merge(prop) {
        if (prop in config2) {
          config[prop] = getMergedValue(config1[prop], config2[prop]);
        } else if (prop in config1) {
          config[prop] = getMergedValue(undefined, config1[prop]);
        }
      });

      var axiosKeys = valueFromConfig2Keys
        .concat(mergeDeepPropertiesKeys)
        .concat(defaultToConfig2Keys)
        .concat(directMergeKeys);

      var otherKeys = Object
        .keys(config1)
        .concat(Object.keys(config2))
        .filter(function filterAxiosKeys(key) {
          return axiosKeys.indexOf(key) === -1;
        });

      utils$3.forEach(otherKeys, mergeDeepProperties);

      return config;
    };

    /**
     * Create a new instance of Axios
     *
     * @param {Object} instanceConfig The default config for the instance
     */
    function Axios(instanceConfig) {
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager_1(),
        response: new InterceptorManager_1()
      };
    }

    /**
     * Dispatch a request
     *
     * @param {Object} config The config specific for this request (merged with this.defaults)
     */
    Axios.prototype.request = function request(config) {
      /*eslint no-param-reassign:0*/
      // Allow for axios('example/url'[, config]) a la fetch API
      if (typeof config === 'string') {
        config = arguments[1] || {};
        config.url = arguments[0];
      } else {
        config = config || {};
      }

      config = mergeConfig(this.defaults, config);

      // Set config.method
      if (config.method) {
        config.method = config.method.toLowerCase();
      } else if (this.defaults.method) {
        config.method = this.defaults.method.toLowerCase();
      } else {
        config.method = 'get';
      }

      // Hook up interceptors middleware
      var chain = [dispatchRequest, undefined];
      var promise = Promise.resolve(config);

      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        chain.unshift(interceptor.fulfilled, interceptor.rejected);
      });

      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        chain.push(interceptor.fulfilled, interceptor.rejected);
      });

      while (chain.length) {
        promise = promise.then(chain.shift(), chain.shift());
      }

      return promise;
    };

    Axios.prototype.getUri = function getUri(config) {
      config = mergeConfig(this.defaults, config);
      return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
    };

    // Provide aliases for supported request methods
    utils$3.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
      /*eslint func-names:0*/
      Axios.prototype[method] = function(url, config) {
        return this.request(mergeConfig(config || {}, {
          method: method,
          url: url,
          data: (config || {}).data
        }));
      };
    });

    utils$3.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
      /*eslint func-names:0*/
      Axios.prototype[method] = function(url, data, config) {
        return this.request(mergeConfig(config || {}, {
          method: method,
          url: url,
          data: data
        }));
      };
    });

    var Axios_1 = Axios;

    /**
     * A `Cancel` is an object that is thrown when an operation is canceled.
     *
     * @class
     * @param {string=} message The message.
     */
    function Cancel(message) {
      this.message = message;
    }

    Cancel.prototype.toString = function toString() {
      return 'Cancel' + (this.message ? ': ' + this.message : '');
    };

    Cancel.prototype.__CANCEL__ = true;

    var Cancel_1 = Cancel;

    /**
     * A `CancelToken` is an object that can be used to request cancellation of an operation.
     *
     * @class
     * @param {Function} executor The executor function.
     */
    function CancelToken(executor) {
      if (typeof executor !== 'function') {
        throw new TypeError('executor must be a function.');
      }

      var resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });

      var token = this;
      executor(function cancel(message) {
        if (token.reason) {
          // Cancellation has already been requested
          return;
        }

        token.reason = new Cancel_1(message);
        resolvePromise(token.reason);
      });
    }

    /**
     * Throws a `Cancel` if cancellation has been requested.
     */
    CancelToken.prototype.throwIfRequested = function throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    };

    /**
     * Returns an object that contains a new `CancelToken` and a function that, when called,
     * cancels the `CancelToken`.
     */
    CancelToken.source = function source() {
      var cancel;
      var token = new CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token: token,
        cancel: cancel
      };
    };

    var CancelToken_1 = CancelToken;

    /**
     * Syntactic sugar for invoking a function and expanding an array for arguments.
     *
     * Common use case would be to use `Function.prototype.apply`.
     *
     *  ```js
     *  function f(x, y, z) {}
     *  var args = [1, 2, 3];
     *  f.apply(null, args);
     *  ```
     *
     * With `spread` this example can be re-written.
     *
     *  ```js
     *  spread(function(x, y, z) {})([1, 2, 3]);
     *  ```
     *
     * @param {Function} callback
     * @returns {Function}
     */
    var spread = function spread(callback) {
      return function wrap(arr) {
        return callback.apply(null, arr);
      };
    };

    /**
     * Create an instance of Axios
     *
     * @param {Object} defaultConfig The default config for the instance
     * @return {Axios} A new instance of Axios
     */
    function createInstance(defaultConfig) {
      var context = new Axios_1(defaultConfig);
      var instance = bind$1(Axios_1.prototype.request, context);

      // Copy axios.prototype to instance
      utils$3.extend(instance, Axios_1.prototype, context);

      // Copy context to instance
      utils$3.extend(instance, context);

      return instance;
    }

    // Create the default instance to be exported
    var axios = createInstance(defaults_1);

    // Expose Axios class to allow class inheritance
    axios.Axios = Axios_1;

    // Factory for creating new instances
    axios.create = function create(instanceConfig) {
      return createInstance(mergeConfig(axios.defaults, instanceConfig));
    };

    // Expose Cancel & CancelToken
    axios.Cancel = Cancel_1;
    axios.CancelToken = CancelToken_1;
    axios.isCancel = isCancel;

    // Expose all/spread
    axios.all = function all(promises) {
      return Promise.all(promises);
    };
    axios.spread = spread;

    var axios_1 = axios;

    // Allow use of default import syntax in TypeScript
    var default_1 = axios;
    axios_1.default = default_1;

    var axios$1 = axios_1;

    var core$2 = createCommonjsModule(function (module, exports) {
    (function (root, factory) {
    	{
    		// CommonJS
    		module.exports = exports = factory();
    	}
    }(commonjsGlobal, function () {

    	/*globals window, global, require*/

    	/**
    	 * CryptoJS core components.
    	 */
    	var CryptoJS = CryptoJS || (function (Math, undefined$1) {

    	    var crypto$1;

    	    // Native crypto from window (Browser)
    	    if (typeof window !== 'undefined' && window.crypto) {
    	        crypto$1 = window.crypto;
    	    }

    	    // Native (experimental IE 11) crypto from window (Browser)
    	    if (!crypto$1 && typeof window !== 'undefined' && window.msCrypto) {
    	        crypto$1 = window.msCrypto;
    	    }

    	    // Native crypto from global (NodeJS)
    	    if (!crypto$1 && typeof commonjsGlobal !== 'undefined' && commonjsGlobal.crypto) {
    	        crypto$1 = commonjsGlobal.crypto;
    	    }

    	    // Native crypto import via require (NodeJS)
    	    if (!crypto$1 && typeof commonjsRequire === 'function') {
    	        try {
    	            crypto$1 = crypto;
    	        } catch (err) {}
    	    }

    	    /*
    	     * Cryptographically secure pseudorandom number generator
    	     *
    	     * As Math.random() is cryptographically not safe to use
    	     */
    	    var cryptoSecureRandomInt = function () {
    	        if (crypto$1) {
    	            // Use getRandomValues method (Browser)
    	            if (typeof crypto$1.getRandomValues === 'function') {
    	                try {
    	                    return crypto$1.getRandomValues(new Uint32Array(1))[0];
    	                } catch (err) {}
    	            }

    	            // Use randomBytes method (NodeJS)
    	            if (typeof crypto$1.randomBytes === 'function') {
    	                try {
    	                    return crypto$1.randomBytes(4).readInt32LE();
    	                } catch (err) {}
    	            }
    	        }

    	        throw new Error('Native crypto module could not be used to get secure random number.');
    	    };

    	    /*
    	     * Local polyfill of Object.create

    	     */
    	    var create = Object.create || (function () {
    	        function F() {}

    	        return function (obj) {
    	            var subtype;

    	            F.prototype = obj;

    	            subtype = new F();

    	            F.prototype = null;

    	            return subtype;
    	        };
    	    }());

    	    /**
    	     * CryptoJS namespace.
    	     */
    	    var C = {};

    	    /**
    	     * Library namespace.
    	     */
    	    var C_lib = C.lib = {};

    	    /**
    	     * Base object for prototypal inheritance.
    	     */
    	    var Base = C_lib.Base = (function () {


    	        return {
    	            /**
    	             * Creates a new object that inherits from this object.
    	             *
    	             * @param {Object} overrides Properties to copy into the new object.
    	             *
    	             * @return {Object} The new object.
    	             *
    	             * @static
    	             *
    	             * @example
    	             *
    	             *     var MyType = CryptoJS.lib.Base.extend({
    	             *         field: 'value',
    	             *
    	             *         method: function () {
    	             *         }
    	             *     });
    	             */
    	            extend: function (overrides) {
    	                // Spawn
    	                var subtype = create(this);

    	                // Augment
    	                if (overrides) {
    	                    subtype.mixIn(overrides);
    	                }

    	                // Create default initializer
    	                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
    	                    subtype.init = function () {
    	                        subtype.$super.init.apply(this, arguments);
    	                    };
    	                }

    	                // Initializer's prototype is the subtype object
    	                subtype.init.prototype = subtype;

    	                // Reference supertype
    	                subtype.$super = this;

    	                return subtype;
    	            },

    	            /**
    	             * Extends this object and runs the init method.
    	             * Arguments to create() will be passed to init().
    	             *
    	             * @return {Object} The new object.
    	             *
    	             * @static
    	             *
    	             * @example
    	             *
    	             *     var instance = MyType.create();
    	             */
    	            create: function () {
    	                var instance = this.extend();
    	                instance.init.apply(instance, arguments);

    	                return instance;
    	            },

    	            /**
    	             * Initializes a newly created object.
    	             * Override this method to add some logic when your objects are created.
    	             *
    	             * @example
    	             *
    	             *     var MyType = CryptoJS.lib.Base.extend({
    	             *         init: function () {
    	             *             // ...
    	             *         }
    	             *     });
    	             */
    	            init: function () {
    	            },

    	            /**
    	             * Copies properties into this object.
    	             *
    	             * @param {Object} properties The properties to mix in.
    	             *
    	             * @example
    	             *
    	             *     MyType.mixIn({
    	             *         field: 'value'
    	             *     });
    	             */
    	            mixIn: function (properties) {
    	                for (var propertyName in properties) {
    	                    if (properties.hasOwnProperty(propertyName)) {
    	                        this[propertyName] = properties[propertyName];
    	                    }
    	                }

    	                // IE won't copy toString using the loop above
    	                if (properties.hasOwnProperty('toString')) {
    	                    this.toString = properties.toString;
    	                }
    	            },

    	            /**
    	             * Creates a copy of this object.
    	             *
    	             * @return {Object} The clone.
    	             *
    	             * @example
    	             *
    	             *     var clone = instance.clone();
    	             */
    	            clone: function () {
    	                return this.init.prototype.extend(this);
    	            }
    	        };
    	    }());

    	    /**
    	     * An array of 32-bit words.
    	     *
    	     * @property {Array} words The array of 32-bit words.
    	     * @property {number} sigBytes The number of significant bytes in this word array.
    	     */
    	    var WordArray = C_lib.WordArray = Base.extend({
    	        /**
    	         * Initializes a newly created word array.
    	         *
    	         * @param {Array} words (Optional) An array of 32-bit words.
    	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
    	         *
    	         * @example
    	         *
    	         *     var wordArray = CryptoJS.lib.WordArray.create();
    	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
    	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
    	         */
    	        init: function (words, sigBytes) {
    	            words = this.words = words || [];

    	            if (sigBytes != undefined$1) {
    	                this.sigBytes = sigBytes;
    	            } else {
    	                this.sigBytes = words.length * 4;
    	            }
    	        },

    	        /**
    	         * Converts this word array to a string.
    	         *
    	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
    	         *
    	         * @return {string} The stringified word array.
    	         *
    	         * @example
    	         *
    	         *     var string = wordArray + '';
    	         *     var string = wordArray.toString();
    	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
    	         */
    	        toString: function (encoder) {
    	            return (encoder || Hex).stringify(this);
    	        },

    	        /**
    	         * Concatenates a word array to this word array.
    	         *
    	         * @param {WordArray} wordArray The word array to append.
    	         *
    	         * @return {WordArray} This word array.
    	         *
    	         * @example
    	         *
    	         *     wordArray1.concat(wordArray2);
    	         */
    	        concat: function (wordArray) {
    	            // Shortcuts
    	            var thisWords = this.words;
    	            var thatWords = wordArray.words;
    	            var thisSigBytes = this.sigBytes;
    	            var thatSigBytes = wordArray.sigBytes;

    	            // Clamp excess bits
    	            this.clamp();

    	            // Concat
    	            if (thisSigBytes % 4) {
    	                // Copy one byte at a time
    	                for (var i = 0; i < thatSigBytes; i++) {
    	                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
    	                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
    	                }
    	            } else {
    	                // Copy one word at a time
    	                for (var i = 0; i < thatSigBytes; i += 4) {
    	                    thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
    	                }
    	            }
    	            this.sigBytes += thatSigBytes;

    	            // Chainable
    	            return this;
    	        },

    	        /**
    	         * Removes insignificant bits.
    	         *
    	         * @example
    	         *
    	         *     wordArray.clamp();
    	         */
    	        clamp: function () {
    	            // Shortcuts
    	            var words = this.words;
    	            var sigBytes = this.sigBytes;

    	            // Clamp
    	            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
    	            words.length = Math.ceil(sigBytes / 4);
    	        },

    	        /**
    	         * Creates a copy of this word array.
    	         *
    	         * @return {WordArray} The clone.
    	         *
    	         * @example
    	         *
    	         *     var clone = wordArray.clone();
    	         */
    	        clone: function () {
    	            var clone = Base.clone.call(this);
    	            clone.words = this.words.slice(0);

    	            return clone;
    	        },

    	        /**
    	         * Creates a word array filled with random bytes.
    	         *
    	         * @param {number} nBytes The number of random bytes to generate.
    	         *
    	         * @return {WordArray} The random word array.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
    	         */
    	        random: function (nBytes) {
    	            var words = [];

    	            for (var i = 0; i < nBytes; i += 4) {
    	                words.push(cryptoSecureRandomInt());
    	            }

    	            return new WordArray.init(words, nBytes);
    	        }
    	    });

    	    /**
    	     * Encoder namespace.
    	     */
    	    var C_enc = C.enc = {};

    	    /**
    	     * Hex encoding strategy.
    	     */
    	    var Hex = C_enc.Hex = {
    	        /**
    	         * Converts a word array to a hex string.
    	         *
    	         * @param {WordArray} wordArray The word array.
    	         *
    	         * @return {string} The hex string.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
    	         */
    	        stringify: function (wordArray) {
    	            // Shortcuts
    	            var words = wordArray.words;
    	            var sigBytes = wordArray.sigBytes;

    	            // Convert
    	            var hexChars = [];
    	            for (var i = 0; i < sigBytes; i++) {
    	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
    	                hexChars.push((bite >>> 4).toString(16));
    	                hexChars.push((bite & 0x0f).toString(16));
    	            }

    	            return hexChars.join('');
    	        },

    	        /**
    	         * Converts a hex string to a word array.
    	         *
    	         * @param {string} hexStr The hex string.
    	         *
    	         * @return {WordArray} The word array.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
    	         */
    	        parse: function (hexStr) {
    	            // Shortcut
    	            var hexStrLength = hexStr.length;

    	            // Convert
    	            var words = [];
    	            for (var i = 0; i < hexStrLength; i += 2) {
    	                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
    	            }

    	            return new WordArray.init(words, hexStrLength / 2);
    	        }
    	    };

    	    /**
    	     * Latin1 encoding strategy.
    	     */
    	    var Latin1 = C_enc.Latin1 = {
    	        /**
    	         * Converts a word array to a Latin1 string.
    	         *
    	         * @param {WordArray} wordArray The word array.
    	         *
    	         * @return {string} The Latin1 string.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
    	         */
    	        stringify: function (wordArray) {
    	            // Shortcuts
    	            var words = wordArray.words;
    	            var sigBytes = wordArray.sigBytes;

    	            // Convert
    	            var latin1Chars = [];
    	            for (var i = 0; i < sigBytes; i++) {
    	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
    	                latin1Chars.push(String.fromCharCode(bite));
    	            }

    	            return latin1Chars.join('');
    	        },

    	        /**
    	         * Converts a Latin1 string to a word array.
    	         *
    	         * @param {string} latin1Str The Latin1 string.
    	         *
    	         * @return {WordArray} The word array.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
    	         */
    	        parse: function (latin1Str) {
    	            // Shortcut
    	            var latin1StrLength = latin1Str.length;

    	            // Convert
    	            var words = [];
    	            for (var i = 0; i < latin1StrLength; i++) {
    	                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
    	            }

    	            return new WordArray.init(words, latin1StrLength);
    	        }
    	    };

    	    /**
    	     * UTF-8 encoding strategy.
    	     */
    	    var Utf8 = C_enc.Utf8 = {
    	        /**
    	         * Converts a word array to a UTF-8 string.
    	         *
    	         * @param {WordArray} wordArray The word array.
    	         *
    	         * @return {string} The UTF-8 string.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
    	         */
    	        stringify: function (wordArray) {
    	            try {
    	                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
    	            } catch (e) {
    	                throw new Error('Malformed UTF-8 data');
    	            }
    	        },

    	        /**
    	         * Converts a UTF-8 string to a word array.
    	         *
    	         * @param {string} utf8Str The UTF-8 string.
    	         *
    	         * @return {WordArray} The word array.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
    	         */
    	        parse: function (utf8Str) {
    	            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
    	        }
    	    };

    	    /**
    	     * Abstract buffered block algorithm template.
    	     *
    	     * The property blockSize must be implemented in a concrete subtype.
    	     *
    	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
    	     */
    	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
    	        /**
    	         * Resets this block algorithm's data buffer to its initial state.
    	         *
    	         * @example
    	         *
    	         *     bufferedBlockAlgorithm.reset();
    	         */
    	        reset: function () {
    	            // Initial values
    	            this._data = new WordArray.init();
    	            this._nDataBytes = 0;
    	        },

    	        /**
    	         * Adds new data to this block algorithm's buffer.
    	         *
    	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
    	         *
    	         * @example
    	         *
    	         *     bufferedBlockAlgorithm._append('data');
    	         *     bufferedBlockAlgorithm._append(wordArray);
    	         */
    	        _append: function (data) {
    	            // Convert string to WordArray, else assume WordArray already
    	            if (typeof data == 'string') {
    	                data = Utf8.parse(data);
    	            }

    	            // Append
    	            this._data.concat(data);
    	            this._nDataBytes += data.sigBytes;
    	        },

    	        /**
    	         * Processes available data blocks.
    	         *
    	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
    	         *
    	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
    	         *
    	         * @return {WordArray} The processed data.
    	         *
    	         * @example
    	         *
    	         *     var processedData = bufferedBlockAlgorithm._process();
    	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
    	         */
    	        _process: function (doFlush) {
    	            var processedWords;

    	            // Shortcuts
    	            var data = this._data;
    	            var dataWords = data.words;
    	            var dataSigBytes = data.sigBytes;
    	            var blockSize = this.blockSize;
    	            var blockSizeBytes = blockSize * 4;

    	            // Count blocks ready
    	            var nBlocksReady = dataSigBytes / blockSizeBytes;
    	            if (doFlush) {
    	                // Round up to include partial blocks
    	                nBlocksReady = Math.ceil(nBlocksReady);
    	            } else {
    	                // Round down to include only full blocks,
    	                // less the number of blocks that must remain in the buffer
    	                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
    	            }

    	            // Count words ready
    	            var nWordsReady = nBlocksReady * blockSize;

    	            // Count bytes ready
    	            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

    	            // Process blocks
    	            if (nWordsReady) {
    	                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
    	                    // Perform concrete-algorithm logic
    	                    this._doProcessBlock(dataWords, offset);
    	                }

    	                // Remove processed words
    	                processedWords = dataWords.splice(0, nWordsReady);
    	                data.sigBytes -= nBytesReady;
    	            }

    	            // Return processed words
    	            return new WordArray.init(processedWords, nBytesReady);
    	        },

    	        /**
    	         * Creates a copy of this object.
    	         *
    	         * @return {Object} The clone.
    	         *
    	         * @example
    	         *
    	         *     var clone = bufferedBlockAlgorithm.clone();
    	         */
    	        clone: function () {
    	            var clone = Base.clone.call(this);
    	            clone._data = this._data.clone();

    	            return clone;
    	        },

    	        _minBufferSize: 0
    	    });

    	    /**
    	     * Abstract hasher template.
    	     *
    	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
    	     */
    	    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
    	        /**
    	         * Configuration options.
    	         */
    	        cfg: Base.extend(),

    	        /**
    	         * Initializes a newly created hasher.
    	         *
    	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
    	         *
    	         * @example
    	         *
    	         *     var hasher = CryptoJS.algo.SHA256.create();
    	         */
    	        init: function (cfg) {
    	            // Apply config defaults
    	            this.cfg = this.cfg.extend(cfg);

    	            // Set initial values
    	            this.reset();
    	        },

    	        /**
    	         * Resets this hasher to its initial state.
    	         *
    	         * @example
    	         *
    	         *     hasher.reset();
    	         */
    	        reset: function () {
    	            // Reset data buffer
    	            BufferedBlockAlgorithm.reset.call(this);

    	            // Perform concrete-hasher logic
    	            this._doReset();
    	        },

    	        /**
    	         * Updates this hasher with a message.
    	         *
    	         * @param {WordArray|string} messageUpdate The message to append.
    	         *
    	         * @return {Hasher} This hasher.
    	         *
    	         * @example
    	         *
    	         *     hasher.update('message');
    	         *     hasher.update(wordArray);
    	         */
    	        update: function (messageUpdate) {
    	            // Append
    	            this._append(messageUpdate);

    	            // Update the hash
    	            this._process();

    	            // Chainable
    	            return this;
    	        },

    	        /**
    	         * Finalizes the hash computation.
    	         * Note that the finalize operation is effectively a destructive, read-once operation.
    	         *
    	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
    	         *
    	         * @return {WordArray} The hash.
    	         *
    	         * @example
    	         *
    	         *     var hash = hasher.finalize();
    	         *     var hash = hasher.finalize('message');
    	         *     var hash = hasher.finalize(wordArray);
    	         */
    	        finalize: function (messageUpdate) {
    	            // Final message update
    	            if (messageUpdate) {
    	                this._append(messageUpdate);
    	            }

    	            // Perform concrete-hasher logic
    	            var hash = this._doFinalize();

    	            return hash;
    	        },

    	        blockSize: 512/32,

    	        /**
    	         * Creates a shortcut function to a hasher's object interface.
    	         *
    	         * @param {Hasher} hasher The hasher to create a helper for.
    	         *
    	         * @return {Function} The shortcut function.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
    	         */
    	        _createHelper: function (hasher) {
    	            return function (message, cfg) {
    	                return new hasher.init(cfg).finalize(message);
    	            };
    	        },

    	        /**
    	         * Creates a shortcut function to the HMAC's object interface.
    	         *
    	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
    	         *
    	         * @return {Function} The shortcut function.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
    	         */
    	        _createHmacHelper: function (hasher) {
    	            return function (message, key) {
    	                return new C_algo.HMAC.init(hasher, key).finalize(message);
    	            };
    	        }
    	    });

    	    /**
    	     * Algorithm namespace.
    	     */
    	    var C_algo = C.algo = {};

    	    return C;
    	}(Math));


    	return CryptoJS;

    }));
    });

    var x64Core = createCommonjsModule(function (module, exports) {
    (function (root, factory) {
    	{
    		// CommonJS
    		module.exports = exports = factory(core$2);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	(function (undefined$1) {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var Base = C_lib.Base;
    	    var X32WordArray = C_lib.WordArray;

    	    /**
    	     * x64 namespace.
    	     */
    	    var C_x64 = C.x64 = {};

    	    /**
    	     * A 64-bit word.
    	     */
    	    var X64Word = C_x64.Word = Base.extend({
    	        /**
    	         * Initializes a newly created 64-bit word.
    	         *
    	         * @param {number} high The high 32 bits.
    	         * @param {number} low The low 32 bits.
    	         *
    	         * @example
    	         *
    	         *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
    	         */
    	        init: function (high, low) {
    	            this.high = high;
    	            this.low = low;
    	        }

    	        /**
    	         * Bitwise NOTs this word.
    	         *
    	         * @return {X64Word} A new x64-Word object after negating.
    	         *
    	         * @example
    	         *
    	         *     var negated = x64Word.not();
    	         */
    	        // not: function () {
    	            // var high = ~this.high;
    	            // var low = ~this.low;

    	            // return X64Word.create(high, low);
    	        // },

    	        /**
    	         * Bitwise ANDs this word with the passed word.
    	         *
    	         * @param {X64Word} word The x64-Word to AND with this word.
    	         *
    	         * @return {X64Word} A new x64-Word object after ANDing.
    	         *
    	         * @example
    	         *
    	         *     var anded = x64Word.and(anotherX64Word);
    	         */
    	        // and: function (word) {
    	            // var high = this.high & word.high;
    	            // var low = this.low & word.low;

    	            // return X64Word.create(high, low);
    	        // },

    	        /**
    	         * Bitwise ORs this word with the passed word.
    	         *
    	         * @param {X64Word} word The x64-Word to OR with this word.
    	         *
    	         * @return {X64Word} A new x64-Word object after ORing.
    	         *
    	         * @example
    	         *
    	         *     var ored = x64Word.or(anotherX64Word);
    	         */
    	        // or: function (word) {
    	            // var high = this.high | word.high;
    	            // var low = this.low | word.low;

    	            // return X64Word.create(high, low);
    	        // },

    	        /**
    	         * Bitwise XORs this word with the passed word.
    	         *
    	         * @param {X64Word} word The x64-Word to XOR with this word.
    	         *
    	         * @return {X64Word} A new x64-Word object after XORing.
    	         *
    	         * @example
    	         *
    	         *     var xored = x64Word.xor(anotherX64Word);
    	         */
    	        // xor: function (word) {
    	            // var high = this.high ^ word.high;
    	            // var low = this.low ^ word.low;

    	            // return X64Word.create(high, low);
    	        // },

    	        /**
    	         * Shifts this word n bits to the left.
    	         *
    	         * @param {number} n The number of bits to shift.
    	         *
    	         * @return {X64Word} A new x64-Word object after shifting.
    	         *
    	         * @example
    	         *
    	         *     var shifted = x64Word.shiftL(25);
    	         */
    	        // shiftL: function (n) {
    	            // if (n < 32) {
    	                // var high = (this.high << n) | (this.low >>> (32 - n));
    	                // var low = this.low << n;
    	            // } else {
    	                // var high = this.low << (n - 32);
    	                // var low = 0;
    	            // }

    	            // return X64Word.create(high, low);
    	        // },

    	        /**
    	         * Shifts this word n bits to the right.
    	         *
    	         * @param {number} n The number of bits to shift.
    	         *
    	         * @return {X64Word} A new x64-Word object after shifting.
    	         *
    	         * @example
    	         *
    	         *     var shifted = x64Word.shiftR(7);
    	         */
    	        // shiftR: function (n) {
    	            // if (n < 32) {
    	                // var low = (this.low >>> n) | (this.high << (32 - n));
    	                // var high = this.high >>> n;
    	            // } else {
    	                // var low = this.high >>> (n - 32);
    	                // var high = 0;
    	            // }

    	            // return X64Word.create(high, low);
    	        // },

    	        /**
    	         * Rotates this word n bits to the left.
    	         *
    	         * @param {number} n The number of bits to rotate.
    	         *
    	         * @return {X64Word} A new x64-Word object after rotating.
    	         *
    	         * @example
    	         *
    	         *     var rotated = x64Word.rotL(25);
    	         */
    	        // rotL: function (n) {
    	            // return this.shiftL(n).or(this.shiftR(64 - n));
    	        // },

    	        /**
    	         * Rotates this word n bits to the right.
    	         *
    	         * @param {number} n The number of bits to rotate.
    	         *
    	         * @return {X64Word} A new x64-Word object after rotating.
    	         *
    	         * @example
    	         *
    	         *     var rotated = x64Word.rotR(7);
    	         */
    	        // rotR: function (n) {
    	            // return this.shiftR(n).or(this.shiftL(64 - n));
    	        // },

    	        /**
    	         * Adds this word with the passed word.
    	         *
    	         * @param {X64Word} word The x64-Word to add with this word.
    	         *
    	         * @return {X64Word} A new x64-Word object after adding.
    	         *
    	         * @example
    	         *
    	         *     var added = x64Word.add(anotherX64Word);
    	         */
    	        // add: function (word) {
    	            // var low = (this.low + word.low) | 0;
    	            // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
    	            // var high = (this.high + word.high + carry) | 0;

    	            // return X64Word.create(high, low);
    	        // }
    	    });

    	    /**
    	     * An array of 64-bit words.
    	     *
    	     * @property {Array} words The array of CryptoJS.x64.Word objects.
    	     * @property {number} sigBytes The number of significant bytes in this word array.
    	     */
    	    var X64WordArray = C_x64.WordArray = Base.extend({
    	        /**
    	         * Initializes a newly created word array.
    	         *
    	         * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
    	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
    	         *
    	         * @example
    	         *
    	         *     var wordArray = CryptoJS.x64.WordArray.create();
    	         *
    	         *     var wordArray = CryptoJS.x64.WordArray.create([
    	         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
    	         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
    	         *     ]);
    	         *
    	         *     var wordArray = CryptoJS.x64.WordArray.create([
    	         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
    	         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
    	         *     ], 10);
    	         */
    	        init: function (words, sigBytes) {
    	            words = this.words = words || [];

    	            if (sigBytes != undefined$1) {
    	                this.sigBytes = sigBytes;
    	            } else {
    	                this.sigBytes = words.length * 8;
    	            }
    	        },

    	        /**
    	         * Converts this 64-bit word array to a 32-bit word array.
    	         *
    	         * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
    	         *
    	         * @example
    	         *
    	         *     var x32WordArray = x64WordArray.toX32();
    	         */
    	        toX32: function () {
    	            // Shortcuts
    	            var x64Words = this.words;
    	            var x64WordsLength = x64Words.length;

    	            // Convert
    	            var x32Words = [];
    	            for (var i = 0; i < x64WordsLength; i++) {
    	                var x64Word = x64Words[i];
    	                x32Words.push(x64Word.high);
    	                x32Words.push(x64Word.low);
    	            }

    	            return X32WordArray.create(x32Words, this.sigBytes);
    	        },

    	        /**
    	         * Creates a copy of this word array.
    	         *
    	         * @return {X64WordArray} The clone.
    	         *
    	         * @example
    	         *
    	         *     var clone = x64WordArray.clone();
    	         */
    	        clone: function () {
    	            var clone = Base.clone.call(this);

    	            // Clone "words" array
    	            var words = clone.words = this.words.slice(0);

    	            // Clone each X64Word object
    	            var wordsLength = words.length;
    	            for (var i = 0; i < wordsLength; i++) {
    	                words[i] = words[i].clone();
    	            }

    	            return clone;
    	        }
    	    });
    	}());


    	return CryptoJS;

    }));
    });

    var libTypedarrays = createCommonjsModule(function (module, exports) {
    (function (root, factory) {
    	{
    		// CommonJS
    		module.exports = exports = factory(core$2);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	(function () {
    	    // Check if typed arrays are supported
    	    if (typeof ArrayBuffer != 'function') {
    	        return;
    	    }

    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var WordArray = C_lib.WordArray;

    	    // Reference original init
    	    var superInit = WordArray.init;

    	    // Augment WordArray.init to handle typed arrays
    	    var subInit = WordArray.init = function (typedArray) {
    	        // Convert buffers to uint8
    	        if (typedArray instanceof ArrayBuffer) {
    	            typedArray = new Uint8Array(typedArray);
    	        }

    	        // Convert other array views to uint8
    	        if (
    	            typedArray instanceof Int8Array ||
    	            (typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray) ||
    	            typedArray instanceof Int16Array ||
    	            typedArray instanceof Uint16Array ||
    	            typedArray instanceof Int32Array ||
    	            typedArray instanceof Uint32Array ||
    	            typedArray instanceof Float32Array ||
    	            typedArray instanceof Float64Array
    	        ) {
    	            typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
    	        }

    	        // Handle Uint8Array
    	        if (typedArray instanceof Uint8Array) {
    	            // Shortcut
    	            var typedArrayByteLength = typedArray.byteLength;

    	            // Extract bytes
    	            var words = [];
    	            for (var i = 0; i < typedArrayByteLength; i++) {
    	                words[i >>> 2] |= typedArray[i] << (24 - (i % 4) * 8);
    	            }

    	            // Initialize this word array
    	            superInit.call(this, words, typedArrayByteLength);
    	        } else {
    	            // Else call normal init
    	            superInit.apply(this, arguments);
    	        }
    	    };

    	    subInit.prototype = WordArray;
    	}());


    	return CryptoJS.lib.WordArray;

    }));
    });

    var encUtf16 = createCommonjsModule(function (module, exports) {
    (function (root, factory) {
    	{
    		// CommonJS
    		module.exports = exports = factory(core$2);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	(function () {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var WordArray = C_lib.WordArray;
    	    var C_enc = C.enc;

    	    /**
    	     * UTF-16 BE encoding strategy.
    	     */
    	    var Utf16BE = C_enc.Utf16 = C_enc.Utf16BE = {
    	        /**
    	         * Converts a word array to a UTF-16 BE string.
    	         *
    	         * @param {WordArray} wordArray The word array.
    	         *
    	         * @return {string} The UTF-16 BE string.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
    	         */
    	        stringify: function (wordArray) {
    	            // Shortcuts
    	            var words = wordArray.words;
    	            var sigBytes = wordArray.sigBytes;

    	            // Convert
    	            var utf16Chars = [];
    	            for (var i = 0; i < sigBytes; i += 2) {
    	                var codePoint = (words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff;
    	                utf16Chars.push(String.fromCharCode(codePoint));
    	            }

    	            return utf16Chars.join('');
    	        },

    	        /**
    	         * Converts a UTF-16 BE string to a word array.
    	         *
    	         * @param {string} utf16Str The UTF-16 BE string.
    	         *
    	         * @return {WordArray} The word array.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
    	         */
    	        parse: function (utf16Str) {
    	            // Shortcut
    	            var utf16StrLength = utf16Str.length;

    	            // Convert
    	            var words = [];
    	            for (var i = 0; i < utf16StrLength; i++) {
    	                words[i >>> 1] |= utf16Str.charCodeAt(i) << (16 - (i % 2) * 16);
    	            }

    	            return WordArray.create(words, utf16StrLength * 2);
    	        }
    	    };

    	    /**
    	     * UTF-16 LE encoding strategy.
    	     */
    	    C_enc.Utf16LE = {
    	        /**
    	         * Converts a word array to a UTF-16 LE string.
    	         *
    	         * @param {WordArray} wordArray The word array.
    	         *
    	         * @return {string} The UTF-16 LE string.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
    	         */
    	        stringify: function (wordArray) {
    	            // Shortcuts
    	            var words = wordArray.words;
    	            var sigBytes = wordArray.sigBytes;

    	            // Convert
    	            var utf16Chars = [];
    	            for (var i = 0; i < sigBytes; i += 2) {
    	                var codePoint = swapEndian((words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff);
    	                utf16Chars.push(String.fromCharCode(codePoint));
    	            }

    	            return utf16Chars.join('');
    	        },

    	        /**
    	         * Converts a UTF-16 LE string to a word array.
    	         *
    	         * @param {string} utf16Str The UTF-16 LE string.
    	         *
    	         * @return {WordArray} The word array.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
    	         */
    	        parse: function (utf16Str) {
    	            // Shortcut
    	            var utf16StrLength = utf16Str.length;

    	            // Convert
    	            var words = [];
    	            for (var i = 0; i < utf16StrLength; i++) {
    	                words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << (16 - (i % 2) * 16));
    	            }

    	            return WordArray.create(words, utf16StrLength * 2);
    	        }
    	    };

    	    function swapEndian(word) {
    	        return ((word << 8) & 0xff00ff00) | ((word >>> 8) & 0x00ff00ff);
    	    }
    	}());


    	return CryptoJS.enc.Utf16;

    }));
    });

    var encBase64 = createCommonjsModule(function (module, exports) {
    (function (root, factory) {
    	{
    		// CommonJS
    		module.exports = exports = factory(core$2);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	(function () {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var WordArray = C_lib.WordArray;
    	    var C_enc = C.enc;

    	    /**
    	     * Base64 encoding strategy.
    	     */
    	    var Base64 = C_enc.Base64 = {
    	        /**
    	         * Converts a word array to a Base64 string.
    	         *
    	         * @param {WordArray} wordArray The word array.
    	         *
    	         * @return {string} The Base64 string.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
    	         */
    	        stringify: function (wordArray) {
    	            // Shortcuts
    	            var words = wordArray.words;
    	            var sigBytes = wordArray.sigBytes;
    	            var map = this._map;

    	            // Clamp excess bits
    	            wordArray.clamp();

    	            // Convert
    	            var base64Chars = [];
    	            for (var i = 0; i < sigBytes; i += 3) {
    	                var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
    	                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
    	                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

    	                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

    	                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
    	                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
    	                }
    	            }

    	            // Add padding
    	            var paddingChar = map.charAt(64);
    	            if (paddingChar) {
    	                while (base64Chars.length % 4) {
    	                    base64Chars.push(paddingChar);
    	                }
    	            }

    	            return base64Chars.join('');
    	        },

    	        /**
    	         * Converts a Base64 string to a word array.
    	         *
    	         * @param {string} base64Str The Base64 string.
    	         *
    	         * @return {WordArray} The word array.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
    	         */
    	        parse: function (base64Str) {
    	            // Shortcuts
    	            var base64StrLength = base64Str.length;
    	            var map = this._map;
    	            var reverseMap = this._reverseMap;

    	            if (!reverseMap) {
    	                    reverseMap = this._reverseMap = [];
    	                    for (var j = 0; j < map.length; j++) {
    	                        reverseMap[map.charCodeAt(j)] = j;
    	                    }
    	            }

    	            // Ignore padding
    	            var paddingChar = map.charAt(64);
    	            if (paddingChar) {
    	                var paddingIndex = base64Str.indexOf(paddingChar);
    	                if (paddingIndex !== -1) {
    	                    base64StrLength = paddingIndex;
    	                }
    	            }

    	            // Convert
    	            return parseLoop(base64Str, base64StrLength, reverseMap);

    	        },

    	        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
    	    };

    	    function parseLoop(base64Str, base64StrLength, reverseMap) {
    	      var words = [];
    	      var nBytes = 0;
    	      for (var i = 0; i < base64StrLength; i++) {
    	          if (i % 4) {
    	              var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
    	              var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
    	              var bitsCombined = bits1 | bits2;
    	              words[nBytes >>> 2] |= bitsCombined << (24 - (nBytes % 4) * 8);
    	              nBytes++;
    	          }
    	      }
    	      return WordArray.create(words, nBytes);
    	    }
    	}());


    	return CryptoJS.enc.Base64;

    }));
    });

    var md5 = createCommonjsModule(function (module, exports) {
    (function (root, factory) {
    	{
    		// CommonJS
    		module.exports = exports = factory(core$2);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	(function (Math) {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var WordArray = C_lib.WordArray;
    	    var Hasher = C_lib.Hasher;
    	    var C_algo = C.algo;

    	    // Constants table
    	    var T = [];

    	    // Compute constants
    	    (function () {
    	        for (var i = 0; i < 64; i++) {
    	            T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
    	        }
    	    }());

    	    /**
    	     * MD5 hash algorithm.
    	     */
    	    var MD5 = C_algo.MD5 = Hasher.extend({
    	        _doReset: function () {
    	            this._hash = new WordArray.init([
    	                0x67452301, 0xefcdab89,
    	                0x98badcfe, 0x10325476
    	            ]);
    	        },

    	        _doProcessBlock: function (M, offset) {
    	            // Swap endian
    	            for (var i = 0; i < 16; i++) {
    	                // Shortcuts
    	                var offset_i = offset + i;
    	                var M_offset_i = M[offset_i];

    	                M[offset_i] = (
    	                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
    	                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
    	                );
    	            }

    	            // Shortcuts
    	            var H = this._hash.words;

    	            var M_offset_0  = M[offset + 0];
    	            var M_offset_1  = M[offset + 1];
    	            var M_offset_2  = M[offset + 2];
    	            var M_offset_3  = M[offset + 3];
    	            var M_offset_4  = M[offset + 4];
    	            var M_offset_5  = M[offset + 5];
    	            var M_offset_6  = M[offset + 6];
    	            var M_offset_7  = M[offset + 7];
    	            var M_offset_8  = M[offset + 8];
    	            var M_offset_9  = M[offset + 9];
    	            var M_offset_10 = M[offset + 10];
    	            var M_offset_11 = M[offset + 11];
    	            var M_offset_12 = M[offset + 12];
    	            var M_offset_13 = M[offset + 13];
    	            var M_offset_14 = M[offset + 14];
    	            var M_offset_15 = M[offset + 15];

    	            // Working varialbes
    	            var a = H[0];
    	            var b = H[1];
    	            var c = H[2];
    	            var d = H[3];

    	            // Computation
    	            a = FF(a, b, c, d, M_offset_0,  7,  T[0]);
    	            d = FF(d, a, b, c, M_offset_1,  12, T[1]);
    	            c = FF(c, d, a, b, M_offset_2,  17, T[2]);
    	            b = FF(b, c, d, a, M_offset_3,  22, T[3]);
    	            a = FF(a, b, c, d, M_offset_4,  7,  T[4]);
    	            d = FF(d, a, b, c, M_offset_5,  12, T[5]);
    	            c = FF(c, d, a, b, M_offset_6,  17, T[6]);
    	            b = FF(b, c, d, a, M_offset_7,  22, T[7]);
    	            a = FF(a, b, c, d, M_offset_8,  7,  T[8]);
    	            d = FF(d, a, b, c, M_offset_9,  12, T[9]);
    	            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
    	            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
    	            a = FF(a, b, c, d, M_offset_12, 7,  T[12]);
    	            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
    	            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
    	            b = FF(b, c, d, a, M_offset_15, 22, T[15]);

    	            a = GG(a, b, c, d, M_offset_1,  5,  T[16]);
    	            d = GG(d, a, b, c, M_offset_6,  9,  T[17]);
    	            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
    	            b = GG(b, c, d, a, M_offset_0,  20, T[19]);
    	            a = GG(a, b, c, d, M_offset_5,  5,  T[20]);
    	            d = GG(d, a, b, c, M_offset_10, 9,  T[21]);
    	            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
    	            b = GG(b, c, d, a, M_offset_4,  20, T[23]);
    	            a = GG(a, b, c, d, M_offset_9,  5,  T[24]);
    	            d = GG(d, a, b, c, M_offset_14, 9,  T[25]);
    	            c = GG(c, d, a, b, M_offset_3,  14, T[26]);
    	            b = GG(b, c, d, a, M_offset_8,  20, T[27]);
    	            a = GG(a, b, c, d, M_offset_13, 5,  T[28]);
    	            d = GG(d, a, b, c, M_offset_2,  9,  T[29]);
    	            c = GG(c, d, a, b, M_offset_7,  14, T[30]);
    	            b = GG(b, c, d, a, M_offset_12, 20, T[31]);

    	            a = HH(a, b, c, d, M_offset_5,  4,  T[32]);
    	            d = HH(d, a, b, c, M_offset_8,  11, T[33]);
    	            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
    	            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
    	            a = HH(a, b, c, d, M_offset_1,  4,  T[36]);
    	            d = HH(d, a, b, c, M_offset_4,  11, T[37]);
    	            c = HH(c, d, a, b, M_offset_7,  16, T[38]);
    	            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
    	            a = HH(a, b, c, d, M_offset_13, 4,  T[40]);
    	            d = HH(d, a, b, c, M_offset_0,  11, T[41]);
    	            c = HH(c, d, a, b, M_offset_3,  16, T[42]);
    	            b = HH(b, c, d, a, M_offset_6,  23, T[43]);
    	            a = HH(a, b, c, d, M_offset_9,  4,  T[44]);
    	            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
    	            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
    	            b = HH(b, c, d, a, M_offset_2,  23, T[47]);

    	            a = II(a, b, c, d, M_offset_0,  6,  T[48]);
    	            d = II(d, a, b, c, M_offset_7,  10, T[49]);
    	            c = II(c, d, a, b, M_offset_14, 15, T[50]);
    	            b = II(b, c, d, a, M_offset_5,  21, T[51]);
    	            a = II(a, b, c, d, M_offset_12, 6,  T[52]);
    	            d = II(d, a, b, c, M_offset_3,  10, T[53]);
    	            c = II(c, d, a, b, M_offset_10, 15, T[54]);
    	            b = II(b, c, d, a, M_offset_1,  21, T[55]);
    	            a = II(a, b, c, d, M_offset_8,  6,  T[56]);
    	            d = II(d, a, b, c, M_offset_15, 10, T[57]);
    	            c = II(c, d, a, b, M_offset_6,  15, T[58]);
    	            b = II(b, c, d, a, M_offset_13, 21, T[59]);
    	            a = II(a, b, c, d, M_offset_4,  6,  T[60]);
    	            d = II(d, a, b, c, M_offset_11, 10, T[61]);
    	            c = II(c, d, a, b, M_offset_2,  15, T[62]);
    	            b = II(b, c, d, a, M_offset_9,  21, T[63]);

    	            // Intermediate hash value
    	            H[0] = (H[0] + a) | 0;
    	            H[1] = (H[1] + b) | 0;
    	            H[2] = (H[2] + c) | 0;
    	            H[3] = (H[3] + d) | 0;
    	        },

    	        _doFinalize: function () {
    	            // Shortcuts
    	            var data = this._data;
    	            var dataWords = data.words;

    	            var nBitsTotal = this._nDataBytes * 8;
    	            var nBitsLeft = data.sigBytes * 8;

    	            // Add padding
    	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);

    	            var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
    	            var nBitsTotalL = nBitsTotal;
    	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = (
    	                (((nBitsTotalH << 8)  | (nBitsTotalH >>> 24)) & 0x00ff00ff) |
    	                (((nBitsTotalH << 24) | (nBitsTotalH >>> 8))  & 0xff00ff00)
    	            );
    	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
    	                (((nBitsTotalL << 8)  | (nBitsTotalL >>> 24)) & 0x00ff00ff) |
    	                (((nBitsTotalL << 24) | (nBitsTotalL >>> 8))  & 0xff00ff00)
    	            );

    	            data.sigBytes = (dataWords.length + 1) * 4;

    	            // Hash final blocks
    	            this._process();

    	            // Shortcuts
    	            var hash = this._hash;
    	            var H = hash.words;

    	            // Swap endian
    	            for (var i = 0; i < 4; i++) {
    	                // Shortcut
    	                var H_i = H[i];

    	                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
    	                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
    	            }

    	            // Return final computed hash
    	            return hash;
    	        },

    	        clone: function () {
    	            var clone = Hasher.clone.call(this);
    	            clone._hash = this._hash.clone();

    	            return clone;
    	        }
    	    });

    	    function FF(a, b, c, d, x, s, t) {
    	        var n = a + ((b & c) | (~b & d)) + x + t;
    	        return ((n << s) | (n >>> (32 - s))) + b;
    	    }

    	    function GG(a, b, c, d, x, s, t) {
    	        var n = a + ((b & d) | (c & ~d)) + x + t;
    	        return ((n << s) | (n >>> (32 - s))) + b;
    	    }

    	    function HH(a, b, c, d, x, s, t) {
    	        var n = a + (b ^ c ^ d) + x + t;
    	        return ((n << s) | (n >>> (32 - s))) + b;
    	    }

    	    function II(a, b, c, d, x, s, t) {
    	        var n = a + (c ^ (b | ~d)) + x + t;
    	        return ((n << s) | (n >>> (32 - s))) + b;
    	    }

    	    /**
    	     * Shortcut function to the hasher's object interface.
    	     *
    	     * @param {WordArray|string} message The message to hash.
    	     *
    	     * @return {WordArray} The hash.
    	     *
    	     * @static
    	     *
    	     * @example
    	     *
    	     *     var hash = CryptoJS.MD5('message');
    	     *     var hash = CryptoJS.MD5(wordArray);
    	     */
    	    C.MD5 = Hasher._createHelper(MD5);

    	    /**
    	     * Shortcut function to the HMAC's object interface.
    	     *
    	     * @param {WordArray|string} message The message to hash.
    	     * @param {WordArray|string} key The secret key.
    	     *
    	     * @return {WordArray} The HMAC.
    	     *
    	     * @static
    	     *
    	     * @example
    	     *
    	     *     var hmac = CryptoJS.HmacMD5(message, key);
    	     */
    	    C.HmacMD5 = Hasher._createHmacHelper(MD5);
    	}(Math));


    	return CryptoJS.MD5;

    }));
    });

    var sha1 = createCommonjsModule(function (module, exports) {
    (function (root, factory) {
    	{
    		// CommonJS
    		module.exports = exports = factory(core$2);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	(function () {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var WordArray = C_lib.WordArray;
    	    var Hasher = C_lib.Hasher;
    	    var C_algo = C.algo;

    	    // Reusable object
    	    var W = [];

    	    /**
    	     * SHA-1 hash algorithm.
    	     */
    	    var SHA1 = C_algo.SHA1 = Hasher.extend({
    	        _doReset: function () {
    	            this._hash = new WordArray.init([
    	                0x67452301, 0xefcdab89,
    	                0x98badcfe, 0x10325476,
    	                0xc3d2e1f0
    	            ]);
    	        },

    	        _doProcessBlock: function (M, offset) {
    	            // Shortcut
    	            var H = this._hash.words;

    	            // Working variables
    	            var a = H[0];
    	            var b = H[1];
    	            var c = H[2];
    	            var d = H[3];
    	            var e = H[4];

    	            // Computation
    	            for (var i = 0; i < 80; i++) {
    	                if (i < 16) {
    	                    W[i] = M[offset + i] | 0;
    	                } else {
    	                    var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
    	                    W[i] = (n << 1) | (n >>> 31);
    	                }

    	                var t = ((a << 5) | (a >>> 27)) + e + W[i];
    	                if (i < 20) {
    	                    t += ((b & c) | (~b & d)) + 0x5a827999;
    	                } else if (i < 40) {
    	                    t += (b ^ c ^ d) + 0x6ed9eba1;
    	                } else if (i < 60) {
    	                    t += ((b & c) | (b & d) | (c & d)) - 0x70e44324;
    	                } else /* if (i < 80) */ {
    	                    t += (b ^ c ^ d) - 0x359d3e2a;
    	                }

    	                e = d;
    	                d = c;
    	                c = (b << 30) | (b >>> 2);
    	                b = a;
    	                a = t;
    	            }

    	            // Intermediate hash value
    	            H[0] = (H[0] + a) | 0;
    	            H[1] = (H[1] + b) | 0;
    	            H[2] = (H[2] + c) | 0;
    	            H[3] = (H[3] + d) | 0;
    	            H[4] = (H[4] + e) | 0;
    	        },

    	        _doFinalize: function () {
    	            // Shortcuts
    	            var data = this._data;
    	            var dataWords = data.words;

    	            var nBitsTotal = this._nDataBytes * 8;
    	            var nBitsLeft = data.sigBytes * 8;

    	            // Add padding
    	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
    	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
    	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
    	            data.sigBytes = dataWords.length * 4;

    	            // Hash final blocks
    	            this._process();

    	            // Return final computed hash
    	            return this._hash;
    	        },

    	        clone: function () {
    	            var clone = Hasher.clone.call(this);
    	            clone._hash = this._hash.clone();

    	            return clone;
    	        }
    	    });

    	    /**
    	     * Shortcut function to the hasher's object interface.
    	     *
    	     * @param {WordArray|string} message The message to hash.
    	     *
    	     * @return {WordArray} The hash.
    	     *
    	     * @static
    	     *
    	     * @example
    	     *
    	     *     var hash = CryptoJS.SHA1('message');
    	     *     var hash = CryptoJS.SHA1(wordArray);
    	     */
    	    C.SHA1 = Hasher._createHelper(SHA1);

    	    /**
    	     * Shortcut function to the HMAC's object interface.
    	     *
    	     * @param {WordArray|string} message The message to hash.
    	     * @param {WordArray|string} key The secret key.
    	     *
    	     * @return {WordArray} The HMAC.
    	     *
    	     * @static
    	     *
    	     * @example
    	     *
    	     *     var hmac = CryptoJS.HmacSHA1(message, key);
    	     */
    	    C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
    	}());


    	return CryptoJS.SHA1;

    }));
    });

    var sha256 = createCommonjsModule(function (module, exports) {
    (function (root, factory) {
    	{
    		// CommonJS
    		module.exports = exports = factory(core$2);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	(function (Math) {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var WordArray = C_lib.WordArray;
    	    var Hasher = C_lib.Hasher;
    	    var C_algo = C.algo;

    	    // Initialization and round constants tables
    	    var H = [];
    	    var K = [];

    	    // Compute constants
    	    (function () {
    	        function isPrime(n) {
    	            var sqrtN = Math.sqrt(n);
    	            for (var factor = 2; factor <= sqrtN; factor++) {
    	                if (!(n % factor)) {
    	                    return false;
    	                }
    	            }

    	            return true;
    	        }

    	        function getFractionalBits(n) {
    	            return ((n - (n | 0)) * 0x100000000) | 0;
    	        }

    	        var n = 2;
    	        var nPrime = 0;
    	        while (nPrime < 64) {
    	            if (isPrime(n)) {
    	                if (nPrime < 8) {
    	                    H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
    	                }
    	                K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));

    	                nPrime++;
    	            }

    	            n++;
    	        }
    	    }());

    	    // Reusable object
    	    var W = [];

    	    /**
    	     * SHA-256 hash algorithm.
    	     */
    	    var SHA256 = C_algo.SHA256 = Hasher.extend({
    	        _doReset: function () {
    	            this._hash = new WordArray.init(H.slice(0));
    	        },

    	        _doProcessBlock: function (M, offset) {
    	            // Shortcut
    	            var H = this._hash.words;

    	            // Working variables
    	            var a = H[0];
    	            var b = H[1];
    	            var c = H[2];
    	            var d = H[3];
    	            var e = H[4];
    	            var f = H[5];
    	            var g = H[6];
    	            var h = H[7];

    	            // Computation
    	            for (var i = 0; i < 64; i++) {
    	                if (i < 16) {
    	                    W[i] = M[offset + i] | 0;
    	                } else {
    	                    var gamma0x = W[i - 15];
    	                    var gamma0  = ((gamma0x << 25) | (gamma0x >>> 7))  ^
    	                                  ((gamma0x << 14) | (gamma0x >>> 18)) ^
    	                                   (gamma0x >>> 3);

    	                    var gamma1x = W[i - 2];
    	                    var gamma1  = ((gamma1x << 15) | (gamma1x >>> 17)) ^
    	                                  ((gamma1x << 13) | (gamma1x >>> 19)) ^
    	                                   (gamma1x >>> 10);

    	                    W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
    	                }

    	                var ch  = (e & f) ^ (~e & g);
    	                var maj = (a & b) ^ (a & c) ^ (b & c);

    	                var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
    	                var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7)  | (e >>> 25));

    	                var t1 = h + sigma1 + ch + K[i] + W[i];
    	                var t2 = sigma0 + maj;

    	                h = g;
    	                g = f;
    	                f = e;
    	                e = (d + t1) | 0;
    	                d = c;
    	                c = b;
    	                b = a;
    	                a = (t1 + t2) | 0;
    	            }

    	            // Intermediate hash value
    	            H[0] = (H[0] + a) | 0;
    	            H[1] = (H[1] + b) | 0;
    	            H[2] = (H[2] + c) | 0;
    	            H[3] = (H[3] + d) | 0;
    	            H[4] = (H[4] + e) | 0;
    	            H[5] = (H[5] + f) | 0;
    	            H[6] = (H[6] + g) | 0;
    	            H[7] = (H[7] + h) | 0;
    	        },

    	        _doFinalize: function () {
    	            // Shortcuts
    	            var data = this._data;
    	            var dataWords = data.words;

    	            var nBitsTotal = this._nDataBytes * 8;
    	            var nBitsLeft = data.sigBytes * 8;

    	            // Add padding
    	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
    	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
    	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
    	            data.sigBytes = dataWords.length * 4;

    	            // Hash final blocks
    	            this._process();

    	            // Return final computed hash
    	            return this._hash;
    	        },

    	        clone: function () {
    	            var clone = Hasher.clone.call(this);
    	            clone._hash = this._hash.clone();

    	            return clone;
    	        }
    	    });

    	    /**
    	     * Shortcut function to the hasher's object interface.
    	     *
    	     * @param {WordArray|string} message The message to hash.
    	     *
    	     * @return {WordArray} The hash.
    	     *
    	     * @static
    	     *
    	     * @example
    	     *
    	     *     var hash = CryptoJS.SHA256('message');
    	     *     var hash = CryptoJS.SHA256(wordArray);
    	     */
    	    C.SHA256 = Hasher._createHelper(SHA256);

    	    /**
    	     * Shortcut function to the HMAC's object interface.
    	     *
    	     * @param {WordArray|string} message The message to hash.
    	     * @param {WordArray|string} key The secret key.
    	     *
    	     * @return {WordArray} The HMAC.
    	     *
    	     * @static
    	     *
    	     * @example
    	     *
    	     *     var hmac = CryptoJS.HmacSHA256(message, key);
    	     */
    	    C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
    	}(Math));


    	return CryptoJS.SHA256;

    }));
    });

    var sha224 = createCommonjsModule(function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = exports = factory(core$2, sha256);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	(function () {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var WordArray = C_lib.WordArray;
    	    var C_algo = C.algo;
    	    var SHA256 = C_algo.SHA256;

    	    /**
    	     * SHA-224 hash algorithm.
    	     */
    	    var SHA224 = C_algo.SHA224 = SHA256.extend({
    	        _doReset: function () {
    	            this._hash = new WordArray.init([
    	                0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939,
    	                0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4
    	            ]);
    	        },

    	        _doFinalize: function () {
    	            var hash = SHA256._doFinalize.call(this);

    	            hash.sigBytes -= 4;

    	            return hash;
    	        }
    	    });

    	    /**
    	     * Shortcut function to the hasher's object interface.
    	     *
    	     * @param {WordArray|string} message The message to hash.
    	     *
    	     * @return {WordArray} The hash.
    	     *
    	     * @static
    	     *
    	     * @example
    	     *
    	     *     var hash = CryptoJS.SHA224('message');
    	     *     var hash = CryptoJS.SHA224(wordArray);
    	     */
    	    C.SHA224 = SHA256._createHelper(SHA224);

    	    /**
    	     * Shortcut function to the HMAC's object interface.
    	     *
    	     * @param {WordArray|string} message The message to hash.
    	     * @param {WordArray|string} key The secret key.
    	     *
    	     * @return {WordArray} The HMAC.
    	     *
    	     * @static
    	     *
    	     * @example
    	     *
    	     *     var hmac = CryptoJS.HmacSHA224(message, key);
    	     */
    	    C.HmacSHA224 = SHA256._createHmacHelper(SHA224);
    	}());


    	return CryptoJS.SHA224;

    }));
    });

    var sha512 = createCommonjsModule(function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = exports = factory(core$2, x64Core);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	(function () {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var Hasher = C_lib.Hasher;
    	    var C_x64 = C.x64;
    	    var X64Word = C_x64.Word;
    	    var X64WordArray = C_x64.WordArray;
    	    var C_algo = C.algo;

    	    function X64Word_create() {
    	        return X64Word.create.apply(X64Word, arguments);
    	    }

    	    // Constants
    	    var K = [
    	        X64Word_create(0x428a2f98, 0xd728ae22), X64Word_create(0x71374491, 0x23ef65cd),
    	        X64Word_create(0xb5c0fbcf, 0xec4d3b2f), X64Word_create(0xe9b5dba5, 0x8189dbbc),
    	        X64Word_create(0x3956c25b, 0xf348b538), X64Word_create(0x59f111f1, 0xb605d019),
    	        X64Word_create(0x923f82a4, 0xaf194f9b), X64Word_create(0xab1c5ed5, 0xda6d8118),
    	        X64Word_create(0xd807aa98, 0xa3030242), X64Word_create(0x12835b01, 0x45706fbe),
    	        X64Word_create(0x243185be, 0x4ee4b28c), X64Word_create(0x550c7dc3, 0xd5ffb4e2),
    	        X64Word_create(0x72be5d74, 0xf27b896f), X64Word_create(0x80deb1fe, 0x3b1696b1),
    	        X64Word_create(0x9bdc06a7, 0x25c71235), X64Word_create(0xc19bf174, 0xcf692694),
    	        X64Word_create(0xe49b69c1, 0x9ef14ad2), X64Word_create(0xefbe4786, 0x384f25e3),
    	        X64Word_create(0x0fc19dc6, 0x8b8cd5b5), X64Word_create(0x240ca1cc, 0x77ac9c65),
    	        X64Word_create(0x2de92c6f, 0x592b0275), X64Word_create(0x4a7484aa, 0x6ea6e483),
    	        X64Word_create(0x5cb0a9dc, 0xbd41fbd4), X64Word_create(0x76f988da, 0x831153b5),
    	        X64Word_create(0x983e5152, 0xee66dfab), X64Word_create(0xa831c66d, 0x2db43210),
    	        X64Word_create(0xb00327c8, 0x98fb213f), X64Word_create(0xbf597fc7, 0xbeef0ee4),
    	        X64Word_create(0xc6e00bf3, 0x3da88fc2), X64Word_create(0xd5a79147, 0x930aa725),
    	        X64Word_create(0x06ca6351, 0xe003826f), X64Word_create(0x14292967, 0x0a0e6e70),
    	        X64Word_create(0x27b70a85, 0x46d22ffc), X64Word_create(0x2e1b2138, 0x5c26c926),
    	        X64Word_create(0x4d2c6dfc, 0x5ac42aed), X64Word_create(0x53380d13, 0x9d95b3df),
    	        X64Word_create(0x650a7354, 0x8baf63de), X64Word_create(0x766a0abb, 0x3c77b2a8),
    	        X64Word_create(0x81c2c92e, 0x47edaee6), X64Word_create(0x92722c85, 0x1482353b),
    	        X64Word_create(0xa2bfe8a1, 0x4cf10364), X64Word_create(0xa81a664b, 0xbc423001),
    	        X64Word_create(0xc24b8b70, 0xd0f89791), X64Word_create(0xc76c51a3, 0x0654be30),
    	        X64Word_create(0xd192e819, 0xd6ef5218), X64Word_create(0xd6990624, 0x5565a910),
    	        X64Word_create(0xf40e3585, 0x5771202a), X64Word_create(0x106aa070, 0x32bbd1b8),
    	        X64Word_create(0x19a4c116, 0xb8d2d0c8), X64Word_create(0x1e376c08, 0x5141ab53),
    	        X64Word_create(0x2748774c, 0xdf8eeb99), X64Word_create(0x34b0bcb5, 0xe19b48a8),
    	        X64Word_create(0x391c0cb3, 0xc5c95a63), X64Word_create(0x4ed8aa4a, 0xe3418acb),
    	        X64Word_create(0x5b9cca4f, 0x7763e373), X64Word_create(0x682e6ff3, 0xd6b2b8a3),
    	        X64Word_create(0x748f82ee, 0x5defb2fc), X64Word_create(0x78a5636f, 0x43172f60),
    	        X64Word_create(0x84c87814, 0xa1f0ab72), X64Word_create(0x8cc70208, 0x1a6439ec),
    	        X64Word_create(0x90befffa, 0x23631e28), X64Word_create(0xa4506ceb, 0xde82bde9),
    	        X64Word_create(0xbef9a3f7, 0xb2c67915), X64Word_create(0xc67178f2, 0xe372532b),
    	        X64Word_create(0xca273ece, 0xea26619c), X64Word_create(0xd186b8c7, 0x21c0c207),
    	        X64Word_create(0xeada7dd6, 0xcde0eb1e), X64Word_create(0xf57d4f7f, 0xee6ed178),
    	        X64Word_create(0x06f067aa, 0x72176fba), X64Word_create(0x0a637dc5, 0xa2c898a6),
    	        X64Word_create(0x113f9804, 0xbef90dae), X64Word_create(0x1b710b35, 0x131c471b),
    	        X64Word_create(0x28db77f5, 0x23047d84), X64Word_create(0x32caab7b, 0x40c72493),
    	        X64Word_create(0x3c9ebe0a, 0x15c9bebc), X64Word_create(0x431d67c4, 0x9c100d4c),
    	        X64Word_create(0x4cc5d4be, 0xcb3e42b6), X64Word_create(0x597f299c, 0xfc657e2a),
    	        X64Word_create(0x5fcb6fab, 0x3ad6faec), X64Word_create(0x6c44198c, 0x4a475817)
    	    ];

    	    // Reusable objects
    	    var W = [];
    	    (function () {
    	        for (var i = 0; i < 80; i++) {
    	            W[i] = X64Word_create();
    	        }
    	    }());

    	    /**
    	     * SHA-512 hash algorithm.
    	     */
    	    var SHA512 = C_algo.SHA512 = Hasher.extend({
    	        _doReset: function () {
    	            this._hash = new X64WordArray.init([
    	                new X64Word.init(0x6a09e667, 0xf3bcc908), new X64Word.init(0xbb67ae85, 0x84caa73b),
    	                new X64Word.init(0x3c6ef372, 0xfe94f82b), new X64Word.init(0xa54ff53a, 0x5f1d36f1),
    	                new X64Word.init(0x510e527f, 0xade682d1), new X64Word.init(0x9b05688c, 0x2b3e6c1f),
    	                new X64Word.init(0x1f83d9ab, 0xfb41bd6b), new X64Word.init(0x5be0cd19, 0x137e2179)
    	            ]);
    	        },

    	        _doProcessBlock: function (M, offset) {
    	            // Shortcuts
    	            var H = this._hash.words;

    	            var H0 = H[0];
    	            var H1 = H[1];
    	            var H2 = H[2];
    	            var H3 = H[3];
    	            var H4 = H[4];
    	            var H5 = H[5];
    	            var H6 = H[6];
    	            var H7 = H[7];

    	            var H0h = H0.high;
    	            var H0l = H0.low;
    	            var H1h = H1.high;
    	            var H1l = H1.low;
    	            var H2h = H2.high;
    	            var H2l = H2.low;
    	            var H3h = H3.high;
    	            var H3l = H3.low;
    	            var H4h = H4.high;
    	            var H4l = H4.low;
    	            var H5h = H5.high;
    	            var H5l = H5.low;
    	            var H6h = H6.high;
    	            var H6l = H6.low;
    	            var H7h = H7.high;
    	            var H7l = H7.low;

    	            // Working variables
    	            var ah = H0h;
    	            var al = H0l;
    	            var bh = H1h;
    	            var bl = H1l;
    	            var ch = H2h;
    	            var cl = H2l;
    	            var dh = H3h;
    	            var dl = H3l;
    	            var eh = H4h;
    	            var el = H4l;
    	            var fh = H5h;
    	            var fl = H5l;
    	            var gh = H6h;
    	            var gl = H6l;
    	            var hh = H7h;
    	            var hl = H7l;

    	            // Rounds
    	            for (var i = 0; i < 80; i++) {
    	                var Wil;
    	                var Wih;

    	                // Shortcut
    	                var Wi = W[i];

    	                // Extend message
    	                if (i < 16) {
    	                    Wih = Wi.high = M[offset + i * 2]     | 0;
    	                    Wil = Wi.low  = M[offset + i * 2 + 1] | 0;
    	                } else {
    	                    // Gamma0
    	                    var gamma0x  = W[i - 15];
    	                    var gamma0xh = gamma0x.high;
    	                    var gamma0xl = gamma0x.low;
    	                    var gamma0h  = ((gamma0xh >>> 1) | (gamma0xl << 31)) ^ ((gamma0xh >>> 8) | (gamma0xl << 24)) ^ (gamma0xh >>> 7);
    	                    var gamma0l  = ((gamma0xl >>> 1) | (gamma0xh << 31)) ^ ((gamma0xl >>> 8) | (gamma0xh << 24)) ^ ((gamma0xl >>> 7) | (gamma0xh << 25));

    	                    // Gamma1
    	                    var gamma1x  = W[i - 2];
    	                    var gamma1xh = gamma1x.high;
    	                    var gamma1xl = gamma1x.low;
    	                    var gamma1h  = ((gamma1xh >>> 19) | (gamma1xl << 13)) ^ ((gamma1xh << 3) | (gamma1xl >>> 29)) ^ (gamma1xh >>> 6);
    	                    var gamma1l  = ((gamma1xl >>> 19) | (gamma1xh << 13)) ^ ((gamma1xl << 3) | (gamma1xh >>> 29)) ^ ((gamma1xl >>> 6) | (gamma1xh << 26));

    	                    // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
    	                    var Wi7  = W[i - 7];
    	                    var Wi7h = Wi7.high;
    	                    var Wi7l = Wi7.low;

    	                    var Wi16  = W[i - 16];
    	                    var Wi16h = Wi16.high;
    	                    var Wi16l = Wi16.low;

    	                    Wil = gamma0l + Wi7l;
    	                    Wih = gamma0h + Wi7h + ((Wil >>> 0) < (gamma0l >>> 0) ? 1 : 0);
    	                    Wil = Wil + gamma1l;
    	                    Wih = Wih + gamma1h + ((Wil >>> 0) < (gamma1l >>> 0) ? 1 : 0);
    	                    Wil = Wil + Wi16l;
    	                    Wih = Wih + Wi16h + ((Wil >>> 0) < (Wi16l >>> 0) ? 1 : 0);

    	                    Wi.high = Wih;
    	                    Wi.low  = Wil;
    	                }

    	                var chh  = (eh & fh) ^ (~eh & gh);
    	                var chl  = (el & fl) ^ (~el & gl);
    	                var majh = (ah & bh) ^ (ah & ch) ^ (bh & ch);
    	                var majl = (al & bl) ^ (al & cl) ^ (bl & cl);

    	                var sigma0h = ((ah >>> 28) | (al << 4))  ^ ((ah << 30)  | (al >>> 2)) ^ ((ah << 25) | (al >>> 7));
    	                var sigma0l = ((al >>> 28) | (ah << 4))  ^ ((al << 30)  | (ah >>> 2)) ^ ((al << 25) | (ah >>> 7));
    	                var sigma1h = ((eh >>> 14) | (el << 18)) ^ ((eh >>> 18) | (el << 14)) ^ ((eh << 23) | (el >>> 9));
    	                var sigma1l = ((el >>> 14) | (eh << 18)) ^ ((el >>> 18) | (eh << 14)) ^ ((el << 23) | (eh >>> 9));

    	                // t1 = h + sigma1 + ch + K[i] + W[i]
    	                var Ki  = K[i];
    	                var Kih = Ki.high;
    	                var Kil = Ki.low;

    	                var t1l = hl + sigma1l;
    	                var t1h = hh + sigma1h + ((t1l >>> 0) < (hl >>> 0) ? 1 : 0);
    	                var t1l = t1l + chl;
    	                var t1h = t1h + chh + ((t1l >>> 0) < (chl >>> 0) ? 1 : 0);
    	                var t1l = t1l + Kil;
    	                var t1h = t1h + Kih + ((t1l >>> 0) < (Kil >>> 0) ? 1 : 0);
    	                var t1l = t1l + Wil;
    	                var t1h = t1h + Wih + ((t1l >>> 0) < (Wil >>> 0) ? 1 : 0);

    	                // t2 = sigma0 + maj
    	                var t2l = sigma0l + majl;
    	                var t2h = sigma0h + majh + ((t2l >>> 0) < (sigma0l >>> 0) ? 1 : 0);

    	                // Update working variables
    	                hh = gh;
    	                hl = gl;
    	                gh = fh;
    	                gl = fl;
    	                fh = eh;
    	                fl = el;
    	                el = (dl + t1l) | 0;
    	                eh = (dh + t1h + ((el >>> 0) < (dl >>> 0) ? 1 : 0)) | 0;
    	                dh = ch;
    	                dl = cl;
    	                ch = bh;
    	                cl = bl;
    	                bh = ah;
    	                bl = al;
    	                al = (t1l + t2l) | 0;
    	                ah = (t1h + t2h + ((al >>> 0) < (t1l >>> 0) ? 1 : 0)) | 0;
    	            }

    	            // Intermediate hash value
    	            H0l = H0.low  = (H0l + al);
    	            H0.high = (H0h + ah + ((H0l >>> 0) < (al >>> 0) ? 1 : 0));
    	            H1l = H1.low  = (H1l + bl);
    	            H1.high = (H1h + bh + ((H1l >>> 0) < (bl >>> 0) ? 1 : 0));
    	            H2l = H2.low  = (H2l + cl);
    	            H2.high = (H2h + ch + ((H2l >>> 0) < (cl >>> 0) ? 1 : 0));
    	            H3l = H3.low  = (H3l + dl);
    	            H3.high = (H3h + dh + ((H3l >>> 0) < (dl >>> 0) ? 1 : 0));
    	            H4l = H4.low  = (H4l + el);
    	            H4.high = (H4h + eh + ((H4l >>> 0) < (el >>> 0) ? 1 : 0));
    	            H5l = H5.low  = (H5l + fl);
    	            H5.high = (H5h + fh + ((H5l >>> 0) < (fl >>> 0) ? 1 : 0));
    	            H6l = H6.low  = (H6l + gl);
    	            H6.high = (H6h + gh + ((H6l >>> 0) < (gl >>> 0) ? 1 : 0));
    	            H7l = H7.low  = (H7l + hl);
    	            H7.high = (H7h + hh + ((H7l >>> 0) < (hl >>> 0) ? 1 : 0));
    	        },

    	        _doFinalize: function () {
    	            // Shortcuts
    	            var data = this._data;
    	            var dataWords = data.words;

    	            var nBitsTotal = this._nDataBytes * 8;
    	            var nBitsLeft = data.sigBytes * 8;

    	            // Add padding
    	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
    	            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 30] = Math.floor(nBitsTotal / 0x100000000);
    	            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 31] = nBitsTotal;
    	            data.sigBytes = dataWords.length * 4;

    	            // Hash final blocks
    	            this._process();

    	            // Convert hash to 32-bit word array before returning
    	            var hash = this._hash.toX32();

    	            // Return final computed hash
    	            return hash;
    	        },

    	        clone: function () {
    	            var clone = Hasher.clone.call(this);
    	            clone._hash = this._hash.clone();

    	            return clone;
    	        },

    	        blockSize: 1024/32
    	    });

    	    /**
    	     * Shortcut function to the hasher's object interface.
    	     *
    	     * @param {WordArray|string} message The message to hash.
    	     *
    	     * @return {WordArray} The hash.
    	     *
    	     * @static
    	     *
    	     * @example
    	     *
    	     *     var hash = CryptoJS.SHA512('message');
    	     *     var hash = CryptoJS.SHA512(wordArray);
    	     */
    	    C.SHA512 = Hasher._createHelper(SHA512);

    	    /**
    	     * Shortcut function to the HMAC's object interface.
    	     *
    	     * @param {WordArray|string} message The message to hash.
    	     * @param {WordArray|string} key The secret key.
    	     *
    	     * @return {WordArray} The HMAC.
    	     *
    	     * @static
    	     *
    	     * @example
    	     *
    	     *     var hmac = CryptoJS.HmacSHA512(message, key);
    	     */
    	    C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
    	}());


    	return CryptoJS.SHA512;

    }));
    });

    var sha384 = createCommonjsModule(function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = exports = factory(core$2, x64Core, sha512);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	(function () {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_x64 = C.x64;
    	    var X64Word = C_x64.Word;
    	    var X64WordArray = C_x64.WordArray;
    	    var C_algo = C.algo;
    	    var SHA512 = C_algo.SHA512;

    	    /**
    	     * SHA-384 hash algorithm.
    	     */
    	    var SHA384 = C_algo.SHA384 = SHA512.extend({
    	        _doReset: function () {
    	            this._hash = new X64WordArray.init([
    	                new X64Word.init(0xcbbb9d5d, 0xc1059ed8), new X64Word.init(0x629a292a, 0x367cd507),
    	                new X64Word.init(0x9159015a, 0x3070dd17), new X64Word.init(0x152fecd8, 0xf70e5939),
    	                new X64Word.init(0x67332667, 0xffc00b31), new X64Word.init(0x8eb44a87, 0x68581511),
    	                new X64Word.init(0xdb0c2e0d, 0x64f98fa7), new X64Word.init(0x47b5481d, 0xbefa4fa4)
    	            ]);
    	        },

    	        _doFinalize: function () {
    	            var hash = SHA512._doFinalize.call(this);

    	            hash.sigBytes -= 16;

    	            return hash;
    	        }
    	    });

    	    /**
    	     * Shortcut function to the hasher's object interface.
    	     *
    	     * @param {WordArray|string} message The message to hash.
    	     *
    	     * @return {WordArray} The hash.
    	     *
    	     * @static
    	     *
    	     * @example
    	     *
    	     *     var hash = CryptoJS.SHA384('message');
    	     *     var hash = CryptoJS.SHA384(wordArray);
    	     */
    	    C.SHA384 = SHA512._createHelper(SHA384);

    	    /**
    	     * Shortcut function to the HMAC's object interface.
    	     *
    	     * @param {WordArray|string} message The message to hash.
    	     * @param {WordArray|string} key The secret key.
    	     *
    	     * @return {WordArray} The HMAC.
    	     *
    	     * @static
    	     *
    	     * @example
    	     *
    	     *     var hmac = CryptoJS.HmacSHA384(message, key);
    	     */
    	    C.HmacSHA384 = SHA512._createHmacHelper(SHA384);
    	}());


    	return CryptoJS.SHA384;

    }));
    });

    var sha3 = createCommonjsModule(function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = exports = factory(core$2, x64Core);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	(function (Math) {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var WordArray = C_lib.WordArray;
    	    var Hasher = C_lib.Hasher;
    	    var C_x64 = C.x64;
    	    var X64Word = C_x64.Word;
    	    var C_algo = C.algo;

    	    // Constants tables
    	    var RHO_OFFSETS = [];
    	    var PI_INDEXES  = [];
    	    var ROUND_CONSTANTS = [];

    	    // Compute Constants
    	    (function () {
    	        // Compute rho offset constants
    	        var x = 1, y = 0;
    	        for (var t = 0; t < 24; t++) {
    	            RHO_OFFSETS[x + 5 * y] = ((t + 1) * (t + 2) / 2) % 64;

    	            var newX = y % 5;
    	            var newY = (2 * x + 3 * y) % 5;
    	            x = newX;
    	            y = newY;
    	        }

    	        // Compute pi index constants
    	        for (var x = 0; x < 5; x++) {
    	            for (var y = 0; y < 5; y++) {
    	                PI_INDEXES[x + 5 * y] = y + ((2 * x + 3 * y) % 5) * 5;
    	            }
    	        }

    	        // Compute round constants
    	        var LFSR = 0x01;
    	        for (var i = 0; i < 24; i++) {
    	            var roundConstantMsw = 0;
    	            var roundConstantLsw = 0;

    	            for (var j = 0; j < 7; j++) {
    	                if (LFSR & 0x01) {
    	                    var bitPosition = (1 << j) - 1;
    	                    if (bitPosition < 32) {
    	                        roundConstantLsw ^= 1 << bitPosition;
    	                    } else /* if (bitPosition >= 32) */ {
    	                        roundConstantMsw ^= 1 << (bitPosition - 32);
    	                    }
    	                }

    	                // Compute next LFSR
    	                if (LFSR & 0x80) {
    	                    // Primitive polynomial over GF(2): x^8 + x^6 + x^5 + x^4 + 1
    	                    LFSR = (LFSR << 1) ^ 0x71;
    	                } else {
    	                    LFSR <<= 1;
    	                }
    	            }

    	            ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
    	        }
    	    }());

    	    // Reusable objects for temporary values
    	    var T = [];
    	    (function () {
    	        for (var i = 0; i < 25; i++) {
    	            T[i] = X64Word.create();
    	        }
    	    }());

    	    /**
    	     * SHA-3 hash algorithm.
    	     */
    	    var SHA3 = C_algo.SHA3 = Hasher.extend({
    	        /**
    	         * Configuration options.
    	         *
    	         * @property {number} outputLength
    	         *   The desired number of bits in the output hash.
    	         *   Only values permitted are: 224, 256, 384, 512.
    	         *   Default: 512
    	         */
    	        cfg: Hasher.cfg.extend({
    	            outputLength: 512
    	        }),

    	        _doReset: function () {
    	            var state = this._state = [];
    	            for (var i = 0; i < 25; i++) {
    	                state[i] = new X64Word.init();
    	            }

    	            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
    	        },

    	        _doProcessBlock: function (M, offset) {
    	            // Shortcuts
    	            var state = this._state;
    	            var nBlockSizeLanes = this.blockSize / 2;

    	            // Absorb
    	            for (var i = 0; i < nBlockSizeLanes; i++) {
    	                // Shortcuts
    	                var M2i  = M[offset + 2 * i];
    	                var M2i1 = M[offset + 2 * i + 1];

    	                // Swap endian
    	                M2i = (
    	                    (((M2i << 8)  | (M2i >>> 24)) & 0x00ff00ff) |
    	                    (((M2i << 24) | (M2i >>> 8))  & 0xff00ff00)
    	                );
    	                M2i1 = (
    	                    (((M2i1 << 8)  | (M2i1 >>> 24)) & 0x00ff00ff) |
    	                    (((M2i1 << 24) | (M2i1 >>> 8))  & 0xff00ff00)
    	                );

    	                // Absorb message into state
    	                var lane = state[i];
    	                lane.high ^= M2i1;
    	                lane.low  ^= M2i;
    	            }

    	            // Rounds
    	            for (var round = 0; round < 24; round++) {
    	                // Theta
    	                for (var x = 0; x < 5; x++) {
    	                    // Mix column lanes
    	                    var tMsw = 0, tLsw = 0;
    	                    for (var y = 0; y < 5; y++) {
    	                        var lane = state[x + 5 * y];
    	                        tMsw ^= lane.high;
    	                        tLsw ^= lane.low;
    	                    }

    	                    // Temporary values
    	                    var Tx = T[x];
    	                    Tx.high = tMsw;
    	                    Tx.low  = tLsw;
    	                }
    	                for (var x = 0; x < 5; x++) {
    	                    // Shortcuts
    	                    var Tx4 = T[(x + 4) % 5];
    	                    var Tx1 = T[(x + 1) % 5];
    	                    var Tx1Msw = Tx1.high;
    	                    var Tx1Lsw = Tx1.low;

    	                    // Mix surrounding columns
    	                    var tMsw = Tx4.high ^ ((Tx1Msw << 1) | (Tx1Lsw >>> 31));
    	                    var tLsw = Tx4.low  ^ ((Tx1Lsw << 1) | (Tx1Msw >>> 31));
    	                    for (var y = 0; y < 5; y++) {
    	                        var lane = state[x + 5 * y];
    	                        lane.high ^= tMsw;
    	                        lane.low  ^= tLsw;
    	                    }
    	                }

    	                // Rho Pi
    	                for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
    	                    var tMsw;
    	                    var tLsw;

    	                    // Shortcuts
    	                    var lane = state[laneIndex];
    	                    var laneMsw = lane.high;
    	                    var laneLsw = lane.low;
    	                    var rhoOffset = RHO_OFFSETS[laneIndex];

    	                    // Rotate lanes
    	                    if (rhoOffset < 32) {
    	                        tMsw = (laneMsw << rhoOffset) | (laneLsw >>> (32 - rhoOffset));
    	                        tLsw = (laneLsw << rhoOffset) | (laneMsw >>> (32 - rhoOffset));
    	                    } else /* if (rhoOffset >= 32) */ {
    	                        tMsw = (laneLsw << (rhoOffset - 32)) | (laneMsw >>> (64 - rhoOffset));
    	                        tLsw = (laneMsw << (rhoOffset - 32)) | (laneLsw >>> (64 - rhoOffset));
    	                    }

    	                    // Transpose lanes
    	                    var TPiLane = T[PI_INDEXES[laneIndex]];
    	                    TPiLane.high = tMsw;
    	                    TPiLane.low  = tLsw;
    	                }

    	                // Rho pi at x = y = 0
    	                var T0 = T[0];
    	                var state0 = state[0];
    	                T0.high = state0.high;
    	                T0.low  = state0.low;

    	                // Chi
    	                for (var x = 0; x < 5; x++) {
    	                    for (var y = 0; y < 5; y++) {
    	                        // Shortcuts
    	                        var laneIndex = x + 5 * y;
    	                        var lane = state[laneIndex];
    	                        var TLane = T[laneIndex];
    	                        var Tx1Lane = T[((x + 1) % 5) + 5 * y];
    	                        var Tx2Lane = T[((x + 2) % 5) + 5 * y];

    	                        // Mix rows
    	                        lane.high = TLane.high ^ (~Tx1Lane.high & Tx2Lane.high);
    	                        lane.low  = TLane.low  ^ (~Tx1Lane.low  & Tx2Lane.low);
    	                    }
    	                }

    	                // Iota
    	                var lane = state[0];
    	                var roundConstant = ROUND_CONSTANTS[round];
    	                lane.high ^= roundConstant.high;
    	                lane.low  ^= roundConstant.low;
    	            }
    	        },

    	        _doFinalize: function () {
    	            // Shortcuts
    	            var data = this._data;
    	            var dataWords = data.words;
    	            var nBitsTotal = this._nDataBytes * 8;
    	            var nBitsLeft = data.sigBytes * 8;
    	            var blockSizeBits = this.blockSize * 32;

    	            // Add padding
    	            dataWords[nBitsLeft >>> 5] |= 0x1 << (24 - nBitsLeft % 32);
    	            dataWords[((Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits) >>> 5) - 1] |= 0x80;
    	            data.sigBytes = dataWords.length * 4;

    	            // Hash final blocks
    	            this._process();

    	            // Shortcuts
    	            var state = this._state;
    	            var outputLengthBytes = this.cfg.outputLength / 8;
    	            var outputLengthLanes = outputLengthBytes / 8;

    	            // Squeeze
    	            var hashWords = [];
    	            for (var i = 0; i < outputLengthLanes; i++) {
    	                // Shortcuts
    	                var lane = state[i];
    	                var laneMsw = lane.high;
    	                var laneLsw = lane.low;

    	                // Swap endian
    	                laneMsw = (
    	                    (((laneMsw << 8)  | (laneMsw >>> 24)) & 0x00ff00ff) |
    	                    (((laneMsw << 24) | (laneMsw >>> 8))  & 0xff00ff00)
    	                );
    	                laneLsw = (
    	                    (((laneLsw << 8)  | (laneLsw >>> 24)) & 0x00ff00ff) |
    	                    (((laneLsw << 24) | (laneLsw >>> 8))  & 0xff00ff00)
    	                );

    	                // Squeeze state to retrieve hash
    	                hashWords.push(laneLsw);
    	                hashWords.push(laneMsw);
    	            }

    	            // Return final computed hash
    	            return new WordArray.init(hashWords, outputLengthBytes);
    	        },

    	        clone: function () {
    	            var clone = Hasher.clone.call(this);

    	            var state = clone._state = this._state.slice(0);
    	            for (var i = 0; i < 25; i++) {
    	                state[i] = state[i].clone();
    	            }

    	            return clone;
    	        }
    	    });

    	    /**
    	     * Shortcut function to the hasher's object interface.
    	     *
    	     * @param {WordArray|string} message The message to hash.
    	     *
    	     * @return {WordArray} The hash.
    	     *
    	     * @static
    	     *
    	     * @example
    	     *
    	     *     var hash = CryptoJS.SHA3('message');
    	     *     var hash = CryptoJS.SHA3(wordArray);
    	     */
    	    C.SHA3 = Hasher._createHelper(SHA3);

    	    /**
    	     * Shortcut function to the HMAC's object interface.
    	     *
    	     * @param {WordArray|string} message The message to hash.
    	     * @param {WordArray|string} key The secret key.
    	     *
    	     * @return {WordArray} The HMAC.
    	     *
    	     * @static
    	     *
    	     * @example
    	     *
    	     *     var hmac = CryptoJS.HmacSHA3(message, key);
    	     */
    	    C.HmacSHA3 = Hasher._createHmacHelper(SHA3);
    	}(Math));


    	return CryptoJS.SHA3;

    }));
    });

    var ripemd160 = createCommonjsModule(function (module, exports) {
    (function (root, factory) {
    	{
    		// CommonJS
    		module.exports = exports = factory(core$2);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	/** @preserve
    	(c) 2012 by Cédric Mesnil. All rights reserved.

    	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

    	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
    	    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

    	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    	*/

    	(function (Math) {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var WordArray = C_lib.WordArray;
    	    var Hasher = C_lib.Hasher;
    	    var C_algo = C.algo;

    	    // Constants table
    	    var _zl = WordArray.create([
    	        0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15,
    	        7,  4, 13,  1, 10,  6, 15,  3, 12,  0,  9,  5,  2, 14, 11,  8,
    	        3, 10, 14,  4,  9, 15,  8,  1,  2,  7,  0,  6, 13, 11,  5, 12,
    	        1,  9, 11, 10,  0,  8, 12,  4, 13,  3,  7, 15, 14,  5,  6,  2,
    	        4,  0,  5,  9,  7, 12,  2, 10, 14,  1,  3,  8, 11,  6, 15, 13]);
    	    var _zr = WordArray.create([
    	        5, 14,  7,  0,  9,  2, 11,  4, 13,  6, 15,  8,  1, 10,  3, 12,
    	        6, 11,  3,  7,  0, 13,  5, 10, 14, 15,  8, 12,  4,  9,  1,  2,
    	        15,  5,  1,  3,  7, 14,  6,  9, 11,  8, 12,  2, 10,  0,  4, 13,
    	        8,  6,  4,  1,  3, 11, 15,  0,  5, 12,  2, 13,  9,  7, 10, 14,
    	        12, 15, 10,  4,  1,  5,  8,  7,  6,  2, 13, 14,  0,  3,  9, 11]);
    	    var _sl = WordArray.create([
    	         11, 14, 15, 12,  5,  8,  7,  9, 11, 13, 14, 15,  6,  7,  9,  8,
    	        7, 6,   8, 13, 11,  9,  7, 15,  7, 12, 15,  9, 11,  7, 13, 12,
    	        11, 13,  6,  7, 14,  9, 13, 15, 14,  8, 13,  6,  5, 12,  7,  5,
    	          11, 12, 14, 15, 14, 15,  9,  8,  9, 14,  5,  6,  8,  6,  5, 12,
    	        9, 15,  5, 11,  6,  8, 13, 12,  5, 12, 13, 14, 11,  8,  5,  6 ]);
    	    var _sr = WordArray.create([
    	        8,  9,  9, 11, 13, 15, 15,  5,  7,  7,  8, 11, 14, 14, 12,  6,
    	        9, 13, 15,  7, 12,  8,  9, 11,  7,  7, 12,  7,  6, 15, 13, 11,
    	        9,  7, 15, 11,  8,  6,  6, 14, 12, 13,  5, 14, 13, 13,  7,  5,
    	        15,  5,  8, 11, 14, 14,  6, 14,  6,  9, 12,  9, 12,  5, 15,  8,
    	        8,  5, 12,  9, 12,  5, 14,  6,  8, 13,  6,  5, 15, 13, 11, 11 ]);

    	    var _hl =  WordArray.create([ 0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E]);
    	    var _hr =  WordArray.create([ 0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000]);

    	    /**
    	     * RIPEMD160 hash algorithm.
    	     */
    	    var RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({
    	        _doReset: function () {
    	            this._hash  = WordArray.create([0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0]);
    	        },

    	        _doProcessBlock: function (M, offset) {

    	            // Swap endian
    	            for (var i = 0; i < 16; i++) {
    	                // Shortcuts
    	                var offset_i = offset + i;
    	                var M_offset_i = M[offset_i];

    	                // Swap
    	                M[offset_i] = (
    	                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
    	                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
    	                );
    	            }
    	            // Shortcut
    	            var H  = this._hash.words;
    	            var hl = _hl.words;
    	            var hr = _hr.words;
    	            var zl = _zl.words;
    	            var zr = _zr.words;
    	            var sl = _sl.words;
    	            var sr = _sr.words;

    	            // Working variables
    	            var al, bl, cl, dl, el;
    	            var ar, br, cr, dr, er;

    	            ar = al = H[0];
    	            br = bl = H[1];
    	            cr = cl = H[2];
    	            dr = dl = H[3];
    	            er = el = H[4];
    	            // Computation
    	            var t;
    	            for (var i = 0; i < 80; i += 1) {
    	                t = (al +  M[offset+zl[i]])|0;
    	                if (i<16){
    		            t +=  f1(bl,cl,dl) + hl[0];
    	                } else if (i<32) {
    		            t +=  f2(bl,cl,dl) + hl[1];
    	                } else if (i<48) {
    		            t +=  f3(bl,cl,dl) + hl[2];
    	                } else if (i<64) {
    		            t +=  f4(bl,cl,dl) + hl[3];
    	                } else {// if (i<80) {
    		            t +=  f5(bl,cl,dl) + hl[4];
    	                }
    	                t = t|0;
    	                t =  rotl(t,sl[i]);
    	                t = (t+el)|0;
    	                al = el;
    	                el = dl;
    	                dl = rotl(cl, 10);
    	                cl = bl;
    	                bl = t;

    	                t = (ar + M[offset+zr[i]])|0;
    	                if (i<16){
    		            t +=  f5(br,cr,dr) + hr[0];
    	                } else if (i<32) {
    		            t +=  f4(br,cr,dr) + hr[1];
    	                } else if (i<48) {
    		            t +=  f3(br,cr,dr) + hr[2];
    	                } else if (i<64) {
    		            t +=  f2(br,cr,dr) + hr[3];
    	                } else {// if (i<80) {
    		            t +=  f1(br,cr,dr) + hr[4];
    	                }
    	                t = t|0;
    	                t =  rotl(t,sr[i]) ;
    	                t = (t+er)|0;
    	                ar = er;
    	                er = dr;
    	                dr = rotl(cr, 10);
    	                cr = br;
    	                br = t;
    	            }
    	            // Intermediate hash value
    	            t    = (H[1] + cl + dr)|0;
    	            H[1] = (H[2] + dl + er)|0;
    	            H[2] = (H[3] + el + ar)|0;
    	            H[3] = (H[4] + al + br)|0;
    	            H[4] = (H[0] + bl + cr)|0;
    	            H[0] =  t;
    	        },

    	        _doFinalize: function () {
    	            // Shortcuts
    	            var data = this._data;
    	            var dataWords = data.words;

    	            var nBitsTotal = this._nDataBytes * 8;
    	            var nBitsLeft = data.sigBytes * 8;

    	            // Add padding
    	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
    	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
    	                (((nBitsTotal << 8)  | (nBitsTotal >>> 24)) & 0x00ff00ff) |
    	                (((nBitsTotal << 24) | (nBitsTotal >>> 8))  & 0xff00ff00)
    	            );
    	            data.sigBytes = (dataWords.length + 1) * 4;

    	            // Hash final blocks
    	            this._process();

    	            // Shortcuts
    	            var hash = this._hash;
    	            var H = hash.words;

    	            // Swap endian
    	            for (var i = 0; i < 5; i++) {
    	                // Shortcut
    	                var H_i = H[i];

    	                // Swap
    	                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
    	                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
    	            }

    	            // Return final computed hash
    	            return hash;
    	        },

    	        clone: function () {
    	            var clone = Hasher.clone.call(this);
    	            clone._hash = this._hash.clone();

    	            return clone;
    	        }
    	    });


    	    function f1(x, y, z) {
    	        return ((x) ^ (y) ^ (z));

    	    }

    	    function f2(x, y, z) {
    	        return (((x)&(y)) | ((~x)&(z)));
    	    }

    	    function f3(x, y, z) {
    	        return (((x) | (~(y))) ^ (z));
    	    }

    	    function f4(x, y, z) {
    	        return (((x) & (z)) | ((y)&(~(z))));
    	    }

    	    function f5(x, y, z) {
    	        return ((x) ^ ((y) |(~(z))));

    	    }

    	    function rotl(x,n) {
    	        return (x<<n) | (x>>>(32-n));
    	    }


    	    /**
    	     * Shortcut function to the hasher's object interface.
    	     *
    	     * @param {WordArray|string} message The message to hash.
    	     *
    	     * @return {WordArray} The hash.
    	     *
    	     * @static
    	     *
    	     * @example
    	     *
    	     *     var hash = CryptoJS.RIPEMD160('message');
    	     *     var hash = CryptoJS.RIPEMD160(wordArray);
    	     */
    	    C.RIPEMD160 = Hasher._createHelper(RIPEMD160);

    	    /**
    	     * Shortcut function to the HMAC's object interface.
    	     *
    	     * @param {WordArray|string} message The message to hash.
    	     * @param {WordArray|string} key The secret key.
    	     *
    	     * @return {WordArray} The HMAC.
    	     *
    	     * @static
    	     *
    	     * @example
    	     *
    	     *     var hmac = CryptoJS.HmacRIPEMD160(message, key);
    	     */
    	    C.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);
    	}());


    	return CryptoJS.RIPEMD160;

    }));
    });

    var hmac = createCommonjsModule(function (module, exports) {
    (function (root, factory) {
    	{
    		// CommonJS
    		module.exports = exports = factory(core$2);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	(function () {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var Base = C_lib.Base;
    	    var C_enc = C.enc;
    	    var Utf8 = C_enc.Utf8;
    	    var C_algo = C.algo;

    	    /**
    	     * HMAC algorithm.
    	     */
    	    var HMAC = C_algo.HMAC = Base.extend({
    	        /**
    	         * Initializes a newly created HMAC.
    	         *
    	         * @param {Hasher} hasher The hash algorithm to use.
    	         * @param {WordArray|string} key The secret key.
    	         *
    	         * @example
    	         *
    	         *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
    	         */
    	        init: function (hasher, key) {
    	            // Init hasher
    	            hasher = this._hasher = new hasher.init();

    	            // Convert string to WordArray, else assume WordArray already
    	            if (typeof key == 'string') {
    	                key = Utf8.parse(key);
    	            }

    	            // Shortcuts
    	            var hasherBlockSize = hasher.blockSize;
    	            var hasherBlockSizeBytes = hasherBlockSize * 4;

    	            // Allow arbitrary length keys
    	            if (key.sigBytes > hasherBlockSizeBytes) {
    	                key = hasher.finalize(key);
    	            }

    	            // Clamp excess bits
    	            key.clamp();

    	            // Clone key for inner and outer pads
    	            var oKey = this._oKey = key.clone();
    	            var iKey = this._iKey = key.clone();

    	            // Shortcuts
    	            var oKeyWords = oKey.words;
    	            var iKeyWords = iKey.words;

    	            // XOR keys with pad constants
    	            for (var i = 0; i < hasherBlockSize; i++) {
    	                oKeyWords[i] ^= 0x5c5c5c5c;
    	                iKeyWords[i] ^= 0x36363636;
    	            }
    	            oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;

    	            // Set initial values
    	            this.reset();
    	        },

    	        /**
    	         * Resets this HMAC to its initial state.
    	         *
    	         * @example
    	         *
    	         *     hmacHasher.reset();
    	         */
    	        reset: function () {
    	            // Shortcut
    	            var hasher = this._hasher;

    	            // Reset
    	            hasher.reset();
    	            hasher.update(this._iKey);
    	        },

    	        /**
    	         * Updates this HMAC with a message.
    	         *
    	         * @param {WordArray|string} messageUpdate The message to append.
    	         *
    	         * @return {HMAC} This HMAC instance.
    	         *
    	         * @example
    	         *
    	         *     hmacHasher.update('message');
    	         *     hmacHasher.update(wordArray);
    	         */
    	        update: function (messageUpdate) {
    	            this._hasher.update(messageUpdate);

    	            // Chainable
    	            return this;
    	        },

    	        /**
    	         * Finalizes the HMAC computation.
    	         * Note that the finalize operation is effectively a destructive, read-once operation.
    	         *
    	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
    	         *
    	         * @return {WordArray} The HMAC.
    	         *
    	         * @example
    	         *
    	         *     var hmac = hmacHasher.finalize();
    	         *     var hmac = hmacHasher.finalize('message');
    	         *     var hmac = hmacHasher.finalize(wordArray);
    	         */
    	        finalize: function (messageUpdate) {
    	            // Shortcut
    	            var hasher = this._hasher;

    	            // Compute HMAC
    	            var innerHash = hasher.finalize(messageUpdate);
    	            hasher.reset();
    	            var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));

    	            return hmac;
    	        }
    	    });
    	}());


    }));
    });

    var pbkdf2 = createCommonjsModule(function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = exports = factory(core$2, sha1, hmac);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	(function () {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var Base = C_lib.Base;
    	    var WordArray = C_lib.WordArray;
    	    var C_algo = C.algo;
    	    var SHA1 = C_algo.SHA1;
    	    var HMAC = C_algo.HMAC;

    	    /**
    	     * Password-Based Key Derivation Function 2 algorithm.
    	     */
    	    var PBKDF2 = C_algo.PBKDF2 = Base.extend({
    	        /**
    	         * Configuration options.
    	         *
    	         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
    	         * @property {Hasher} hasher The hasher to use. Default: SHA1
    	         * @property {number} iterations The number of iterations to perform. Default: 1
    	         */
    	        cfg: Base.extend({
    	            keySize: 128/32,
    	            hasher: SHA1,
    	            iterations: 1
    	        }),

    	        /**
    	         * Initializes a newly created key derivation function.
    	         *
    	         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
    	         *
    	         * @example
    	         *
    	         *     var kdf = CryptoJS.algo.PBKDF2.create();
    	         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
    	         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
    	         */
    	        init: function (cfg) {
    	            this.cfg = this.cfg.extend(cfg);
    	        },

    	        /**
    	         * Computes the Password-Based Key Derivation Function 2.
    	         *
    	         * @param {WordArray|string} password The password.
    	         * @param {WordArray|string} salt A salt.
    	         *
    	         * @return {WordArray} The derived key.
    	         *
    	         * @example
    	         *
    	         *     var key = kdf.compute(password, salt);
    	         */
    	        compute: function (password, salt) {
    	            // Shortcut
    	            var cfg = this.cfg;

    	            // Init HMAC
    	            var hmac = HMAC.create(cfg.hasher, password);

    	            // Initial values
    	            var derivedKey = WordArray.create();
    	            var blockIndex = WordArray.create([0x00000001]);

    	            // Shortcuts
    	            var derivedKeyWords = derivedKey.words;
    	            var blockIndexWords = blockIndex.words;
    	            var keySize = cfg.keySize;
    	            var iterations = cfg.iterations;

    	            // Generate key
    	            while (derivedKeyWords.length < keySize) {
    	                var block = hmac.update(salt).finalize(blockIndex);
    	                hmac.reset();

    	                // Shortcuts
    	                var blockWords = block.words;
    	                var blockWordsLength = blockWords.length;

    	                // Iterations
    	                var intermediate = block;
    	                for (var i = 1; i < iterations; i++) {
    	                    intermediate = hmac.finalize(intermediate);
    	                    hmac.reset();

    	                    // Shortcut
    	                    var intermediateWords = intermediate.words;

    	                    // XOR intermediate with block
    	                    for (var j = 0; j < blockWordsLength; j++) {
    	                        blockWords[j] ^= intermediateWords[j];
    	                    }
    	                }

    	                derivedKey.concat(block);
    	                blockIndexWords[0]++;
    	            }
    	            derivedKey.sigBytes = keySize * 4;

    	            return derivedKey;
    	        }
    	    });

    	    /**
    	     * Computes the Password-Based Key Derivation Function 2.
    	     *
    	     * @param {WordArray|string} password The password.
    	     * @param {WordArray|string} salt A salt.
    	     * @param {Object} cfg (Optional) The configuration options to use for this computation.
    	     *
    	     * @return {WordArray} The derived key.
    	     *
    	     * @static
    	     *
    	     * @example
    	     *
    	     *     var key = CryptoJS.PBKDF2(password, salt);
    	     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8 });
    	     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8, iterations: 1000 });
    	     */
    	    C.PBKDF2 = function (password, salt, cfg) {
    	        return PBKDF2.create(cfg).compute(password, salt);
    	    };
    	}());


    	return CryptoJS.PBKDF2;

    }));
    });

    var evpkdf = createCommonjsModule(function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = exports = factory(core$2, sha1, hmac);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	(function () {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var Base = C_lib.Base;
    	    var WordArray = C_lib.WordArray;
    	    var C_algo = C.algo;
    	    var MD5 = C_algo.MD5;

    	    /**
    	     * This key derivation function is meant to conform with EVP_BytesToKey.
    	     * www.openssl.org/docs/crypto/EVP_BytesToKey.html
    	     */
    	    var EvpKDF = C_algo.EvpKDF = Base.extend({
    	        /**
    	         * Configuration options.
    	         *
    	         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
    	         * @property {Hasher} hasher The hash algorithm to use. Default: MD5
    	         * @property {number} iterations The number of iterations to perform. Default: 1
    	         */
    	        cfg: Base.extend({
    	            keySize: 128/32,
    	            hasher: MD5,
    	            iterations: 1
    	        }),

    	        /**
    	         * Initializes a newly created key derivation function.
    	         *
    	         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
    	         *
    	         * @example
    	         *
    	         *     var kdf = CryptoJS.algo.EvpKDF.create();
    	         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
    	         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
    	         */
    	        init: function (cfg) {
    	            this.cfg = this.cfg.extend(cfg);
    	        },

    	        /**
    	         * Derives a key from a password.
    	         *
    	         * @param {WordArray|string} password The password.
    	         * @param {WordArray|string} salt A salt.
    	         *
    	         * @return {WordArray} The derived key.
    	         *
    	         * @example
    	         *
    	         *     var key = kdf.compute(password, salt);
    	         */
    	        compute: function (password, salt) {
    	            var block;

    	            // Shortcut
    	            var cfg = this.cfg;

    	            // Init hasher
    	            var hasher = cfg.hasher.create();

    	            // Initial values
    	            var derivedKey = WordArray.create();

    	            // Shortcuts
    	            var derivedKeyWords = derivedKey.words;
    	            var keySize = cfg.keySize;
    	            var iterations = cfg.iterations;

    	            // Generate key
    	            while (derivedKeyWords.length < keySize) {
    	                if (block) {
    	                    hasher.update(block);
    	                }
    	                block = hasher.update(password).finalize(salt);
    	                hasher.reset();

    	                // Iterations
    	                for (var i = 1; i < iterations; i++) {
    	                    block = hasher.finalize(block);
    	                    hasher.reset();
    	                }

    	                derivedKey.concat(block);
    	            }
    	            derivedKey.sigBytes = keySize * 4;

    	            return derivedKey;
    	        }
    	    });

    	    /**
    	     * Derives a key from a password.
    	     *
    	     * @param {WordArray|string} password The password.
    	     * @param {WordArray|string} salt A salt.
    	     * @param {Object} cfg (Optional) The configuration options to use for this computation.
    	     *
    	     * @return {WordArray} The derived key.
    	     *
    	     * @static
    	     *
    	     * @example
    	     *
    	     *     var key = CryptoJS.EvpKDF(password, salt);
    	     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });
    	     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });
    	     */
    	    C.EvpKDF = function (password, salt, cfg) {
    	        return EvpKDF.create(cfg).compute(password, salt);
    	    };
    	}());


    	return CryptoJS.EvpKDF;

    }));
    });

    var cipherCore = createCommonjsModule(function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = exports = factory(core$2, evpkdf);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	/**
    	 * Cipher core components.
    	 */
    	CryptoJS.lib.Cipher || (function (undefined$1) {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var Base = C_lib.Base;
    	    var WordArray = C_lib.WordArray;
    	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
    	    var C_enc = C.enc;
    	    var Utf8 = C_enc.Utf8;
    	    var Base64 = C_enc.Base64;
    	    var C_algo = C.algo;
    	    var EvpKDF = C_algo.EvpKDF;

    	    /**
    	     * Abstract base cipher template.
    	     *
    	     * @property {number} keySize This cipher's key size. Default: 4 (128 bits)
    	     * @property {number} ivSize This cipher's IV size. Default: 4 (128 bits)
    	     * @property {number} _ENC_XFORM_MODE A constant representing encryption mode.
    	     * @property {number} _DEC_XFORM_MODE A constant representing decryption mode.
    	     */
    	    var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
    	        /**
    	         * Configuration options.
    	         *
    	         * @property {WordArray} iv The IV to use for this operation.
    	         */
    	        cfg: Base.extend(),

    	        /**
    	         * Creates this cipher in encryption mode.
    	         *
    	         * @param {WordArray} key The key.
    	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
    	         *
    	         * @return {Cipher} A cipher instance.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
    	         */
    	        createEncryptor: function (key, cfg) {
    	            return this.create(this._ENC_XFORM_MODE, key, cfg);
    	        },

    	        /**
    	         * Creates this cipher in decryption mode.
    	         *
    	         * @param {WordArray} key The key.
    	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
    	         *
    	         * @return {Cipher} A cipher instance.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
    	         */
    	        createDecryptor: function (key, cfg) {
    	            return this.create(this._DEC_XFORM_MODE, key, cfg);
    	        },

    	        /**
    	         * Initializes a newly created cipher.
    	         *
    	         * @param {number} xformMode Either the encryption or decryption transormation mode constant.
    	         * @param {WordArray} key The key.
    	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
    	         *
    	         * @example
    	         *
    	         *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
    	         */
    	        init: function (xformMode, key, cfg) {
    	            // Apply config defaults
    	            this.cfg = this.cfg.extend(cfg);

    	            // Store transform mode and key
    	            this._xformMode = xformMode;
    	            this._key = key;

    	            // Set initial values
    	            this.reset();
    	        },

    	        /**
    	         * Resets this cipher to its initial state.
    	         *
    	         * @example
    	         *
    	         *     cipher.reset();
    	         */
    	        reset: function () {
    	            // Reset data buffer
    	            BufferedBlockAlgorithm.reset.call(this);

    	            // Perform concrete-cipher logic
    	            this._doReset();
    	        },

    	        /**
    	         * Adds data to be encrypted or decrypted.
    	         *
    	         * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
    	         *
    	         * @return {WordArray} The data after processing.
    	         *
    	         * @example
    	         *
    	         *     var encrypted = cipher.process('data');
    	         *     var encrypted = cipher.process(wordArray);
    	         */
    	        process: function (dataUpdate) {
    	            // Append
    	            this._append(dataUpdate);

    	            // Process available blocks
    	            return this._process();
    	        },

    	        /**
    	         * Finalizes the encryption or decryption process.
    	         * Note that the finalize operation is effectively a destructive, read-once operation.
    	         *
    	         * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
    	         *
    	         * @return {WordArray} The data after final processing.
    	         *
    	         * @example
    	         *
    	         *     var encrypted = cipher.finalize();
    	         *     var encrypted = cipher.finalize('data');
    	         *     var encrypted = cipher.finalize(wordArray);
    	         */
    	        finalize: function (dataUpdate) {
    	            // Final data update
    	            if (dataUpdate) {
    	                this._append(dataUpdate);
    	            }

    	            // Perform concrete-cipher logic
    	            var finalProcessedData = this._doFinalize();

    	            return finalProcessedData;
    	        },

    	        keySize: 128/32,

    	        ivSize: 128/32,

    	        _ENC_XFORM_MODE: 1,

    	        _DEC_XFORM_MODE: 2,

    	        /**
    	         * Creates shortcut functions to a cipher's object interface.
    	         *
    	         * @param {Cipher} cipher The cipher to create a helper for.
    	         *
    	         * @return {Object} An object with encrypt and decrypt shortcut functions.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
    	         */
    	        _createHelper: (function () {
    	            function selectCipherStrategy(key) {
    	                if (typeof key == 'string') {
    	                    return PasswordBasedCipher;
    	                } else {
    	                    return SerializableCipher;
    	                }
    	            }

    	            return function (cipher) {
    	                return {
    	                    encrypt: function (message, key, cfg) {
    	                        return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
    	                    },

    	                    decrypt: function (ciphertext, key, cfg) {
    	                        return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
    	                    }
    	                };
    	            };
    	        }())
    	    });

    	    /**
    	     * Abstract base stream cipher template.
    	     *
    	     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 1 (32 bits)
    	     */
    	    var StreamCipher = C_lib.StreamCipher = Cipher.extend({
    	        _doFinalize: function () {
    	            // Process partial blocks
    	            var finalProcessedBlocks = this._process(!!'flush');

    	            return finalProcessedBlocks;
    	        },

    	        blockSize: 1
    	    });

    	    /**
    	     * Mode namespace.
    	     */
    	    var C_mode = C.mode = {};

    	    /**
    	     * Abstract base block cipher mode template.
    	     */
    	    var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
    	        /**
    	         * Creates this mode for encryption.
    	         *
    	         * @param {Cipher} cipher A block cipher instance.
    	         * @param {Array} iv The IV words.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
    	         */
    	        createEncryptor: function (cipher, iv) {
    	            return this.Encryptor.create(cipher, iv);
    	        },

    	        /**
    	         * Creates this mode for decryption.
    	         *
    	         * @param {Cipher} cipher A block cipher instance.
    	         * @param {Array} iv The IV words.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
    	         */
    	        createDecryptor: function (cipher, iv) {
    	            return this.Decryptor.create(cipher, iv);
    	        },

    	        /**
    	         * Initializes a newly created mode.
    	         *
    	         * @param {Cipher} cipher A block cipher instance.
    	         * @param {Array} iv The IV words.
    	         *
    	         * @example
    	         *
    	         *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
    	         */
    	        init: function (cipher, iv) {
    	            this._cipher = cipher;
    	            this._iv = iv;
    	        }
    	    });

    	    /**
    	     * Cipher Block Chaining mode.
    	     */
    	    var CBC = C_mode.CBC = (function () {
    	        /**
    	         * Abstract base CBC mode.
    	         */
    	        var CBC = BlockCipherMode.extend();

    	        /**
    	         * CBC encryptor.
    	         */
    	        CBC.Encryptor = CBC.extend({
    	            /**
    	             * Processes the data block at offset.
    	             *
    	             * @param {Array} words The data words to operate on.
    	             * @param {number} offset The offset where the block starts.
    	             *
    	             * @example
    	             *
    	             *     mode.processBlock(data.words, offset);
    	             */
    	            processBlock: function (words, offset) {
    	                // Shortcuts
    	                var cipher = this._cipher;
    	                var blockSize = cipher.blockSize;

    	                // XOR and encrypt
    	                xorBlock.call(this, words, offset, blockSize);
    	                cipher.encryptBlock(words, offset);

    	                // Remember this block to use with next block
    	                this._prevBlock = words.slice(offset, offset + blockSize);
    	            }
    	        });

    	        /**
    	         * CBC decryptor.
    	         */
    	        CBC.Decryptor = CBC.extend({
    	            /**
    	             * Processes the data block at offset.
    	             *
    	             * @param {Array} words The data words to operate on.
    	             * @param {number} offset The offset where the block starts.
    	             *
    	             * @example
    	             *
    	             *     mode.processBlock(data.words, offset);
    	             */
    	            processBlock: function (words, offset) {
    	                // Shortcuts
    	                var cipher = this._cipher;
    	                var blockSize = cipher.blockSize;

    	                // Remember this block to use with next block
    	                var thisBlock = words.slice(offset, offset + blockSize);

    	                // Decrypt and XOR
    	                cipher.decryptBlock(words, offset);
    	                xorBlock.call(this, words, offset, blockSize);

    	                // This block becomes the previous block
    	                this._prevBlock = thisBlock;
    	            }
    	        });

    	        function xorBlock(words, offset, blockSize) {
    	            var block;

    	            // Shortcut
    	            var iv = this._iv;

    	            // Choose mixing block
    	            if (iv) {
    	                block = iv;

    	                // Remove IV for subsequent blocks
    	                this._iv = undefined$1;
    	            } else {
    	                block = this._prevBlock;
    	            }

    	            // XOR blocks
    	            for (var i = 0; i < blockSize; i++) {
    	                words[offset + i] ^= block[i];
    	            }
    	        }

    	        return CBC;
    	    }());

    	    /**
    	     * Padding namespace.
    	     */
    	    var C_pad = C.pad = {};

    	    /**
    	     * PKCS #5/7 padding strategy.
    	     */
    	    var Pkcs7 = C_pad.Pkcs7 = {
    	        /**
    	         * Pads data using the algorithm defined in PKCS #5/7.
    	         *
    	         * @param {WordArray} data The data to pad.
    	         * @param {number} blockSize The multiple that the data should be padded to.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
    	         */
    	        pad: function (data, blockSize) {
    	            // Shortcut
    	            var blockSizeBytes = blockSize * 4;

    	            // Count padding bytes
    	            var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

    	            // Create padding word
    	            var paddingWord = (nPaddingBytes << 24) | (nPaddingBytes << 16) | (nPaddingBytes << 8) | nPaddingBytes;

    	            // Create padding
    	            var paddingWords = [];
    	            for (var i = 0; i < nPaddingBytes; i += 4) {
    	                paddingWords.push(paddingWord);
    	            }
    	            var padding = WordArray.create(paddingWords, nPaddingBytes);

    	            // Add padding
    	            data.concat(padding);
    	        },

    	        /**
    	         * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
    	         *
    	         * @param {WordArray} data The data to unpad.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     CryptoJS.pad.Pkcs7.unpad(wordArray);
    	         */
    	        unpad: function (data) {
    	            // Get number of padding bytes from last byte
    	            var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

    	            // Remove padding
    	            data.sigBytes -= nPaddingBytes;
    	        }
    	    };

    	    /**
    	     * Abstract base block cipher template.
    	     *
    	     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 4 (128 bits)
    	     */
    	    var BlockCipher = C_lib.BlockCipher = Cipher.extend({
    	        /**
    	         * Configuration options.
    	         *
    	         * @property {Mode} mode The block mode to use. Default: CBC
    	         * @property {Padding} padding The padding strategy to use. Default: Pkcs7
    	         */
    	        cfg: Cipher.cfg.extend({
    	            mode: CBC,
    	            padding: Pkcs7
    	        }),

    	        reset: function () {
    	            var modeCreator;

    	            // Reset cipher
    	            Cipher.reset.call(this);

    	            // Shortcuts
    	            var cfg = this.cfg;
    	            var iv = cfg.iv;
    	            var mode = cfg.mode;

    	            // Reset block mode
    	            if (this._xformMode == this._ENC_XFORM_MODE) {
    	                modeCreator = mode.createEncryptor;
    	            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
    	                modeCreator = mode.createDecryptor;
    	                // Keep at least one block in the buffer for unpadding
    	                this._minBufferSize = 1;
    	            }

    	            if (this._mode && this._mode.__creator == modeCreator) {
    	                this._mode.init(this, iv && iv.words);
    	            } else {
    	                this._mode = modeCreator.call(mode, this, iv && iv.words);
    	                this._mode.__creator = modeCreator;
    	            }
    	        },

    	        _doProcessBlock: function (words, offset) {
    	            this._mode.processBlock(words, offset);
    	        },

    	        _doFinalize: function () {
    	            var finalProcessedBlocks;

    	            // Shortcut
    	            var padding = this.cfg.padding;

    	            // Finalize
    	            if (this._xformMode == this._ENC_XFORM_MODE) {
    	                // Pad data
    	                padding.pad(this._data, this.blockSize);

    	                // Process final blocks
    	                finalProcessedBlocks = this._process(!!'flush');
    	            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
    	                // Process final blocks
    	                finalProcessedBlocks = this._process(!!'flush');

    	                // Unpad data
    	                padding.unpad(finalProcessedBlocks);
    	            }

    	            return finalProcessedBlocks;
    	        },

    	        blockSize: 128/32
    	    });

    	    /**
    	     * A collection of cipher parameters.
    	     *
    	     * @property {WordArray} ciphertext The raw ciphertext.
    	     * @property {WordArray} key The key to this ciphertext.
    	     * @property {WordArray} iv The IV used in the ciphering operation.
    	     * @property {WordArray} salt The salt used with a key derivation function.
    	     * @property {Cipher} algorithm The cipher algorithm.
    	     * @property {Mode} mode The block mode used in the ciphering operation.
    	     * @property {Padding} padding The padding scheme used in the ciphering operation.
    	     * @property {number} blockSize The block size of the cipher.
    	     * @property {Format} formatter The default formatting strategy to convert this cipher params object to a string.
    	     */
    	    var CipherParams = C_lib.CipherParams = Base.extend({
    	        /**
    	         * Initializes a newly created cipher params object.
    	         *
    	         * @param {Object} cipherParams An object with any of the possible cipher parameters.
    	         *
    	         * @example
    	         *
    	         *     var cipherParams = CryptoJS.lib.CipherParams.create({
    	         *         ciphertext: ciphertextWordArray,
    	         *         key: keyWordArray,
    	         *         iv: ivWordArray,
    	         *         salt: saltWordArray,
    	         *         algorithm: CryptoJS.algo.AES,
    	         *         mode: CryptoJS.mode.CBC,
    	         *         padding: CryptoJS.pad.PKCS7,
    	         *         blockSize: 4,
    	         *         formatter: CryptoJS.format.OpenSSL
    	         *     });
    	         */
    	        init: function (cipherParams) {
    	            this.mixIn(cipherParams);
    	        },

    	        /**
    	         * Converts this cipher params object to a string.
    	         *
    	         * @param {Format} formatter (Optional) The formatting strategy to use.
    	         *
    	         * @return {string} The stringified cipher params.
    	         *
    	         * @throws Error If neither the formatter nor the default formatter is set.
    	         *
    	         * @example
    	         *
    	         *     var string = cipherParams + '';
    	         *     var string = cipherParams.toString();
    	         *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
    	         */
    	        toString: function (formatter) {
    	            return (formatter || this.formatter).stringify(this);
    	        }
    	    });

    	    /**
    	     * Format namespace.
    	     */
    	    var C_format = C.format = {};

    	    /**
    	     * OpenSSL formatting strategy.
    	     */
    	    var OpenSSLFormatter = C_format.OpenSSL = {
    	        /**
    	         * Converts a cipher params object to an OpenSSL-compatible string.
    	         *
    	         * @param {CipherParams} cipherParams The cipher params object.
    	         *
    	         * @return {string} The OpenSSL-compatible string.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
    	         */
    	        stringify: function (cipherParams) {
    	            var wordArray;

    	            // Shortcuts
    	            var ciphertext = cipherParams.ciphertext;
    	            var salt = cipherParams.salt;

    	            // Format
    	            if (salt) {
    	                wordArray = WordArray.create([0x53616c74, 0x65645f5f]).concat(salt).concat(ciphertext);
    	            } else {
    	                wordArray = ciphertext;
    	            }

    	            return wordArray.toString(Base64);
    	        },

    	        /**
    	         * Converts an OpenSSL-compatible string to a cipher params object.
    	         *
    	         * @param {string} openSSLStr The OpenSSL-compatible string.
    	         *
    	         * @return {CipherParams} The cipher params object.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
    	         */
    	        parse: function (openSSLStr) {
    	            var salt;

    	            // Parse base64
    	            var ciphertext = Base64.parse(openSSLStr);

    	            // Shortcut
    	            var ciphertextWords = ciphertext.words;

    	            // Test for salt
    	            if (ciphertextWords[0] == 0x53616c74 && ciphertextWords[1] == 0x65645f5f) {
    	                // Extract salt
    	                salt = WordArray.create(ciphertextWords.slice(2, 4));

    	                // Remove salt from ciphertext
    	                ciphertextWords.splice(0, 4);
    	                ciphertext.sigBytes -= 16;
    	            }

    	            return CipherParams.create({ ciphertext: ciphertext, salt: salt });
    	        }
    	    };

    	    /**
    	     * A cipher wrapper that returns ciphertext as a serializable cipher params object.
    	     */
    	    var SerializableCipher = C_lib.SerializableCipher = Base.extend({
    	        /**
    	         * Configuration options.
    	         *
    	         * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
    	         */
    	        cfg: Base.extend({
    	            format: OpenSSLFormatter
    	        }),

    	        /**
    	         * Encrypts a message.
    	         *
    	         * @param {Cipher} cipher The cipher algorithm to use.
    	         * @param {WordArray|string} message The message to encrypt.
    	         * @param {WordArray} key The key.
    	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
    	         *
    	         * @return {CipherParams} A cipher params object.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
    	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
    	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
    	         */
    	        encrypt: function (cipher, message, key, cfg) {
    	            // Apply config defaults
    	            cfg = this.cfg.extend(cfg);

    	            // Encrypt
    	            var encryptor = cipher.createEncryptor(key, cfg);
    	            var ciphertext = encryptor.finalize(message);

    	            // Shortcut
    	            var cipherCfg = encryptor.cfg;

    	            // Create and return serializable cipher params
    	            return CipherParams.create({
    	                ciphertext: ciphertext,
    	                key: key,
    	                iv: cipherCfg.iv,
    	                algorithm: cipher,
    	                mode: cipherCfg.mode,
    	                padding: cipherCfg.padding,
    	                blockSize: cipher.blockSize,
    	                formatter: cfg.format
    	            });
    	        },

    	        /**
    	         * Decrypts serialized ciphertext.
    	         *
    	         * @param {Cipher} cipher The cipher algorithm to use.
    	         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
    	         * @param {WordArray} key The key.
    	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
    	         *
    	         * @return {WordArray} The plaintext.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
    	         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
    	         */
    	        decrypt: function (cipher, ciphertext, key, cfg) {
    	            // Apply config defaults
    	            cfg = this.cfg.extend(cfg);

    	            // Convert string to CipherParams
    	            ciphertext = this._parse(ciphertext, cfg.format);

    	            // Decrypt
    	            var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);

    	            return plaintext;
    	        },

    	        /**
    	         * Converts serialized ciphertext to CipherParams,
    	         * else assumed CipherParams already and returns ciphertext unchanged.
    	         *
    	         * @param {CipherParams|string} ciphertext The ciphertext.
    	         * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
    	         *
    	         * @return {CipherParams} The unserialized ciphertext.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
    	         */
    	        _parse: function (ciphertext, format) {
    	            if (typeof ciphertext == 'string') {
    	                return format.parse(ciphertext, this);
    	            } else {
    	                return ciphertext;
    	            }
    	        }
    	    });

    	    /**
    	     * Key derivation function namespace.
    	     */
    	    var C_kdf = C.kdf = {};

    	    /**
    	     * OpenSSL key derivation function.
    	     */
    	    var OpenSSLKdf = C_kdf.OpenSSL = {
    	        /**
    	         * Derives a key and IV from a password.
    	         *
    	         * @param {string} password The password to derive from.
    	         * @param {number} keySize The size in words of the key to generate.
    	         * @param {number} ivSize The size in words of the IV to generate.
    	         * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
    	         *
    	         * @return {CipherParams} A cipher params object with the key, IV, and salt.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
    	         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
    	         */
    	        execute: function (password, keySize, ivSize, salt) {
    	            // Generate random salt
    	            if (!salt) {
    	                salt = WordArray.random(64/8);
    	            }

    	            // Derive key and IV
    	            var key = EvpKDF.create({ keySize: keySize + ivSize }).compute(password, salt);

    	            // Separate key and IV
    	            var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
    	            key.sigBytes = keySize * 4;

    	            // Return params
    	            return CipherParams.create({ key: key, iv: iv, salt: salt });
    	        }
    	    };

    	    /**
    	     * A serializable cipher wrapper that derives the key from a password,
    	     * and returns ciphertext as a serializable cipher params object.
    	     */
    	    var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
    	        /**
    	         * Configuration options.
    	         *
    	         * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
    	         */
    	        cfg: SerializableCipher.cfg.extend({
    	            kdf: OpenSSLKdf
    	        }),

    	        /**
    	         * Encrypts a message using a password.
    	         *
    	         * @param {Cipher} cipher The cipher algorithm to use.
    	         * @param {WordArray|string} message The message to encrypt.
    	         * @param {string} password The password.
    	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
    	         *
    	         * @return {CipherParams} A cipher params object.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
    	         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
    	         */
    	        encrypt: function (cipher, message, password, cfg) {
    	            // Apply config defaults
    	            cfg = this.cfg.extend(cfg);

    	            // Derive key and other params
    	            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize);

    	            // Add IV to config
    	            cfg.iv = derivedParams.iv;

    	            // Encrypt
    	            var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);

    	            // Mix in derived params
    	            ciphertext.mixIn(derivedParams);

    	            return ciphertext;
    	        },

    	        /**
    	         * Decrypts serialized ciphertext using a password.
    	         *
    	         * @param {Cipher} cipher The cipher algorithm to use.
    	         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
    	         * @param {string} password The password.
    	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
    	         *
    	         * @return {WordArray} The plaintext.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
    	         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
    	         */
    	        decrypt: function (cipher, ciphertext, password, cfg) {
    	            // Apply config defaults
    	            cfg = this.cfg.extend(cfg);

    	            // Convert string to CipherParams
    	            ciphertext = this._parse(ciphertext, cfg.format);

    	            // Derive key and other params
    	            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt);

    	            // Add IV to config
    	            cfg.iv = derivedParams.iv;

    	            // Decrypt
    	            var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);

    	            return plaintext;
    	        }
    	    });
    	}());


    }));
    });

    var modeCfb = createCommonjsModule(function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = exports = factory(core$2, cipherCore);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	/**
    	 * Cipher Feedback block mode.
    	 */
    	CryptoJS.mode.CFB = (function () {
    	    var CFB = CryptoJS.lib.BlockCipherMode.extend();

    	    CFB.Encryptor = CFB.extend({
    	        processBlock: function (words, offset) {
    	            // Shortcuts
    	            var cipher = this._cipher;
    	            var blockSize = cipher.blockSize;

    	            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

    	            // Remember this block to use with next block
    	            this._prevBlock = words.slice(offset, offset + blockSize);
    	        }
    	    });

    	    CFB.Decryptor = CFB.extend({
    	        processBlock: function (words, offset) {
    	            // Shortcuts
    	            var cipher = this._cipher;
    	            var blockSize = cipher.blockSize;

    	            // Remember this block to use with next block
    	            var thisBlock = words.slice(offset, offset + blockSize);

    	            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

    	            // This block becomes the previous block
    	            this._prevBlock = thisBlock;
    	        }
    	    });

    	    function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
    	        var keystream;

    	        // Shortcut
    	        var iv = this._iv;

    	        // Generate keystream
    	        if (iv) {
    	            keystream = iv.slice(0);

    	            // Remove IV for subsequent blocks
    	            this._iv = undefined;
    	        } else {
    	            keystream = this._prevBlock;
    	        }
    	        cipher.encryptBlock(keystream, 0);

    	        // Encrypt
    	        for (var i = 0; i < blockSize; i++) {
    	            words[offset + i] ^= keystream[i];
    	        }
    	    }

    	    return CFB;
    	}());


    	return CryptoJS.mode.CFB;

    }));
    });

    var modeCtr = createCommonjsModule(function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = exports = factory(core$2, cipherCore);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	/**
    	 * Counter block mode.
    	 */
    	CryptoJS.mode.CTR = (function () {
    	    var CTR = CryptoJS.lib.BlockCipherMode.extend();

    	    var Encryptor = CTR.Encryptor = CTR.extend({
    	        processBlock: function (words, offset) {
    	            // Shortcuts
    	            var cipher = this._cipher;
    	            var blockSize = cipher.blockSize;
    	            var iv = this._iv;
    	            var counter = this._counter;

    	            // Generate keystream
    	            if (iv) {
    	                counter = this._counter = iv.slice(0);

    	                // Remove IV for subsequent blocks
    	                this._iv = undefined;
    	            }
    	            var keystream = counter.slice(0);
    	            cipher.encryptBlock(keystream, 0);

    	            // Increment counter
    	            counter[blockSize - 1] = (counter[blockSize - 1] + 1) | 0;

    	            // Encrypt
    	            for (var i = 0; i < blockSize; i++) {
    	                words[offset + i] ^= keystream[i];
    	            }
    	        }
    	    });

    	    CTR.Decryptor = Encryptor;

    	    return CTR;
    	}());


    	return CryptoJS.mode.CTR;

    }));
    });

    var modeCtrGladman = createCommonjsModule(function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = exports = factory(core$2, cipherCore);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	/** @preserve
    	 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
    	 * derived from CryptoJS.mode.CTR
    	 * Jan Hruby jhruby.web@gmail.com
    	 */
    	CryptoJS.mode.CTRGladman = (function () {
    	    var CTRGladman = CryptoJS.lib.BlockCipherMode.extend();

    		function incWord(word)
    		{
    			if (((word >> 24) & 0xff) === 0xff) { //overflow
    			var b1 = (word >> 16)&0xff;
    			var b2 = (word >> 8)&0xff;
    			var b3 = word & 0xff;

    			if (b1 === 0xff) // overflow b1
    			{
    			b1 = 0;
    			if (b2 === 0xff)
    			{
    				b2 = 0;
    				if (b3 === 0xff)
    				{
    					b3 = 0;
    				}
    				else
    				{
    					++b3;
    				}
    			}
    			else
    			{
    				++b2;
    			}
    			}
    			else
    			{
    			++b1;
    			}

    			word = 0;
    			word += (b1 << 16);
    			word += (b2 << 8);
    			word += b3;
    			}
    			else
    			{
    			word += (0x01 << 24);
    			}
    			return word;
    		}

    		function incCounter(counter)
    		{
    			if ((counter[0] = incWord(counter[0])) === 0)
    			{
    				// encr_data in fileenc.c from  Dr Brian Gladman's counts only with DWORD j < 8
    				counter[1] = incWord(counter[1]);
    			}
    			return counter;
    		}

    	    var Encryptor = CTRGladman.Encryptor = CTRGladman.extend({
    	        processBlock: function (words, offset) {
    	            // Shortcuts
    	            var cipher = this._cipher;
    	            var blockSize = cipher.blockSize;
    	            var iv = this._iv;
    	            var counter = this._counter;

    	            // Generate keystream
    	            if (iv) {
    	                counter = this._counter = iv.slice(0);

    	                // Remove IV for subsequent blocks
    	                this._iv = undefined;
    	            }

    				incCounter(counter);

    				var keystream = counter.slice(0);
    	            cipher.encryptBlock(keystream, 0);

    	            // Encrypt
    	            for (var i = 0; i < blockSize; i++) {
    	                words[offset + i] ^= keystream[i];
    	            }
    	        }
    	    });

    	    CTRGladman.Decryptor = Encryptor;

    	    return CTRGladman;
    	}());




    	return CryptoJS.mode.CTRGladman;

    }));
    });

    var modeOfb = createCommonjsModule(function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = exports = factory(core$2, cipherCore);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	/**
    	 * Output Feedback block mode.
    	 */
    	CryptoJS.mode.OFB = (function () {
    	    var OFB = CryptoJS.lib.BlockCipherMode.extend();

    	    var Encryptor = OFB.Encryptor = OFB.extend({
    	        processBlock: function (words, offset) {
    	            // Shortcuts
    	            var cipher = this._cipher;
    	            var blockSize = cipher.blockSize;
    	            var iv = this._iv;
    	            var keystream = this._keystream;

    	            // Generate keystream
    	            if (iv) {
    	                keystream = this._keystream = iv.slice(0);

    	                // Remove IV for subsequent blocks
    	                this._iv = undefined;
    	            }
    	            cipher.encryptBlock(keystream, 0);

    	            // Encrypt
    	            for (var i = 0; i < blockSize; i++) {
    	                words[offset + i] ^= keystream[i];
    	            }
    	        }
    	    });

    	    OFB.Decryptor = Encryptor;

    	    return OFB;
    	}());


    	return CryptoJS.mode.OFB;

    }));
    });

    var modeEcb = createCommonjsModule(function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = exports = factory(core$2, cipherCore);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	/**
    	 * Electronic Codebook block mode.
    	 */
    	CryptoJS.mode.ECB = (function () {
    	    var ECB = CryptoJS.lib.BlockCipherMode.extend();

    	    ECB.Encryptor = ECB.extend({
    	        processBlock: function (words, offset) {
    	            this._cipher.encryptBlock(words, offset);
    	        }
    	    });

    	    ECB.Decryptor = ECB.extend({
    	        processBlock: function (words, offset) {
    	            this._cipher.decryptBlock(words, offset);
    	        }
    	    });

    	    return ECB;
    	}());


    	return CryptoJS.mode.ECB;

    }));
    });

    var padAnsix923 = createCommonjsModule(function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = exports = factory(core$2, cipherCore);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	/**
    	 * ANSI X.923 padding strategy.
    	 */
    	CryptoJS.pad.AnsiX923 = {
    	    pad: function (data, blockSize) {
    	        // Shortcuts
    	        var dataSigBytes = data.sigBytes;
    	        var blockSizeBytes = blockSize * 4;

    	        // Count padding bytes
    	        var nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes;

    	        // Compute last byte position
    	        var lastBytePos = dataSigBytes + nPaddingBytes - 1;

    	        // Pad
    	        data.clamp();
    	        data.words[lastBytePos >>> 2] |= nPaddingBytes << (24 - (lastBytePos % 4) * 8);
    	        data.sigBytes += nPaddingBytes;
    	    },

    	    unpad: function (data) {
    	        // Get number of padding bytes from last byte
    	        var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

    	        // Remove padding
    	        data.sigBytes -= nPaddingBytes;
    	    }
    	};


    	return CryptoJS.pad.Ansix923;

    }));
    });

    var padIso10126 = createCommonjsModule(function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = exports = factory(core$2, cipherCore);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	/**
    	 * ISO 10126 padding strategy.
    	 */
    	CryptoJS.pad.Iso10126 = {
    	    pad: function (data, blockSize) {
    	        // Shortcut
    	        var blockSizeBytes = blockSize * 4;

    	        // Count padding bytes
    	        var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

    	        // Pad
    	        data.concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1)).
    	             concat(CryptoJS.lib.WordArray.create([nPaddingBytes << 24], 1));
    	    },

    	    unpad: function (data) {
    	        // Get number of padding bytes from last byte
    	        var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

    	        // Remove padding
    	        data.sigBytes -= nPaddingBytes;
    	    }
    	};


    	return CryptoJS.pad.Iso10126;

    }));
    });

    var padIso97971 = createCommonjsModule(function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = exports = factory(core$2, cipherCore);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	/**
    	 * ISO/IEC 9797-1 Padding Method 2.
    	 */
    	CryptoJS.pad.Iso97971 = {
    	    pad: function (data, blockSize) {
    	        // Add 0x80 byte
    	        data.concat(CryptoJS.lib.WordArray.create([0x80000000], 1));

    	        // Zero pad the rest
    	        CryptoJS.pad.ZeroPadding.pad(data, blockSize);
    	    },

    	    unpad: function (data) {
    	        // Remove zero padding
    	        CryptoJS.pad.ZeroPadding.unpad(data);

    	        // Remove one more byte -- the 0x80 byte
    	        data.sigBytes--;
    	    }
    	};


    	return CryptoJS.pad.Iso97971;

    }));
    });

    var padZeropadding = createCommonjsModule(function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = exports = factory(core$2, cipherCore);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	/**
    	 * Zero padding strategy.
    	 */
    	CryptoJS.pad.ZeroPadding = {
    	    pad: function (data, blockSize) {
    	        // Shortcut
    	        var blockSizeBytes = blockSize * 4;

    	        // Pad
    	        data.clamp();
    	        data.sigBytes += blockSizeBytes - ((data.sigBytes % blockSizeBytes) || blockSizeBytes);
    	    },

    	    unpad: function (data) {
    	        // Shortcut
    	        var dataWords = data.words;

    	        // Unpad
    	        var i = data.sigBytes - 1;
    	        for (var i = data.sigBytes - 1; i >= 0; i--) {
    	            if (((dataWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff)) {
    	                data.sigBytes = i + 1;
    	                break;
    	            }
    	        }
    	    }
    	};


    	return CryptoJS.pad.ZeroPadding;

    }));
    });

    var padNopadding = createCommonjsModule(function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = exports = factory(core$2, cipherCore);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	/**
    	 * A noop padding strategy.
    	 */
    	CryptoJS.pad.NoPadding = {
    	    pad: function () {
    	    },

    	    unpad: function () {
    	    }
    	};


    	return CryptoJS.pad.NoPadding;

    }));
    });

    var formatHex = createCommonjsModule(function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = exports = factory(core$2, cipherCore);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	(function (undefined$1) {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var CipherParams = C_lib.CipherParams;
    	    var C_enc = C.enc;
    	    var Hex = C_enc.Hex;
    	    var C_format = C.format;

    	    var HexFormatter = C_format.Hex = {
    	        /**
    	         * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
    	         *
    	         * @param {CipherParams} cipherParams The cipher params object.
    	         *
    	         * @return {string} The hexadecimally encoded string.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
    	         */
    	        stringify: function (cipherParams) {
    	            return cipherParams.ciphertext.toString(Hex);
    	        },

    	        /**
    	         * Converts a hexadecimally encoded ciphertext string to a cipher params object.
    	         *
    	         * @param {string} input The hexadecimally encoded string.
    	         *
    	         * @return {CipherParams} The cipher params object.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
    	         */
    	        parse: function (input) {
    	            var ciphertext = Hex.parse(input);
    	            return CipherParams.create({ ciphertext: ciphertext });
    	        }
    	    };
    	}());


    	return CryptoJS.format.Hex;

    }));
    });

    var aes = createCommonjsModule(function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = exports = factory(core$2, encBase64, md5, evpkdf, cipherCore);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	(function () {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var BlockCipher = C_lib.BlockCipher;
    	    var C_algo = C.algo;

    	    // Lookup tables
    	    var SBOX = [];
    	    var INV_SBOX = [];
    	    var SUB_MIX_0 = [];
    	    var SUB_MIX_1 = [];
    	    var SUB_MIX_2 = [];
    	    var SUB_MIX_3 = [];
    	    var INV_SUB_MIX_0 = [];
    	    var INV_SUB_MIX_1 = [];
    	    var INV_SUB_MIX_2 = [];
    	    var INV_SUB_MIX_3 = [];

    	    // Compute lookup tables
    	    (function () {
    	        // Compute double table
    	        var d = [];
    	        for (var i = 0; i < 256; i++) {
    	            if (i < 128) {
    	                d[i] = i << 1;
    	            } else {
    	                d[i] = (i << 1) ^ 0x11b;
    	            }
    	        }

    	        // Walk GF(2^8)
    	        var x = 0;
    	        var xi = 0;
    	        for (var i = 0; i < 256; i++) {
    	            // Compute sbox
    	            var sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
    	            sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
    	            SBOX[x] = sx;
    	            INV_SBOX[sx] = x;

    	            // Compute multiplication
    	            var x2 = d[x];
    	            var x4 = d[x2];
    	            var x8 = d[x4];

    	            // Compute sub bytes, mix columns tables
    	            var t = (d[sx] * 0x101) ^ (sx * 0x1010100);
    	            SUB_MIX_0[x] = (t << 24) | (t >>> 8);
    	            SUB_MIX_1[x] = (t << 16) | (t >>> 16);
    	            SUB_MIX_2[x] = (t << 8)  | (t >>> 24);
    	            SUB_MIX_3[x] = t;

    	            // Compute inv sub bytes, inv mix columns tables
    	            var t = (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100);
    	            INV_SUB_MIX_0[sx] = (t << 24) | (t >>> 8);
    	            INV_SUB_MIX_1[sx] = (t << 16) | (t >>> 16);
    	            INV_SUB_MIX_2[sx] = (t << 8)  | (t >>> 24);
    	            INV_SUB_MIX_3[sx] = t;

    	            // Compute next counter
    	            if (!x) {
    	                x = xi = 1;
    	            } else {
    	                x = x2 ^ d[d[d[x8 ^ x2]]];
    	                xi ^= d[d[xi]];
    	            }
    	        }
    	    }());

    	    // Precomputed Rcon lookup
    	    var RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];

    	    /**
    	     * AES block cipher algorithm.
    	     */
    	    var AES = C_algo.AES = BlockCipher.extend({
    	        _doReset: function () {
    	            var t;

    	            // Skip reset of nRounds has been set before and key did not change
    	            if (this._nRounds && this._keyPriorReset === this._key) {
    	                return;
    	            }

    	            // Shortcuts
    	            var key = this._keyPriorReset = this._key;
    	            var keyWords = key.words;
    	            var keySize = key.sigBytes / 4;

    	            // Compute number of rounds
    	            var nRounds = this._nRounds = keySize + 6;

    	            // Compute number of key schedule rows
    	            var ksRows = (nRounds + 1) * 4;

    	            // Compute key schedule
    	            var keySchedule = this._keySchedule = [];
    	            for (var ksRow = 0; ksRow < ksRows; ksRow++) {
    	                if (ksRow < keySize) {
    	                    keySchedule[ksRow] = keyWords[ksRow];
    	                } else {
    	                    t = keySchedule[ksRow - 1];

    	                    if (!(ksRow % keySize)) {
    	                        // Rot word
    	                        t = (t << 8) | (t >>> 24);

    	                        // Sub word
    	                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];

    	                        // Mix Rcon
    	                        t ^= RCON[(ksRow / keySize) | 0] << 24;
    	                    } else if (keySize > 6 && ksRow % keySize == 4) {
    	                        // Sub word
    	                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];
    	                    }

    	                    keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
    	                }
    	            }

    	            // Compute inv key schedule
    	            var invKeySchedule = this._invKeySchedule = [];
    	            for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
    	                var ksRow = ksRows - invKsRow;

    	                if (invKsRow % 4) {
    	                    var t = keySchedule[ksRow];
    	                } else {
    	                    var t = keySchedule[ksRow - 4];
    	                }

    	                if (invKsRow < 4 || ksRow <= 4) {
    	                    invKeySchedule[invKsRow] = t;
    	                } else {
    	                    invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[(t >>> 16) & 0xff]] ^
    	                                               INV_SUB_MIX_2[SBOX[(t >>> 8) & 0xff]] ^ INV_SUB_MIX_3[SBOX[t & 0xff]];
    	                }
    	            }
    	        },

    	        encryptBlock: function (M, offset) {
    	            this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
    	        },

    	        decryptBlock: function (M, offset) {
    	            // Swap 2nd and 4th rows
    	            var t = M[offset + 1];
    	            M[offset + 1] = M[offset + 3];
    	            M[offset + 3] = t;

    	            this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);

    	            // Inv swap 2nd and 4th rows
    	            var t = M[offset + 1];
    	            M[offset + 1] = M[offset + 3];
    	            M[offset + 3] = t;
    	        },

    	        _doCryptBlock: function (M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
    	            // Shortcut
    	            var nRounds = this._nRounds;

    	            // Get input, add round key
    	            var s0 = M[offset]     ^ keySchedule[0];
    	            var s1 = M[offset + 1] ^ keySchedule[1];
    	            var s2 = M[offset + 2] ^ keySchedule[2];
    	            var s3 = M[offset + 3] ^ keySchedule[3];

    	            // Key schedule row counter
    	            var ksRow = 4;

    	            // Rounds
    	            for (var round = 1; round < nRounds; round++) {
    	                // Shift rows, sub bytes, mix columns, add round key
    	                var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[(s1 >>> 16) & 0xff] ^ SUB_MIX_2[(s2 >>> 8) & 0xff] ^ SUB_MIX_3[s3 & 0xff] ^ keySchedule[ksRow++];
    	                var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[(s2 >>> 16) & 0xff] ^ SUB_MIX_2[(s3 >>> 8) & 0xff] ^ SUB_MIX_3[s0 & 0xff] ^ keySchedule[ksRow++];
    	                var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[(s3 >>> 16) & 0xff] ^ SUB_MIX_2[(s0 >>> 8) & 0xff] ^ SUB_MIX_3[s1 & 0xff] ^ keySchedule[ksRow++];
    	                var t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[(s0 >>> 16) & 0xff] ^ SUB_MIX_2[(s1 >>> 8) & 0xff] ^ SUB_MIX_3[s2 & 0xff] ^ keySchedule[ksRow++];

    	                // Update state
    	                s0 = t0;
    	                s1 = t1;
    	                s2 = t2;
    	                s3 = t3;
    	            }

    	            // Shift rows, sub bytes, add round key
    	            var t0 = ((SBOX[s0 >>> 24] << 24) | (SBOX[(s1 >>> 16) & 0xff] << 16) | (SBOX[(s2 >>> 8) & 0xff] << 8) | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
    	            var t1 = ((SBOX[s1 >>> 24] << 24) | (SBOX[(s2 >>> 16) & 0xff] << 16) | (SBOX[(s3 >>> 8) & 0xff] << 8) | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
    	            var t2 = ((SBOX[s2 >>> 24] << 24) | (SBOX[(s3 >>> 16) & 0xff] << 16) | (SBOX[(s0 >>> 8) & 0xff] << 8) | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
    	            var t3 = ((SBOX[s3 >>> 24] << 24) | (SBOX[(s0 >>> 16) & 0xff] << 16) | (SBOX[(s1 >>> 8) & 0xff] << 8) | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];

    	            // Set output
    	            M[offset]     = t0;
    	            M[offset + 1] = t1;
    	            M[offset + 2] = t2;
    	            M[offset + 3] = t3;
    	        },

    	        keySize: 256/32
    	    });

    	    /**
    	     * Shortcut functions to the cipher's object interface.
    	     *
    	     * @example
    	     *
    	     *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
    	     *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
    	     */
    	    C.AES = BlockCipher._createHelper(AES);
    	}());


    	return CryptoJS.AES;

    }));
    });

    var tripledes = createCommonjsModule(function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = exports = factory(core$2, encBase64, md5, evpkdf, cipherCore);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	(function () {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var WordArray = C_lib.WordArray;
    	    var BlockCipher = C_lib.BlockCipher;
    	    var C_algo = C.algo;

    	    // Permuted Choice 1 constants
    	    var PC1 = [
    	        57, 49, 41, 33, 25, 17, 9,  1,
    	        58, 50, 42, 34, 26, 18, 10, 2,
    	        59, 51, 43, 35, 27, 19, 11, 3,
    	        60, 52, 44, 36, 63, 55, 47, 39,
    	        31, 23, 15, 7,  62, 54, 46, 38,
    	        30, 22, 14, 6,  61, 53, 45, 37,
    	        29, 21, 13, 5,  28, 20, 12, 4
    	    ];

    	    // Permuted Choice 2 constants
    	    var PC2 = [
    	        14, 17, 11, 24, 1,  5,
    	        3,  28, 15, 6,  21, 10,
    	        23, 19, 12, 4,  26, 8,
    	        16, 7,  27, 20, 13, 2,
    	        41, 52, 31, 37, 47, 55,
    	        30, 40, 51, 45, 33, 48,
    	        44, 49, 39, 56, 34, 53,
    	        46, 42, 50, 36, 29, 32
    	    ];

    	    // Cumulative bit shift constants
    	    var BIT_SHIFTS = [1,  2,  4,  6,  8,  10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];

    	    // SBOXes and round permutation constants
    	    var SBOX_P = [
    	        {
    	            0x0: 0x808200,
    	            0x10000000: 0x8000,
    	            0x20000000: 0x808002,
    	            0x30000000: 0x2,
    	            0x40000000: 0x200,
    	            0x50000000: 0x808202,
    	            0x60000000: 0x800202,
    	            0x70000000: 0x800000,
    	            0x80000000: 0x202,
    	            0x90000000: 0x800200,
    	            0xa0000000: 0x8200,
    	            0xb0000000: 0x808000,
    	            0xc0000000: 0x8002,
    	            0xd0000000: 0x800002,
    	            0xe0000000: 0x0,
    	            0xf0000000: 0x8202,
    	            0x8000000: 0x0,
    	            0x18000000: 0x808202,
    	            0x28000000: 0x8202,
    	            0x38000000: 0x8000,
    	            0x48000000: 0x808200,
    	            0x58000000: 0x200,
    	            0x68000000: 0x808002,
    	            0x78000000: 0x2,
    	            0x88000000: 0x800200,
    	            0x98000000: 0x8200,
    	            0xa8000000: 0x808000,
    	            0xb8000000: 0x800202,
    	            0xc8000000: 0x800002,
    	            0xd8000000: 0x8002,
    	            0xe8000000: 0x202,
    	            0xf8000000: 0x800000,
    	            0x1: 0x8000,
    	            0x10000001: 0x2,
    	            0x20000001: 0x808200,
    	            0x30000001: 0x800000,
    	            0x40000001: 0x808002,
    	            0x50000001: 0x8200,
    	            0x60000001: 0x200,
    	            0x70000001: 0x800202,
    	            0x80000001: 0x808202,
    	            0x90000001: 0x808000,
    	            0xa0000001: 0x800002,
    	            0xb0000001: 0x8202,
    	            0xc0000001: 0x202,
    	            0xd0000001: 0x800200,
    	            0xe0000001: 0x8002,
    	            0xf0000001: 0x0,
    	            0x8000001: 0x808202,
    	            0x18000001: 0x808000,
    	            0x28000001: 0x800000,
    	            0x38000001: 0x200,
    	            0x48000001: 0x8000,
    	            0x58000001: 0x800002,
    	            0x68000001: 0x2,
    	            0x78000001: 0x8202,
    	            0x88000001: 0x8002,
    	            0x98000001: 0x800202,
    	            0xa8000001: 0x202,
    	            0xb8000001: 0x808200,
    	            0xc8000001: 0x800200,
    	            0xd8000001: 0x0,
    	            0xe8000001: 0x8200,
    	            0xf8000001: 0x808002
    	        },
    	        {
    	            0x0: 0x40084010,
    	            0x1000000: 0x4000,
    	            0x2000000: 0x80000,
    	            0x3000000: 0x40080010,
    	            0x4000000: 0x40000010,
    	            0x5000000: 0x40084000,
    	            0x6000000: 0x40004000,
    	            0x7000000: 0x10,
    	            0x8000000: 0x84000,
    	            0x9000000: 0x40004010,
    	            0xa000000: 0x40000000,
    	            0xb000000: 0x84010,
    	            0xc000000: 0x80010,
    	            0xd000000: 0x0,
    	            0xe000000: 0x4010,
    	            0xf000000: 0x40080000,
    	            0x800000: 0x40004000,
    	            0x1800000: 0x84010,
    	            0x2800000: 0x10,
    	            0x3800000: 0x40004010,
    	            0x4800000: 0x40084010,
    	            0x5800000: 0x40000000,
    	            0x6800000: 0x80000,
    	            0x7800000: 0x40080010,
    	            0x8800000: 0x80010,
    	            0x9800000: 0x0,
    	            0xa800000: 0x4000,
    	            0xb800000: 0x40080000,
    	            0xc800000: 0x40000010,
    	            0xd800000: 0x84000,
    	            0xe800000: 0x40084000,
    	            0xf800000: 0x4010,
    	            0x10000000: 0x0,
    	            0x11000000: 0x40080010,
    	            0x12000000: 0x40004010,
    	            0x13000000: 0x40084000,
    	            0x14000000: 0x40080000,
    	            0x15000000: 0x10,
    	            0x16000000: 0x84010,
    	            0x17000000: 0x4000,
    	            0x18000000: 0x4010,
    	            0x19000000: 0x80000,
    	            0x1a000000: 0x80010,
    	            0x1b000000: 0x40000010,
    	            0x1c000000: 0x84000,
    	            0x1d000000: 0x40004000,
    	            0x1e000000: 0x40000000,
    	            0x1f000000: 0x40084010,
    	            0x10800000: 0x84010,
    	            0x11800000: 0x80000,
    	            0x12800000: 0x40080000,
    	            0x13800000: 0x4000,
    	            0x14800000: 0x40004000,
    	            0x15800000: 0x40084010,
    	            0x16800000: 0x10,
    	            0x17800000: 0x40000000,
    	            0x18800000: 0x40084000,
    	            0x19800000: 0x40000010,
    	            0x1a800000: 0x40004010,
    	            0x1b800000: 0x80010,
    	            0x1c800000: 0x0,
    	            0x1d800000: 0x4010,
    	            0x1e800000: 0x40080010,
    	            0x1f800000: 0x84000
    	        },
    	        {
    	            0x0: 0x104,
    	            0x100000: 0x0,
    	            0x200000: 0x4000100,
    	            0x300000: 0x10104,
    	            0x400000: 0x10004,
    	            0x500000: 0x4000004,
    	            0x600000: 0x4010104,
    	            0x700000: 0x4010000,
    	            0x800000: 0x4000000,
    	            0x900000: 0x4010100,
    	            0xa00000: 0x10100,
    	            0xb00000: 0x4010004,
    	            0xc00000: 0x4000104,
    	            0xd00000: 0x10000,
    	            0xe00000: 0x4,
    	            0xf00000: 0x100,
    	            0x80000: 0x4010100,
    	            0x180000: 0x4010004,
    	            0x280000: 0x0,
    	            0x380000: 0x4000100,
    	            0x480000: 0x4000004,
    	            0x580000: 0x10000,
    	            0x680000: 0x10004,
    	            0x780000: 0x104,
    	            0x880000: 0x4,
    	            0x980000: 0x100,
    	            0xa80000: 0x4010000,
    	            0xb80000: 0x10104,
    	            0xc80000: 0x10100,
    	            0xd80000: 0x4000104,
    	            0xe80000: 0x4010104,
    	            0xf80000: 0x4000000,
    	            0x1000000: 0x4010100,
    	            0x1100000: 0x10004,
    	            0x1200000: 0x10000,
    	            0x1300000: 0x4000100,
    	            0x1400000: 0x100,
    	            0x1500000: 0x4010104,
    	            0x1600000: 0x4000004,
    	            0x1700000: 0x0,
    	            0x1800000: 0x4000104,
    	            0x1900000: 0x4000000,
    	            0x1a00000: 0x4,
    	            0x1b00000: 0x10100,
    	            0x1c00000: 0x4010000,
    	            0x1d00000: 0x104,
    	            0x1e00000: 0x10104,
    	            0x1f00000: 0x4010004,
    	            0x1080000: 0x4000000,
    	            0x1180000: 0x104,
    	            0x1280000: 0x4010100,
    	            0x1380000: 0x0,
    	            0x1480000: 0x10004,
    	            0x1580000: 0x4000100,
    	            0x1680000: 0x100,
    	            0x1780000: 0x4010004,
    	            0x1880000: 0x10000,
    	            0x1980000: 0x4010104,
    	            0x1a80000: 0x10104,
    	            0x1b80000: 0x4000004,
    	            0x1c80000: 0x4000104,
    	            0x1d80000: 0x4010000,
    	            0x1e80000: 0x4,
    	            0x1f80000: 0x10100
    	        },
    	        {
    	            0x0: 0x80401000,
    	            0x10000: 0x80001040,
    	            0x20000: 0x401040,
    	            0x30000: 0x80400000,
    	            0x40000: 0x0,
    	            0x50000: 0x401000,
    	            0x60000: 0x80000040,
    	            0x70000: 0x400040,
    	            0x80000: 0x80000000,
    	            0x90000: 0x400000,
    	            0xa0000: 0x40,
    	            0xb0000: 0x80001000,
    	            0xc0000: 0x80400040,
    	            0xd0000: 0x1040,
    	            0xe0000: 0x1000,
    	            0xf0000: 0x80401040,
    	            0x8000: 0x80001040,
    	            0x18000: 0x40,
    	            0x28000: 0x80400040,
    	            0x38000: 0x80001000,
    	            0x48000: 0x401000,
    	            0x58000: 0x80401040,
    	            0x68000: 0x0,
    	            0x78000: 0x80400000,
    	            0x88000: 0x1000,
    	            0x98000: 0x80401000,
    	            0xa8000: 0x400000,
    	            0xb8000: 0x1040,
    	            0xc8000: 0x80000000,
    	            0xd8000: 0x400040,
    	            0xe8000: 0x401040,
    	            0xf8000: 0x80000040,
    	            0x100000: 0x400040,
    	            0x110000: 0x401000,
    	            0x120000: 0x80000040,
    	            0x130000: 0x0,
    	            0x140000: 0x1040,
    	            0x150000: 0x80400040,
    	            0x160000: 0x80401000,
    	            0x170000: 0x80001040,
    	            0x180000: 0x80401040,
    	            0x190000: 0x80000000,
    	            0x1a0000: 0x80400000,
    	            0x1b0000: 0x401040,
    	            0x1c0000: 0x80001000,
    	            0x1d0000: 0x400000,
    	            0x1e0000: 0x40,
    	            0x1f0000: 0x1000,
    	            0x108000: 0x80400000,
    	            0x118000: 0x80401040,
    	            0x128000: 0x0,
    	            0x138000: 0x401000,
    	            0x148000: 0x400040,
    	            0x158000: 0x80000000,
    	            0x168000: 0x80001040,
    	            0x178000: 0x40,
    	            0x188000: 0x80000040,
    	            0x198000: 0x1000,
    	            0x1a8000: 0x80001000,
    	            0x1b8000: 0x80400040,
    	            0x1c8000: 0x1040,
    	            0x1d8000: 0x80401000,
    	            0x1e8000: 0x400000,
    	            0x1f8000: 0x401040
    	        },
    	        {
    	            0x0: 0x80,
    	            0x1000: 0x1040000,
    	            0x2000: 0x40000,
    	            0x3000: 0x20000000,
    	            0x4000: 0x20040080,
    	            0x5000: 0x1000080,
    	            0x6000: 0x21000080,
    	            0x7000: 0x40080,
    	            0x8000: 0x1000000,
    	            0x9000: 0x20040000,
    	            0xa000: 0x20000080,
    	            0xb000: 0x21040080,
    	            0xc000: 0x21040000,
    	            0xd000: 0x0,
    	            0xe000: 0x1040080,
    	            0xf000: 0x21000000,
    	            0x800: 0x1040080,
    	            0x1800: 0x21000080,
    	            0x2800: 0x80,
    	            0x3800: 0x1040000,
    	            0x4800: 0x40000,
    	            0x5800: 0x20040080,
    	            0x6800: 0x21040000,
    	            0x7800: 0x20000000,
    	            0x8800: 0x20040000,
    	            0x9800: 0x0,
    	            0xa800: 0x21040080,
    	            0xb800: 0x1000080,
    	            0xc800: 0x20000080,
    	            0xd800: 0x21000000,
    	            0xe800: 0x1000000,
    	            0xf800: 0x40080,
    	            0x10000: 0x40000,
    	            0x11000: 0x80,
    	            0x12000: 0x20000000,
    	            0x13000: 0x21000080,
    	            0x14000: 0x1000080,
    	            0x15000: 0x21040000,
    	            0x16000: 0x20040080,
    	            0x17000: 0x1000000,
    	            0x18000: 0x21040080,
    	            0x19000: 0x21000000,
    	            0x1a000: 0x1040000,
    	            0x1b000: 0x20040000,
    	            0x1c000: 0x40080,
    	            0x1d000: 0x20000080,
    	            0x1e000: 0x0,
    	            0x1f000: 0x1040080,
    	            0x10800: 0x21000080,
    	            0x11800: 0x1000000,
    	            0x12800: 0x1040000,
    	            0x13800: 0x20040080,
    	            0x14800: 0x20000000,
    	            0x15800: 0x1040080,
    	            0x16800: 0x80,
    	            0x17800: 0x21040000,
    	            0x18800: 0x40080,
    	            0x19800: 0x21040080,
    	            0x1a800: 0x0,
    	            0x1b800: 0x21000000,
    	            0x1c800: 0x1000080,
    	            0x1d800: 0x40000,
    	            0x1e800: 0x20040000,
    	            0x1f800: 0x20000080
    	        },
    	        {
    	            0x0: 0x10000008,
    	            0x100: 0x2000,
    	            0x200: 0x10200000,
    	            0x300: 0x10202008,
    	            0x400: 0x10002000,
    	            0x500: 0x200000,
    	            0x600: 0x200008,
    	            0x700: 0x10000000,
    	            0x800: 0x0,
    	            0x900: 0x10002008,
    	            0xa00: 0x202000,
    	            0xb00: 0x8,
    	            0xc00: 0x10200008,
    	            0xd00: 0x202008,
    	            0xe00: 0x2008,
    	            0xf00: 0x10202000,
    	            0x80: 0x10200000,
    	            0x180: 0x10202008,
    	            0x280: 0x8,
    	            0x380: 0x200000,
    	            0x480: 0x202008,
    	            0x580: 0x10000008,
    	            0x680: 0x10002000,
    	            0x780: 0x2008,
    	            0x880: 0x200008,
    	            0x980: 0x2000,
    	            0xa80: 0x10002008,
    	            0xb80: 0x10200008,
    	            0xc80: 0x0,
    	            0xd80: 0x10202000,
    	            0xe80: 0x202000,
    	            0xf80: 0x10000000,
    	            0x1000: 0x10002000,
    	            0x1100: 0x10200008,
    	            0x1200: 0x10202008,
    	            0x1300: 0x2008,
    	            0x1400: 0x200000,
    	            0x1500: 0x10000000,
    	            0x1600: 0x10000008,
    	            0x1700: 0x202000,
    	            0x1800: 0x202008,
    	            0x1900: 0x0,
    	            0x1a00: 0x8,
    	            0x1b00: 0x10200000,
    	            0x1c00: 0x2000,
    	            0x1d00: 0x10002008,
    	            0x1e00: 0x10202000,
    	            0x1f00: 0x200008,
    	            0x1080: 0x8,
    	            0x1180: 0x202000,
    	            0x1280: 0x200000,
    	            0x1380: 0x10000008,
    	            0x1480: 0x10002000,
    	            0x1580: 0x2008,
    	            0x1680: 0x10202008,
    	            0x1780: 0x10200000,
    	            0x1880: 0x10202000,
    	            0x1980: 0x10200008,
    	            0x1a80: 0x2000,
    	            0x1b80: 0x202008,
    	            0x1c80: 0x200008,
    	            0x1d80: 0x0,
    	            0x1e80: 0x10000000,
    	            0x1f80: 0x10002008
    	        },
    	        {
    	            0x0: 0x100000,
    	            0x10: 0x2000401,
    	            0x20: 0x400,
    	            0x30: 0x100401,
    	            0x40: 0x2100401,
    	            0x50: 0x0,
    	            0x60: 0x1,
    	            0x70: 0x2100001,
    	            0x80: 0x2000400,
    	            0x90: 0x100001,
    	            0xa0: 0x2000001,
    	            0xb0: 0x2100400,
    	            0xc0: 0x2100000,
    	            0xd0: 0x401,
    	            0xe0: 0x100400,
    	            0xf0: 0x2000000,
    	            0x8: 0x2100001,
    	            0x18: 0x0,
    	            0x28: 0x2000401,
    	            0x38: 0x2100400,
    	            0x48: 0x100000,
    	            0x58: 0x2000001,
    	            0x68: 0x2000000,
    	            0x78: 0x401,
    	            0x88: 0x100401,
    	            0x98: 0x2000400,
    	            0xa8: 0x2100000,
    	            0xb8: 0x100001,
    	            0xc8: 0x400,
    	            0xd8: 0x2100401,
    	            0xe8: 0x1,
    	            0xf8: 0x100400,
    	            0x100: 0x2000000,
    	            0x110: 0x100000,
    	            0x120: 0x2000401,
    	            0x130: 0x2100001,
    	            0x140: 0x100001,
    	            0x150: 0x2000400,
    	            0x160: 0x2100400,
    	            0x170: 0x100401,
    	            0x180: 0x401,
    	            0x190: 0x2100401,
    	            0x1a0: 0x100400,
    	            0x1b0: 0x1,
    	            0x1c0: 0x0,
    	            0x1d0: 0x2100000,
    	            0x1e0: 0x2000001,
    	            0x1f0: 0x400,
    	            0x108: 0x100400,
    	            0x118: 0x2000401,
    	            0x128: 0x2100001,
    	            0x138: 0x1,
    	            0x148: 0x2000000,
    	            0x158: 0x100000,
    	            0x168: 0x401,
    	            0x178: 0x2100400,
    	            0x188: 0x2000001,
    	            0x198: 0x2100000,
    	            0x1a8: 0x0,
    	            0x1b8: 0x2100401,
    	            0x1c8: 0x100401,
    	            0x1d8: 0x400,
    	            0x1e8: 0x2000400,
    	            0x1f8: 0x100001
    	        },
    	        {
    	            0x0: 0x8000820,
    	            0x1: 0x20000,
    	            0x2: 0x8000000,
    	            0x3: 0x20,
    	            0x4: 0x20020,
    	            0x5: 0x8020820,
    	            0x6: 0x8020800,
    	            0x7: 0x800,
    	            0x8: 0x8020000,
    	            0x9: 0x8000800,
    	            0xa: 0x20800,
    	            0xb: 0x8020020,
    	            0xc: 0x820,
    	            0xd: 0x0,
    	            0xe: 0x8000020,
    	            0xf: 0x20820,
    	            0x80000000: 0x800,
    	            0x80000001: 0x8020820,
    	            0x80000002: 0x8000820,
    	            0x80000003: 0x8000000,
    	            0x80000004: 0x8020000,
    	            0x80000005: 0x20800,
    	            0x80000006: 0x20820,
    	            0x80000007: 0x20,
    	            0x80000008: 0x8000020,
    	            0x80000009: 0x820,
    	            0x8000000a: 0x20020,
    	            0x8000000b: 0x8020800,
    	            0x8000000c: 0x0,
    	            0x8000000d: 0x8020020,
    	            0x8000000e: 0x8000800,
    	            0x8000000f: 0x20000,
    	            0x10: 0x20820,
    	            0x11: 0x8020800,
    	            0x12: 0x20,
    	            0x13: 0x800,
    	            0x14: 0x8000800,
    	            0x15: 0x8000020,
    	            0x16: 0x8020020,
    	            0x17: 0x20000,
    	            0x18: 0x0,
    	            0x19: 0x20020,
    	            0x1a: 0x8020000,
    	            0x1b: 0x8000820,
    	            0x1c: 0x8020820,
    	            0x1d: 0x20800,
    	            0x1e: 0x820,
    	            0x1f: 0x8000000,
    	            0x80000010: 0x20000,
    	            0x80000011: 0x800,
    	            0x80000012: 0x8020020,
    	            0x80000013: 0x20820,
    	            0x80000014: 0x20,
    	            0x80000015: 0x8020000,
    	            0x80000016: 0x8000000,
    	            0x80000017: 0x8000820,
    	            0x80000018: 0x8020820,
    	            0x80000019: 0x8000020,
    	            0x8000001a: 0x8000800,
    	            0x8000001b: 0x0,
    	            0x8000001c: 0x20800,
    	            0x8000001d: 0x820,
    	            0x8000001e: 0x20020,
    	            0x8000001f: 0x8020800
    	        }
    	    ];

    	    // Masks that select the SBOX input
    	    var SBOX_MASK = [
    	        0xf8000001, 0x1f800000, 0x01f80000, 0x001f8000,
    	        0x0001f800, 0x00001f80, 0x000001f8, 0x8000001f
    	    ];

    	    /**
    	     * DES block cipher algorithm.
    	     */
    	    var DES = C_algo.DES = BlockCipher.extend({
    	        _doReset: function () {
    	            // Shortcuts
    	            var key = this._key;
    	            var keyWords = key.words;

    	            // Select 56 bits according to PC1
    	            var keyBits = [];
    	            for (var i = 0; i < 56; i++) {
    	                var keyBitPos = PC1[i] - 1;
    	                keyBits[i] = (keyWords[keyBitPos >>> 5] >>> (31 - keyBitPos % 32)) & 1;
    	            }

    	            // Assemble 16 subkeys
    	            var subKeys = this._subKeys = [];
    	            for (var nSubKey = 0; nSubKey < 16; nSubKey++) {
    	                // Create subkey
    	                var subKey = subKeys[nSubKey] = [];

    	                // Shortcut
    	                var bitShift = BIT_SHIFTS[nSubKey];

    	                // Select 48 bits according to PC2
    	                for (var i = 0; i < 24; i++) {
    	                    // Select from the left 28 key bits
    	                    subKey[(i / 6) | 0] |= keyBits[((PC2[i] - 1) + bitShift) % 28] << (31 - i % 6);

    	                    // Select from the right 28 key bits
    	                    subKey[4 + ((i / 6) | 0)] |= keyBits[28 + (((PC2[i + 24] - 1) + bitShift) % 28)] << (31 - i % 6);
    	                }

    	                // Since each subkey is applied to an expanded 32-bit input,
    	                // the subkey can be broken into 8 values scaled to 32-bits,
    	                // which allows the key to be used without expansion
    	                subKey[0] = (subKey[0] << 1) | (subKey[0] >>> 31);
    	                for (var i = 1; i < 7; i++) {
    	                    subKey[i] = subKey[i] >>> ((i - 1) * 4 + 3);
    	                }
    	                subKey[7] = (subKey[7] << 5) | (subKey[7] >>> 27);
    	            }

    	            // Compute inverse subkeys
    	            var invSubKeys = this._invSubKeys = [];
    	            for (var i = 0; i < 16; i++) {
    	                invSubKeys[i] = subKeys[15 - i];
    	            }
    	        },

    	        encryptBlock: function (M, offset) {
    	            this._doCryptBlock(M, offset, this._subKeys);
    	        },

    	        decryptBlock: function (M, offset) {
    	            this._doCryptBlock(M, offset, this._invSubKeys);
    	        },

    	        _doCryptBlock: function (M, offset, subKeys) {
    	            // Get input
    	            this._lBlock = M[offset];
    	            this._rBlock = M[offset + 1];

    	            // Initial permutation
    	            exchangeLR.call(this, 4,  0x0f0f0f0f);
    	            exchangeLR.call(this, 16, 0x0000ffff);
    	            exchangeRL.call(this, 2,  0x33333333);
    	            exchangeRL.call(this, 8,  0x00ff00ff);
    	            exchangeLR.call(this, 1,  0x55555555);

    	            // Rounds
    	            for (var round = 0; round < 16; round++) {
    	                // Shortcuts
    	                var subKey = subKeys[round];
    	                var lBlock = this._lBlock;
    	                var rBlock = this._rBlock;

    	                // Feistel function
    	                var f = 0;
    	                for (var i = 0; i < 8; i++) {
    	                    f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
    	                }
    	                this._lBlock = rBlock;
    	                this._rBlock = lBlock ^ f;
    	            }

    	            // Undo swap from last round
    	            var t = this._lBlock;
    	            this._lBlock = this._rBlock;
    	            this._rBlock = t;

    	            // Final permutation
    	            exchangeLR.call(this, 1,  0x55555555);
    	            exchangeRL.call(this, 8,  0x00ff00ff);
    	            exchangeRL.call(this, 2,  0x33333333);
    	            exchangeLR.call(this, 16, 0x0000ffff);
    	            exchangeLR.call(this, 4,  0x0f0f0f0f);

    	            // Set output
    	            M[offset] = this._lBlock;
    	            M[offset + 1] = this._rBlock;
    	        },

    	        keySize: 64/32,

    	        ivSize: 64/32,

    	        blockSize: 64/32
    	    });

    	    // Swap bits across the left and right words
    	    function exchangeLR(offset, mask) {
    	        var t = ((this._lBlock >>> offset) ^ this._rBlock) & mask;
    	        this._rBlock ^= t;
    	        this._lBlock ^= t << offset;
    	    }

    	    function exchangeRL(offset, mask) {
    	        var t = ((this._rBlock >>> offset) ^ this._lBlock) & mask;
    	        this._lBlock ^= t;
    	        this._rBlock ^= t << offset;
    	    }

    	    /**
    	     * Shortcut functions to the cipher's object interface.
    	     *
    	     * @example
    	     *
    	     *     var ciphertext = CryptoJS.DES.encrypt(message, key, cfg);
    	     *     var plaintext  = CryptoJS.DES.decrypt(ciphertext, key, cfg);
    	     */
    	    C.DES = BlockCipher._createHelper(DES);

    	    /**
    	     * Triple-DES block cipher algorithm.
    	     */
    	    var TripleDES = C_algo.TripleDES = BlockCipher.extend({
    	        _doReset: function () {
    	            // Shortcuts
    	            var key = this._key;
    	            var keyWords = key.words;
    	            // Make sure the key length is valid (64, 128 or >= 192 bit)
    	            if (keyWords.length !== 2 && keyWords.length !== 4 && keyWords.length < 6) {
    	                throw new Error('Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.');
    	            }

    	            // Extend the key according to the keying options defined in 3DES standard
    	            var key1 = keyWords.slice(0, 2);
    	            var key2 = keyWords.length < 4 ? keyWords.slice(0, 2) : keyWords.slice(2, 4);
    	            var key3 = keyWords.length < 6 ? keyWords.slice(0, 2) : keyWords.slice(4, 6);

    	            // Create DES instances
    	            this._des1 = DES.createEncryptor(WordArray.create(key1));
    	            this._des2 = DES.createEncryptor(WordArray.create(key2));
    	            this._des3 = DES.createEncryptor(WordArray.create(key3));
    	        },

    	        encryptBlock: function (M, offset) {
    	            this._des1.encryptBlock(M, offset);
    	            this._des2.decryptBlock(M, offset);
    	            this._des3.encryptBlock(M, offset);
    	        },

    	        decryptBlock: function (M, offset) {
    	            this._des3.decryptBlock(M, offset);
    	            this._des2.encryptBlock(M, offset);
    	            this._des1.decryptBlock(M, offset);
    	        },

    	        keySize: 192/32,

    	        ivSize: 64/32,

    	        blockSize: 64/32
    	    });

    	    /**
    	     * Shortcut functions to the cipher's object interface.
    	     *
    	     * @example
    	     *
    	     *     var ciphertext = CryptoJS.TripleDES.encrypt(message, key, cfg);
    	     *     var plaintext  = CryptoJS.TripleDES.decrypt(ciphertext, key, cfg);
    	     */
    	    C.TripleDES = BlockCipher._createHelper(TripleDES);
    	}());


    	return CryptoJS.TripleDES;

    }));
    });

    var rc4 = createCommonjsModule(function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = exports = factory(core$2, encBase64, md5, evpkdf, cipherCore);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	(function () {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var StreamCipher = C_lib.StreamCipher;
    	    var C_algo = C.algo;

    	    /**
    	     * RC4 stream cipher algorithm.
    	     */
    	    var RC4 = C_algo.RC4 = StreamCipher.extend({
    	        _doReset: function () {
    	            // Shortcuts
    	            var key = this._key;
    	            var keyWords = key.words;
    	            var keySigBytes = key.sigBytes;

    	            // Init sbox
    	            var S = this._S = [];
    	            for (var i = 0; i < 256; i++) {
    	                S[i] = i;
    	            }

    	            // Key setup
    	            for (var i = 0, j = 0; i < 256; i++) {
    	                var keyByteIndex = i % keySigBytes;
    	                var keyByte = (keyWords[keyByteIndex >>> 2] >>> (24 - (keyByteIndex % 4) * 8)) & 0xff;

    	                j = (j + S[i] + keyByte) % 256;

    	                // Swap
    	                var t = S[i];
    	                S[i] = S[j];
    	                S[j] = t;
    	            }

    	            // Counters
    	            this._i = this._j = 0;
    	        },

    	        _doProcessBlock: function (M, offset) {
    	            M[offset] ^= generateKeystreamWord.call(this);
    	        },

    	        keySize: 256/32,

    	        ivSize: 0
    	    });

    	    function generateKeystreamWord() {
    	        // Shortcuts
    	        var S = this._S;
    	        var i = this._i;
    	        var j = this._j;

    	        // Generate keystream word
    	        var keystreamWord = 0;
    	        for (var n = 0; n < 4; n++) {
    	            i = (i + 1) % 256;
    	            j = (j + S[i]) % 256;

    	            // Swap
    	            var t = S[i];
    	            S[i] = S[j];
    	            S[j] = t;

    	            keystreamWord |= S[(S[i] + S[j]) % 256] << (24 - n * 8);
    	        }

    	        // Update counters
    	        this._i = i;
    	        this._j = j;

    	        return keystreamWord;
    	    }

    	    /**
    	     * Shortcut functions to the cipher's object interface.
    	     *
    	     * @example
    	     *
    	     *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);
    	     *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);
    	     */
    	    C.RC4 = StreamCipher._createHelper(RC4);

    	    /**
    	     * Modified RC4 stream cipher algorithm.
    	     */
    	    var RC4Drop = C_algo.RC4Drop = RC4.extend({
    	        /**
    	         * Configuration options.
    	         *
    	         * @property {number} drop The number of keystream words to drop. Default 192
    	         */
    	        cfg: RC4.cfg.extend({
    	            drop: 192
    	        }),

    	        _doReset: function () {
    	            RC4._doReset.call(this);

    	            // Drop
    	            for (var i = this.cfg.drop; i > 0; i--) {
    	                generateKeystreamWord.call(this);
    	            }
    	        }
    	    });

    	    /**
    	     * Shortcut functions to the cipher's object interface.
    	     *
    	     * @example
    	     *
    	     *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);
    	     *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);
    	     */
    	    C.RC4Drop = StreamCipher._createHelper(RC4Drop);
    	}());


    	return CryptoJS.RC4;

    }));
    });

    var rabbit = createCommonjsModule(function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = exports = factory(core$2, encBase64, md5, evpkdf, cipherCore);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	(function () {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var StreamCipher = C_lib.StreamCipher;
    	    var C_algo = C.algo;

    	    // Reusable objects
    	    var S  = [];
    	    var C_ = [];
    	    var G  = [];

    	    /**
    	     * Rabbit stream cipher algorithm
    	     */
    	    var Rabbit = C_algo.Rabbit = StreamCipher.extend({
    	        _doReset: function () {
    	            // Shortcuts
    	            var K = this._key.words;
    	            var iv = this.cfg.iv;

    	            // Swap endian
    	            for (var i = 0; i < 4; i++) {
    	                K[i] = (((K[i] << 8)  | (K[i] >>> 24)) & 0x00ff00ff) |
    	                       (((K[i] << 24) | (K[i] >>> 8))  & 0xff00ff00);
    	            }

    	            // Generate initial state values
    	            var X = this._X = [
    	                K[0], (K[3] << 16) | (K[2] >>> 16),
    	                K[1], (K[0] << 16) | (K[3] >>> 16),
    	                K[2], (K[1] << 16) | (K[0] >>> 16),
    	                K[3], (K[2] << 16) | (K[1] >>> 16)
    	            ];

    	            // Generate initial counter values
    	            var C = this._C = [
    	                (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
    	                (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
    	                (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
    	                (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)
    	            ];

    	            // Carry bit
    	            this._b = 0;

    	            // Iterate the system four times
    	            for (var i = 0; i < 4; i++) {
    	                nextState.call(this);
    	            }

    	            // Modify the counters
    	            for (var i = 0; i < 8; i++) {
    	                C[i] ^= X[(i + 4) & 7];
    	            }

    	            // IV setup
    	            if (iv) {
    	                // Shortcuts
    	                var IV = iv.words;
    	                var IV_0 = IV[0];
    	                var IV_1 = IV[1];

    	                // Generate four subvectors
    	                var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
    	                var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
    	                var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
    	                var i3 = (i2 << 16)  | (i0 & 0x0000ffff);

    	                // Modify counter values
    	                C[0] ^= i0;
    	                C[1] ^= i1;
    	                C[2] ^= i2;
    	                C[3] ^= i3;
    	                C[4] ^= i0;
    	                C[5] ^= i1;
    	                C[6] ^= i2;
    	                C[7] ^= i3;

    	                // Iterate the system four times
    	                for (var i = 0; i < 4; i++) {
    	                    nextState.call(this);
    	                }
    	            }
    	        },

    	        _doProcessBlock: function (M, offset) {
    	            // Shortcut
    	            var X = this._X;

    	            // Iterate the system
    	            nextState.call(this);

    	            // Generate four keystream words
    	            S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
    	            S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
    	            S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
    	            S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

    	            for (var i = 0; i < 4; i++) {
    	                // Swap endian
    	                S[i] = (((S[i] << 8)  | (S[i] >>> 24)) & 0x00ff00ff) |
    	                       (((S[i] << 24) | (S[i] >>> 8))  & 0xff00ff00);

    	                // Encrypt
    	                M[offset + i] ^= S[i];
    	            }
    	        },

    	        blockSize: 128/32,

    	        ivSize: 64/32
    	    });

    	    function nextState() {
    	        // Shortcuts
    	        var X = this._X;
    	        var C = this._C;

    	        // Save old counter values
    	        for (var i = 0; i < 8; i++) {
    	            C_[i] = C[i];
    	        }

    	        // Calculate new counter values
    	        C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
    	        C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
    	        C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
    	        C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
    	        C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
    	        C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
    	        C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
    	        C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
    	        this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

    	        // Calculate the g-values
    	        for (var i = 0; i < 8; i++) {
    	            var gx = X[i] + C[i];

    	            // Construct high and low argument for squaring
    	            var ga = gx & 0xffff;
    	            var gb = gx >>> 16;

    	            // Calculate high and low result of squaring
    	            var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
    	            var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

    	            // High XOR low
    	            G[i] = gh ^ gl;
    	        }

    	        // Calculate new state values
    	        X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
    	        X[1] = (G[1] + ((G[0] << 8)  | (G[0] >>> 24)) + G[7]) | 0;
    	        X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
    	        X[3] = (G[3] + ((G[2] << 8)  | (G[2] >>> 24)) + G[1]) | 0;
    	        X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
    	        X[5] = (G[5] + ((G[4] << 8)  | (G[4] >>> 24)) + G[3]) | 0;
    	        X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
    	        X[7] = (G[7] + ((G[6] << 8)  | (G[6] >>> 24)) + G[5]) | 0;
    	    }

    	    /**
    	     * Shortcut functions to the cipher's object interface.
    	     *
    	     * @example
    	     *
    	     *     var ciphertext = CryptoJS.Rabbit.encrypt(message, key, cfg);
    	     *     var plaintext  = CryptoJS.Rabbit.decrypt(ciphertext, key, cfg);
    	     */
    	    C.Rabbit = StreamCipher._createHelper(Rabbit);
    	}());


    	return CryptoJS.Rabbit;

    }));
    });

    var rabbitLegacy = createCommonjsModule(function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = exports = factory(core$2, encBase64, md5, evpkdf, cipherCore);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	(function () {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var StreamCipher = C_lib.StreamCipher;
    	    var C_algo = C.algo;

    	    // Reusable objects
    	    var S  = [];
    	    var C_ = [];
    	    var G  = [];

    	    /**
    	     * Rabbit stream cipher algorithm.
    	     *
    	     * This is a legacy version that neglected to convert the key to little-endian.
    	     * This error doesn't affect the cipher's security,
    	     * but it does affect its compatibility with other implementations.
    	     */
    	    var RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({
    	        _doReset: function () {
    	            // Shortcuts
    	            var K = this._key.words;
    	            var iv = this.cfg.iv;

    	            // Generate initial state values
    	            var X = this._X = [
    	                K[0], (K[3] << 16) | (K[2] >>> 16),
    	                K[1], (K[0] << 16) | (K[3] >>> 16),
    	                K[2], (K[1] << 16) | (K[0] >>> 16),
    	                K[3], (K[2] << 16) | (K[1] >>> 16)
    	            ];

    	            // Generate initial counter values
    	            var C = this._C = [
    	                (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
    	                (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
    	                (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
    	                (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)
    	            ];

    	            // Carry bit
    	            this._b = 0;

    	            // Iterate the system four times
    	            for (var i = 0; i < 4; i++) {
    	                nextState.call(this);
    	            }

    	            // Modify the counters
    	            for (var i = 0; i < 8; i++) {
    	                C[i] ^= X[(i + 4) & 7];
    	            }

    	            // IV setup
    	            if (iv) {
    	                // Shortcuts
    	                var IV = iv.words;
    	                var IV_0 = IV[0];
    	                var IV_1 = IV[1];

    	                // Generate four subvectors
    	                var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
    	                var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
    	                var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
    	                var i3 = (i2 << 16)  | (i0 & 0x0000ffff);

    	                // Modify counter values
    	                C[0] ^= i0;
    	                C[1] ^= i1;
    	                C[2] ^= i2;
    	                C[3] ^= i3;
    	                C[4] ^= i0;
    	                C[5] ^= i1;
    	                C[6] ^= i2;
    	                C[7] ^= i3;

    	                // Iterate the system four times
    	                for (var i = 0; i < 4; i++) {
    	                    nextState.call(this);
    	                }
    	            }
    	        },

    	        _doProcessBlock: function (M, offset) {
    	            // Shortcut
    	            var X = this._X;

    	            // Iterate the system
    	            nextState.call(this);

    	            // Generate four keystream words
    	            S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
    	            S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
    	            S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
    	            S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

    	            for (var i = 0; i < 4; i++) {
    	                // Swap endian
    	                S[i] = (((S[i] << 8)  | (S[i] >>> 24)) & 0x00ff00ff) |
    	                       (((S[i] << 24) | (S[i] >>> 8))  & 0xff00ff00);

    	                // Encrypt
    	                M[offset + i] ^= S[i];
    	            }
    	        },

    	        blockSize: 128/32,

    	        ivSize: 64/32
    	    });

    	    function nextState() {
    	        // Shortcuts
    	        var X = this._X;
    	        var C = this._C;

    	        // Save old counter values
    	        for (var i = 0; i < 8; i++) {
    	            C_[i] = C[i];
    	        }

    	        // Calculate new counter values
    	        C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
    	        C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
    	        C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
    	        C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
    	        C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
    	        C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
    	        C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
    	        C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
    	        this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

    	        // Calculate the g-values
    	        for (var i = 0; i < 8; i++) {
    	            var gx = X[i] + C[i];

    	            // Construct high and low argument for squaring
    	            var ga = gx & 0xffff;
    	            var gb = gx >>> 16;

    	            // Calculate high and low result of squaring
    	            var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
    	            var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

    	            // High XOR low
    	            G[i] = gh ^ gl;
    	        }

    	        // Calculate new state values
    	        X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
    	        X[1] = (G[1] + ((G[0] << 8)  | (G[0] >>> 24)) + G[7]) | 0;
    	        X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
    	        X[3] = (G[3] + ((G[2] << 8)  | (G[2] >>> 24)) + G[1]) | 0;
    	        X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
    	        X[5] = (G[5] + ((G[4] << 8)  | (G[4] >>> 24)) + G[3]) | 0;
    	        X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
    	        X[7] = (G[7] + ((G[6] << 8)  | (G[6] >>> 24)) + G[5]) | 0;
    	    }

    	    /**
    	     * Shortcut functions to the cipher's object interface.
    	     *
    	     * @example
    	     *
    	     *     var ciphertext = CryptoJS.RabbitLegacy.encrypt(message, key, cfg);
    	     *     var plaintext  = CryptoJS.RabbitLegacy.decrypt(ciphertext, key, cfg);
    	     */
    	    C.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);
    	}());


    	return CryptoJS.RabbitLegacy;

    }));
    });

    var cryptoJs = createCommonjsModule(function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = exports = factory(core$2, x64Core, libTypedarrays, encUtf16, encBase64, md5, sha1, sha256, sha224, sha512, sha384, sha3, ripemd160, hmac, pbkdf2, evpkdf, cipherCore, modeCfb, modeCtr, modeCtrGladman, modeOfb, modeEcb, padAnsix923, padIso10126, padIso97971, padZeropadding, padNopadding, formatHex, aes, tripledes, rc4, rabbit, rabbitLegacy);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	return CryptoJS;

    }));
    });

    var Notify = /** @class */ (function () {
        function Notify(webhook, githubCtx, options) {
            this.timestamp = new Date().getTime().toString();
            this.webhook = webhook;
            this.githubCtx = githubCtx;
            this.options = options;
            this.signKey = options.signKey;
            this.init(githubCtx);
        }
        Notify.prototype.init = function (ctx) {
            if (ctx === void 0) { ctx = this.githubCtx; }
            this.timestamp = new Date().getTime().toString();
            if (this.signKey) {
                this.signature = this.genSin(this.signKey, this.timestamp);
            }
            var ref = ctx.ref, actor = ctx.actor, workflow = ctx.workflow, eventName = ctx.eventName, sha = ctx.sha, payload = ctx.payload;
            var _a = payload.commits, commits = _a === void 0 ? [] : _a, comment = payload.comment, repository = payload.repository;
            var commitsContent = [];
            commits.map(function (item) { return commitsContent.push(item.message); });
            var actionUrl = (repository === null || repository === void 0 ? void 0 : repository.html_url) + "/commit/" + sha + "/checks/" + workflow;
            this.ctxFormatContent = {
                ref: ref,
                actor: actor,
                workflow: workflow,
                eventName: eventName,
                sha: sha,
                payload: payload,
                comment: comment,
                commitsContent: commitsContent.join('\n'),
                actionUrl: actionUrl,
                repository: repository,
            };
            this.githubCtx = ctx;
        };
        return Notify;
    }());
    //# sourceMappingURL=notify.js.map

    var Lark = /** @class */ (function (_super) {
        __extends(Lark, _super);
        function Lark(webhook, githubCtx, options) {
            return _super.call(this, webhook, githubCtx, options) || this;
        }
        Lark.prototype.notify = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, ctxFormatContent, timestamp, sign, options, ctx, requestPayload, res;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this, ctxFormatContent = _a.ctxFormatContent, timestamp = _a.timestamp, sign = _a.signature, options = _a.options, ctx = _a.githubCtx;
                            requestPayload = {
                                timestamp: timestamp,
                                sign: sign,
                                msg_type: 'interactive',
                                card: {
                                    config: {
                                        wide_screen_mode: true,
                                        enable_forward: true,
                                    },
                                    header: {
                                        title: {
                                            content: "" + options.notifyTitle,
                                            tag: 'plain_text',
                                        },
                                        template: 'red',
                                    },
                                    elements: [
                                        {
                                            tag: 'div',
                                            text: {
                                                content: "**Author** " + ctxFormatContent.actor,
                                                tag: 'lark_md',
                                            },
                                        },
                                        {
                                            tag: 'div',
                                            text: {
                                                content: "**Ref** " + ctxFormatContent.ref + "  **Event** " + ctxFormatContent.eventName,
                                                tag: 'lark_md',
                                            },
                                        },
                                        {
                                            tag: 'div',
                                            text: {
                                                content: "**Message**\uFF0C\n " + (options.notifyMessage ||
                                                    ctxFormatContent.commitsContent),
                                                tag: 'lark_md',
                                            },
                                        },
                                        {
                                            actions: [
                                                {
                                                    tag: 'button',
                                                    text: {
                                                        content: 'More Information :玫瑰:',
                                                        tag: 'lark_md',
                                                    },
                                                    url: "" + ctxFormatContent.actionUrl,
                                                    type: 'default',
                                                    value: {},
                                                },
                                            ],
                                            tag: 'action',
                                        },
                                    ],
                                },
                            };
                            return [4 /*yield*/, axios$1({
                                    method: 'post',
                                    url: this.webhook,
                                    data: requestPayload,
                                })];
                        case 1:
                            res = _b.sent();
                            return [2 /*return*/, {
                                    code: res.code || res.data.StatusCode,
                                    data: res.data,
                                    msg: res.msg,
                                }];
                    }
                });
            });
        };
        Lark.prototype.genSin = function (signKey, timestamp) {
            if (signKey === void 0) { signKey = this.signKey; }
            var crytoStr = timestamp + "\n" + this.signKey;
            var signature = cryptoJs.enc.Base64.stringify(cryptoJs.HmacSHA256('', crytoStr));
            return signature;
        };
        return Lark;
    }(Notify));
    //# sourceMappingURL=lark.js.map

    var Slack = /** @class */ (function (_super) {
        __extends(Slack, _super);
        function Slack(webhook, githubCtx, options) {
            return _super.call(this, webhook, githubCtx, options) || this;
        }
        Slack.prototype.notify = function () {
            throw new Error('Method not implemented.');
        };
        Slack.prototype.genSin = function (signKey, timestamp) {
            throw new Error('Method not implemented.');
        };
        return Slack;
    }(Notify));
    //# sourceMappingURL=slask.js.map

    var Telegram = /** @class */ (function (_super) {
        __extends(Telegram, _super);
        function Telegram(webhook, githubCtx, options) {
            return _super.call(this, webhook, githubCtx, options) || this;
        }
        Telegram.prototype.notify = function () {
            throw new Error('Method not implemented.');
        };
        Telegram.prototype.genSin = function (signKey, timestamp) {
            throw new Error('Method not implemented.');
        };
        return Telegram;
    }(Notify));
    //# sourceMappingURL=telegram.js.map

    var Plat = {
        Lark: Lark,
        Slack: Slack,
        Telegram: Telegram
    };
    //# sourceMappingURL=index.js.map

    function run() {
        return __awaiter(this, void 0, void 0, function () {
            var type, selfNotify, notifyTitle, notifyMessage, _a, NOTIFY_WEBHOOK, NOTIFY_SIGNKEY, _b, sourceDir, notify, msg, notifyFn, error_1, res, error_2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 8, , 9]);
                        type = core$1.getInput('plat_type');
                        selfNotify = core$1.getInput('self_notify');
                        notifyTitle = core$1.getInput('notify_title');
                        notifyMessage = core$1.getInput('notify_message');
                        _a = process.env, NOTIFY_WEBHOOK = _a.NOTIFY_WEBHOOK, NOTIFY_SIGNKEY = _a.NOTIFY_SIGNKEY, _b = _a.GITHUB_WORKSPACE, sourceDir = _b === void 0 ? '' : _b;
                        if (!type || !NOTIFY_WEBHOOK) {
                            core$1.setFailed('required args is missing, please check your plat_type or NOTIFY_WEBHOOK setting');
                            return [2 /*return*/];
                        }
                        notify = new Plat[type](NOTIFY_WEBHOOK, github$1.context, {
                            notifyTitle: notifyTitle,
                            notifyMessage: notifyMessage,
                            signKey: NOTIFY_SIGNKEY,
                        });
                        msg = void 0;
                        if (!(selfNotify === 'true')) return [3 /*break*/, 5];
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        notifyFn = require(path.join(sourceDir, '.echo.actions.notify.js'));
                        return [4 /*yield*/, notifyFn.call(notify, github$1.context, process.env, axios$1, core$1)];
                    case 2:
                        msg = _c.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _c.sent();
                        core$1.setFailed(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, notify.notify()];
                    case 6:
                        res = _c.sent();
                        msg = "code: " + res.code + ", msg: " + res.msg;
                        _c.label = 7;
                    case 7:
                        core$1.setOutput('msg', msg);
                        return [3 /*break*/, 9];
                    case 8:
                        error_2 = _c.sent();
                        core$1.setFailed(error_2);
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        });
    }
    void run();
    //# sourceMappingURL=index.js.map

})));
//# sourceMappingURL=actions.notify.umd.js.map
