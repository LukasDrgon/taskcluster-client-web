// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import Client from '../Client';

export default class Auth extends Client {
  constructor() {
    super({
      baseUrl: 'https://auth.taskcluster.net/v1',
      exchangePrefix: ''
    });
  }

  // Get a list of all clients.  With `prefix`, only clients for which
  // it is a prefix of the clientId are returned.
  listClients(...args) {
    const entry = {type:'function',method:'get',route:'/clients/',query:['prefix'],args:[],name:'listClients',stability:'stable',title:'List Clients',description:'Get a list of all clients.  With `prefix`, only clients for which\nit is a prefix of the clientId are returned.',output:'http://schemas.taskcluster.net/auth/v1/list-clients-response.json#'};

    this.validateMethod(entry, args);
    return this.request(entry, args);
  }

  // Get information about a single client.
  client(...args) {
    const entry = {type:'function',method:'get',route:'/clients/<clientId>',query:[],args:['clientId'],name:'client',stability:'stable',title:'Get Client',description:'Get information about a single client.',output:'http://schemas.taskcluster.net/auth/v1/get-client-response.json#'};

    this.validateMethod(entry, args);
    return this.request(entry, args);
  }

  // Create a new client and get the `accessToken` for this client.
  // You should store the `accessToken` from this API call as there is no
  // other way to retrieve it.
  // If you loose the `accessToken` you can call `resetAccessToken` to reset
  // it, and a new `accessToken` will be returned, but you cannot retrieve the
  // current `accessToken`.
  // If a client with the same `clientId` already exists this operation will
  // fail. Use `updateClient` if you wish to update an existing client.
  // The caller's scopes must satisfy `scopes`.
  createClient(...args) {
    const entry = {type:'function',method:'put',route:'/clients/<clientId>',query:[],args:['clientId'],name:'createClient',stability:'stable',title:'Create Client',description:'Create a new client and get the `accessToken` for this client.\nYou should store the `accessToken` from this API call as there is no\nother way to retrieve it.\n\nIf you loose the `accessToken` you can call `resetAccessToken` to reset\nit, and a new `accessToken` will be returned, but you cannot retrieve the\ncurrent `accessToken`.\n\nIf a client with the same `clientId` already exists this operation will\nfail. Use `updateClient` if you wish to update an existing client.\n\nThe caller\'s scopes must satisfy `scopes`.',scopes:[['auth:create-client:<clientId>']],input:'http://schemas.taskcluster.net/auth/v1/create-client-request.json#',output:'http://schemas.taskcluster.net/auth/v1/create-client-response.json#'};

    this.validateMethod(entry, args);
    return this.request(entry, args);
  }

  // Reset a clients `accessToken`, this will revoke the existing
  // `accessToken`, generate a new `accessToken` and return it from this
  // call.
  // There is no way to retrieve an existing `accessToken`, so if you loose it
  // you must reset the accessToken to acquire it again.
  resetAccessToken(...args) {
    const entry = {type:'function',method:'post',route:'/clients/<clientId>/reset',query:[],args:['clientId'],name:'resetAccessToken',stability:'stable',title:'Reset `accessToken`',description:'Reset a clients `accessToken`, this will revoke the existing\n`accessToken`, generate a new `accessToken` and return it from this\ncall.\n\nThere is no way to retrieve an existing `accessToken`, so if you loose it\nyou must reset the accessToken to acquire it again.',scopes:[['auth:reset-access-token:<clientId>']],output:'http://schemas.taskcluster.net/auth/v1/create-client-response.json#'};

    this.validateMethod(entry, args);
    return this.request(entry, args);
  }

  // Update an exisiting client. The `clientId` and `accessToken` cannot be
  // updated, but `scopes` can be modified.  The caller's scopes must
  // satisfy all scopes being added to the client in the update operation.
  // If no scopes are given in the request, the client's scopes remain
  // unchanged
  updateClient(...args) {
    const entry = {type:'function',method:'post',route:'/clients/<clientId>',query:[],args:['clientId'],name:'updateClient',stability:'stable',title:'Update Client',description:'Update an exisiting client. The `clientId` and `accessToken` cannot be\nupdated, but `scopes` can be modified.  The caller\'s scopes must\nsatisfy all scopes being added to the client in the update operation.\nIf no scopes are given in the request, the client\'s scopes remain\nunchanged',scopes:[['auth:update-client:<clientId>']],input:'http://schemas.taskcluster.net/auth/v1/create-client-request.json#',output:'http://schemas.taskcluster.net/auth/v1/get-client-response.json#'};

    this.validateMethod(entry, args);
    return this.request(entry, args);
  }

  // Enable a client that was disabled with `disableClient`.  If the client
  // is already enabled, this does nothing.
  // This is typically used by identity providers to re-enable clients that
  // had been disabled when the corresponding identity's scopes changed.
  enableClient(...args) {
    const entry = {type:'function',method:'post',route:'/clients/<clientId>/enable',query:[],args:['clientId'],name:'enableClient',stability:'stable',title:'Enable Client',description:'Enable a client that was disabled with `disableClient`.  If the client\nis already enabled, this does nothing.\n\nThis is typically used by identity providers to re-enable clients that\nhad been disabled when the corresponding identity\'s scopes changed.',scopes:[['auth:enable-client:<clientId>']],output:'http://schemas.taskcluster.net/auth/v1/get-client-response.json#'};

    this.validateMethod(entry, args);
    return this.request(entry, args);
  }

  // Disable a client.  If the client is already disabled, this does nothing.
  // This is typically used by identity providers to disable clients when the
  // corresponding identity's scopes no longer satisfy the client's scopes.
  disableClient(...args) {
    const entry = {type:'function',method:'post',route:'/clients/<clientId>/disable',query:[],args:['clientId'],name:'disableClient',stability:'stable',title:'Disable Client',description:'Disable a client.  If the client is already disabled, this does nothing.\n\nThis is typically used by identity providers to disable clients when the\ncorresponding identity\'s scopes no longer satisfy the client\'s scopes.',scopes:[['auth:disable-client:<clientId>']],output:'http://schemas.taskcluster.net/auth/v1/get-client-response.json#'};

    this.validateMethod(entry, args);
    return this.request(entry, args);
  }

  // Delete a client, please note that any roles related to this client must
  // be deleted independently.
  deleteClient(...args) {
    const entry = {type:'function',method:'delete',route:'/clients/<clientId>',query:[],args:['clientId'],name:'deleteClient',stability:'stable',title:'Delete Client',description:'Delete a client, please note that any roles related to this client must\nbe deleted independently.',scopes:[['auth:delete-client:<clientId>']]};

    this.validateMethod(entry, args);
    return this.request(entry, args);
  }

  // Get a list of all roles, each role object also includes the list of
  // scopes it expands to.
  listRoles(...args) {
    const entry = {type:'function',method:'get',route:'/roles/',query:[],args:[],name:'listRoles',stability:'stable',title:'List Roles',description:'Get a list of all roles, each role object also includes the list of\nscopes it expands to.',output:'http://schemas.taskcluster.net/auth/v1/list-roles-response.json#'};

    this.validateMethod(entry, args);
    return this.request(entry, args);
  }

  // Get information about a single role, including the set of scopes that the
  // role expands to.
  role(...args) {
    const entry = {type:'function',method:'get',route:'/roles/<roleId>',query:[],args:['roleId'],name:'role',stability:'stable',title:'Get Role',description:'Get information about a single role, including the set of scopes that the\nrole expands to.',output:'http://schemas.taskcluster.net/auth/v1/get-role-response.json#'};

    this.validateMethod(entry, args);
    return this.request(entry, args);
  }

  // Create a new role.
  // The caller's scopes must satisfy the new role's scopes.
  // If there already exists a role with the same `roleId` this operation
  // will fail. Use `updateRole` to modify an existing role.
  createRole(...args) {
    const entry = {type:'function',method:'put',route:'/roles/<roleId>',query:[],args:['roleId'],name:'createRole',stability:'stable',title:'Create Role',description:'Create a new role.\n\nThe caller\'s scopes must satisfy the new role\'s scopes.\n\nIf there already exists a role with the same `roleId` this operation\nwill fail. Use `updateRole` to modify an existing role.',scopes:[['auth:create-role:<roleId>']],input:'http://schemas.taskcluster.net/auth/v1/create-role-request.json#',output:'http://schemas.taskcluster.net/auth/v1/get-role-response.json#'};

    this.validateMethod(entry, args);
    return this.request(entry, args);
  }

  // Update an existing role.
  // The caller's scopes must satisfy all of the new scopes being added, but
  // need not satisfy all of the client's existing scopes.
  updateRole(...args) {
    const entry = {type:'function',method:'post',route:'/roles/<roleId>',query:[],args:['roleId'],name:'updateRole',stability:'stable',title:'Update Role',description:'Update an existing role.\n\nThe caller\'s scopes must satisfy all of the new scopes being added, but\nneed not satisfy all of the client\'s existing scopes.',scopes:[['auth:update-role:<roleId>']],input:'http://schemas.taskcluster.net/auth/v1/create-role-request.json#',output:'http://schemas.taskcluster.net/auth/v1/get-role-response.json#'};

    this.validateMethod(entry, args);
    return this.request(entry, args);
  }

  // Delete a role. This operation will succeed regardless of whether or not
  // the role exists.
  deleteRole(...args) {
    const entry = {type:'function',method:'delete',route:'/roles/<roleId>',query:[],args:['roleId'],name:'deleteRole',stability:'stable',title:'Delete Role',description:'Delete a role. This operation will succeed regardless of whether or not\nthe role exists.',scopes:[['auth:delete-role:<roleId>']]};

    this.validateMethod(entry, args);
    return this.request(entry, args);
  }

  // Return an expanded copy of the given scopeset, with scopes implied by any
  // roles included.
  expandScopes(...args) {
    const entry = {type:'function',method:'get',route:'/scopes/expand',query:[],args:[],name:'expandScopes',stability:'stable',title:'Expand Scopes',description:'Return an expanded copy of the given scopeset, with scopes implied by any\nroles included.',input:'http://schemas.taskcluster.net/auth/v1/scopeset.json#',output:'http://schemas.taskcluster.net/auth/v1/scopeset.json#'};

    this.validateMethod(entry, args);
    return this.request(entry, args);
  }

  // Return the expanded scopes available in the request, taking into account all sources
  // of scopes and scope restrictions (temporary credentials, assumeScopes, client scopes,
  // and roles).
  currentScopes(...args) {
    const entry = {type:'function',method:'get',route:'/scopes/current',query:[],args:[],name:'currentScopes',stability:'stable',title:'Get Current Scopes',description:'Return the expanded scopes available in the request, taking into account all sources\nof scopes and scope restrictions (temporary credentials, assumeScopes, client scopes,\nand roles).',output:'http://schemas.taskcluster.net/auth/v1/scopeset.json#'};

    this.validateMethod(entry, args);
    return this.request(entry, args);
  }

  // Get temporary AWS credentials for `read-write` or `read-only` access to
  // a given `bucket` and `prefix` within that bucket.
  // The `level` parameter can be `read-write` or `read-only` and determines
  // which type of credentials are returned. Please note that the `level`
  // parameter is required in the scope guarding access.  The bucket name must
  // not contain `.`, as recommended by Amazon.
  // This method can only allow access to a whitelisted set of buckets.  To add
  // a bucket to that whitelist, contact the Taskcluster team, who will add it to
  // the appropriate IAM policy.  If the bucket is in a different AWS account, you
  // will also need to add a bucket policy allowing access from the Taskcluster
  // account.  That policy should look like this:
  // ```js
  // {
  //   "Version": "2012-10-17",
  //   "Statement": [
  //     {
  //       "Sid": "allow-taskcluster-auth-to-delegate-access",
  //       "Effect": "Allow",
  //       "Principal": {
  //         "AWS": "arn:aws:iam::692406183521:root"
  //       },
  //       "Action": [
  //         "s3:ListBucket",
  //         "s3:GetObject",
  //         "s3:PutObject",
  //         "s3:DeleteObject",
  //         "s3:GetBucketLocation"
  //       ],
  //       "Resource": [
  //         "arn:aws:s3:::<bucket>",
  //         "arn:aws:s3:::<bucket>/*"
  //       ]
  //     }
  //   ]
  // }
  // ```
  // The credentials are set to expire after an hour, but this behavior is
  // subject to change. Hence, you should always read the `expires` property
  // from the response, if you intend to maintain active credentials in your
  // application.
  // Please note that your `prefix` may not start with slash `/`. Such a prefix
  // is allowed on S3, but we forbid it here to discourage bad behavior.
  // Also note that if your `prefix` doesn't end in a slash `/`, the STS
  // credentials may allow access to unexpected keys, as S3 does not treat
  // slashes specially.  For example, a prefix of `my-folder` will allow
  // access to `my-folder/file.txt` as expected, but also to `my-folder.txt`,
  // which may not be intended.
  // Finally, note that the `PutObjectAcl` call is not allowed.  Passing a canned
  // ACL other than `private` to `PutObject` is treated as a `PutObjectAcl` call, and
  // will result in an access-denied error from AWS.  This limitation is due to a
  // security flaw in Amazon S3 which might otherwise allow indefinite access to
  // uploaded objects.
  // **EC2 metadata compatibility**, if the querystring parameter
  // `?format=iam-role-compat` is given, the response will be compatible
  // with the JSON exposed by the EC2 metadata service. This aims to ease
  // compatibility for libraries and tools built to auto-refresh credentials.
  // For details on the format returned by EC2 metadata service see:
  // [EC2 User Guide](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html#instance-metadata-security-credentials).
  awsS3Credentials(...args) {
    const entry = {type:'function',method:'get',route:'/aws/s3/<level>/<bucket>/<prefix>',query:['format'],args:['level','bucket','prefix'],name:'awsS3Credentials',stability:'stable',title:'Get Temporary Read/Write Credentials S3',description:'Get temporary AWS credentials for `read-write` or `read-only` access to\na given `bucket` and `prefix` within that bucket.\nThe `level` parameter can be `read-write` or `read-only` and determines\nwhich type of credentials are returned. Please note that the `level`\nparameter is required in the scope guarding access.  The bucket name must\nnot contain `.`, as recommended by Amazon.\n\nThis method can only allow access to a whitelisted set of buckets.  To add\na bucket to that whitelist, contact the Taskcluster team, who will add it to\nthe appropriate IAM policy.  If the bucket is in a different AWS account, you\nwill also need to add a bucket policy allowing access from the Taskcluster\naccount.  That policy should look like this:\n\n```js\n{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Sid": "allow-taskcluster-auth-to-delegate-access",\n      "Effect": "Allow",\n      "Principal": {\n        "AWS": "arn:aws:iam::692406183521:root"\n      },\n      "Action": [\n        "s3:ListBucket",\n        "s3:GetObject",\n        "s3:PutObject",\n        "s3:DeleteObject",\n        "s3:GetBucketLocation"\n      ],\n      "Resource": [\n        "arn:aws:s3:::<bucket>",\n        "arn:aws:s3:::<bucket>/*"\n      ]\n    }\n  ]\n}\n```\n\nThe credentials are set to expire after an hour, but this behavior is\nsubject to change. Hence, you should always read the `expires` property\nfrom the response, if you intend to maintain active credentials in your\napplication.\n\nPlease note that your `prefix` may not start with slash `/`. Such a prefix\nis allowed on S3, but we forbid it here to discourage bad behavior.\n\nAlso note that if your `prefix` doesn\'t end in a slash `/`, the STS\ncredentials may allow access to unexpected keys, as S3 does not treat\nslashes specially.  For example, a prefix of `my-folder` will allow\naccess to `my-folder/file.txt` as expected, but also to `my-folder.txt`,\nwhich may not be intended.\n\nFinally, note that the `PutObjectAcl` call is not allowed.  Passing a canned\nACL other than `private` to `PutObject` is treated as a `PutObjectAcl` call, and\nwill result in an access-denied error from AWS.  This limitation is due to a\nsecurity flaw in Amazon S3 which might otherwise allow indefinite access to\nuploaded objects.\n\n**EC2 metadata compatibility**, if the querystring parameter\n`?format=iam-role-compat` is given, the response will be compatible\nwith the JSON exposed by the EC2 metadata service. This aims to ease\ncompatibility for libraries and tools built to auto-refresh credentials.\nFor details on the format returned by EC2 metadata service see:\n[EC2 User Guide](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html#instance-metadata-security-credentials).',scopes:[['auth:aws-s3:<level>:<bucket>/<prefix>']],output:'http://schemas.taskcluster.net/auth/v1/aws-s3-credentials-response.json#'};

    this.validateMethod(entry, args);
    return this.request(entry, args);
  }

  // Retrieve a list of all Azure accounts managed by Taskcluster Auth.
  azureAccounts(...args) {
    const entry = {type:'function',method:'get',route:'/azure/accounts',query:[],args:[],name:'azureAccounts',stability:'stable',title:'List Accounts Managed by Auth',description:'Retrieve a list of all Azure accounts managed by Taskcluster Auth.',scopes:[['auth:azure-table:list-accounts']],output:'http://schemas.taskcluster.net/auth/v1/azure-account-list-response.json#'};

    this.validateMethod(entry, args);
    return this.request(entry, args);
  }

  // Retrieve a list of all tables in an account.
  azureTables(...args) {
    const entry = {type:'function',method:'get',route:'/azure/<account>/tables',query:['continuationToken'],args:['account'],name:'azureTables',stability:'stable',title:'List Tables in an Account Managed by Auth',description:'Retrieve a list of all tables in an account.',scopes:[['auth:azure-table:list-tables:<account>']],output:'http://schemas.taskcluster.net/auth/v1/azure-table-list-response.json#'};

    this.validateMethod(entry, args);
    return this.request(entry, args);
  }

  // Get a shared access signature (SAS) string for use with a specific Azure
  // Table Storage table.
  // The `level` parameter can be `read-write` or `read-only` and determines
  // which type of credentials are returned.  If level is read-write, it will create the
  // table if it doesn't already exist.
  azureTableSAS(...args) {
    const entry = {type:'function',method:'get',route:'/azure/<account>/table/<table>/<level>',query:[],args:['account','table','level'],name:'azureTableSAS',stability:'stable',title:'Get Shared-Access-Signature for Azure Table',description:'Get a shared access signature (SAS) string for use with a specific Azure\nTable Storage table.\n\nThe `level` parameter can be `read-write` or `read-only` and determines\nwhich type of credentials are returned.  If level is read-write, it will create the\ntable if it doesn\'t already exist.',scopes:[['auth:azure-table:<level>:<account>/<table>']],output:'http://schemas.taskcluster.net/auth/v1/azure-table-access-response.json#'};

    this.validateMethod(entry, args);
    return this.request(entry, args);
  }

  // Get a shared access signature (SAS) string for use with a specific Azure
  // Blob Storage container.
  // The `level` parameter can be `read-write` or `read-only` and determines
  // which type of credentials are returned.  If level is read-write, it will create the
  // container if it doesn't already exist.
  azureBlobSAS(...args) {
    const entry = {type:'function',method:'get',route:'/azure/<account>/containers/<container>/<level>',query:[],args:['account','container','level'],name:'azureBlobSAS',stability:'stable',title:'Get Shared-Access-Signature for Azure Blob',description:'Get a shared access signature (SAS) string for use with a specific Azure\nBlob Storage container.\n\nThe `level` parameter can be `read-write` or `read-only` and determines\nwhich type of credentials are returned.  If level is read-write, it will create the\ncontainer if it doesn\'t already exist.',scopes:[['auth:azure-blob:<level>:<account>/<container>']],output:'http://schemas.taskcluster.net/auth/v1/azure-blob-response.json#'};

    this.validateMethod(entry, args);
    return this.request(entry, args);
  }

  // Get temporary DSN (access credentials) for a sentry project.
  // The credentials returned can be used with any Sentry client for up to
  // 24 hours, after which the credentials will be automatically disabled.
  // If the project doesn't exist it will be created, and assigned to the
  // initial team configured for this component. Contact a Sentry admin
  // to have the project transferred to a team you have access to if needed
  sentryDSN(...args) {
    const entry = {type:'function',method:'get',route:'/sentry/<project>/dsn',query:[],args:['project'],name:'sentryDSN',stability:'stable',title:'Get DSN for Sentry Project',description:'Get temporary DSN (access credentials) for a sentry project.\nThe credentials returned can be used with any Sentry client for up to\n24 hours, after which the credentials will be automatically disabled.\n\nIf the project doesn\'t exist it will be created, and assigned to the\ninitial team configured for this component. Contact a Sentry admin\nto have the project transferred to a team you have access to if needed',scopes:[['auth:sentry:<project>']],output:'http://schemas.taskcluster.net/auth/v1/sentry-dsn-response.json#'};

    this.validateMethod(entry, args);
    return this.request(entry, args);
  }

  // Get temporary `token` and `baseUrl` for sending metrics to statsum.
  // The token is valid for 24 hours, clients should refresh after expiration.
  statsumToken(...args) {
    const entry = {type:'function',method:'get',route:'/statsum/<project>/token',query:[],args:['project'],name:'statsumToken',stability:'stable',title:'Get Token for Statsum Project',description:'Get temporary `token` and `baseUrl` for sending metrics to statsum.\n\nThe token is valid for 24 hours, clients should refresh after expiration.',scopes:[['auth:statsum:<project>']],output:'http://schemas.taskcluster.net/auth/v1/statsum-token-response.json#'};

    this.validateMethod(entry, args);
    return this.request(entry, args);
  }

  // Get temporary `token` and `id` for connecting to webhooktunnel
  // The token is valid for 96 hours, clients should refresh after expiration.
  webhooktunnelToken(...args) {
    const entry = {type:'function',method:'get',route:'/webhooktunnel',query:[],args:[],name:'webhooktunnelToken',stability:'stable',title:'Get Token for Webhooktunnel Proxy',description:'Get temporary `token` and `id` for connecting to webhooktunnel\nThe token is valid for 96 hours, clients should refresh after expiration.',scopes:[['auth:webhooktunnel']],output:'http://schemas.taskcluster.net/auth/v1/webhooktunnel-token-response.json#'};

    this.validateMethod(entry, args);
    return this.request(entry, args);
  }

  // Validate the request signature given on input and return list of scopes
  // that the authenticating client has.
  // This method is used by other services that wish rely on Taskcluster
  // credentials for authentication. This way we can use Hawk without having
  // the secret credentials leave this service.
  authenticateHawk(...args) {
    const entry = {type:'function',method:'post',route:'/authenticate-hawk',query:[],args:[],name:'authenticateHawk',stability:'stable',title:'Authenticate Hawk Request',description:'Validate the request signature given on input and return list of scopes\nthat the authenticating client has.\n\nThis method is used by other services that wish rely on Taskcluster\ncredentials for authentication. This way we can use Hawk without having\nthe secret credentials leave this service.',input:'http://schemas.taskcluster.net/auth/v1/authenticate-hawk-request.json#',output:'http://schemas.taskcluster.net/auth/v1/authenticate-hawk-response.json#'};

    this.validateMethod(entry, args);
    return this.request(entry, args);
  }

  // Utility method to test client implementations of Taskcluster
  // authentication.
  // Rather than using real credentials, this endpoint accepts requests with
  // clientId `tester` and accessToken `no-secret`. That client's scopes are
  // based on `clientScopes` in the request body.
  // The request is validated, with any certificate, authorizedScopes, etc.
  // applied, and the resulting scopes are checked against `requiredScopes`
  // from the request body. On success, the response contains the clientId
  // and scopes as seen by the API method.
  testAuthenticate(...args) {
    const entry = {type:'function',method:'post',route:'/test-authenticate',query:[],args:[],name:'testAuthenticate',stability:'stable',title:'Test Authentication',description:'Utility method to test client implementations of Taskcluster\nauthentication.\n\nRather than using real credentials, this endpoint accepts requests with\nclientId `tester` and accessToken `no-secret`. That client\'s scopes are\nbased on `clientScopes` in the request body.\n\nThe request is validated, with any certificate, authorizedScopes, etc.\napplied, and the resulting scopes are checked against `requiredScopes`\nfrom the request body. On success, the response contains the clientId\nand scopes as seen by the API method.',input:'http://schemas.taskcluster.net/auth/v1/test-authenticate-request.json#',output:'http://schemas.taskcluster.net/auth/v1/test-authenticate-response.json#'};

    this.validateMethod(entry, args);
    return this.request(entry, args);
  }

  // Utility method similar to `testAuthenticate`, but with the GET method,
  // so it can be used with signed URLs (bewits).
  // Rather than using real credentials, this endpoint accepts requests with
  // clientId `tester` and accessToken `no-secret`. That client's scopes are
  // `['test:*', 'auth:create-client:test:*']`.  The call fails if the 
  // `test:authenticate-get` scope is not available.
  // The request is validated, with any certificate, authorizedScopes, etc.
  // applied, and the resulting scopes are checked, just like any API call.
  // On success, the response contains the clientId and scopes as seen by
  // the API method.
  // This method may later be extended to allow specification of client and
  // required scopes via query arguments.
  testAuthenticateGet(...args) {
    const entry = {type:'function',method:'get',route:'/test-authenticate-get/',query:[],args:[],name:'testAuthenticateGet',stability:'stable',title:'Test Authentication (GET)',description:'Utility method similar to `testAuthenticate`, but with the GET method,\nso it can be used with signed URLs (bewits).\n\nRather than using real credentials, this endpoint accepts requests with\nclientId `tester` and accessToken `no-secret`. That client\'s scopes are\n`[\'test:*\', \'auth:create-client:test:*\']`.  The call fails if the \n`test:authenticate-get` scope is not available.\n\nThe request is validated, with any certificate, authorizedScopes, etc.\napplied, and the resulting scopes are checked, just like any API call.\nOn success, the response contains the clientId and scopes as seen by\nthe API method.\n\nThis method may later be extended to allow specification of client and\nrequired scopes via query arguments.',output:'http://schemas.taskcluster.net/auth/v1/test-authenticate-response.json#'};

    this.validateMethod(entry, args);
    return this.request(entry, args);
  }

  // Respond without doing anything.
  // This endpoint is used to check that the service is up.
  ping(...args) {
    const entry = {type:'function',method:'get',route:'/ping',query:[],args:[],name:'ping',stability:'stable',title:'Ping Server',description:'Respond without doing anything.\nThis endpoint is used to check that the service is up.'};

    this.validateMethod(entry, args);
    return this.request(entry, args);
  }
}
