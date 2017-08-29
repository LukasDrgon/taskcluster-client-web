// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import Client from '../Client';

export default class AuthEvents extends Client {
  constructor() {
    super({
      baseUrl: '',
      exchangePrefix: 'exchange/taskcluster-auth/v1/'
    });
  }

  // Message that a new client has been created.
  clientCreated(routingKeyPattern) {
    const entry = {type:'topic-exchange',exchange:'client-created',name:'clientCreated',title:'Client Created Messages',description:'Message that a new client has been created.',routingKey:[{name:'reserved',summary:'Space reserved for future routing-key entries, you should always match this entry with `#`. As automatically done by our tooling, if not specified.',multipleWords:true,required:false}],schema:'http://schemas.taskcluster.net/auth/v1/client-message.json#'};

    return this.normalizeRoutingKeyPattern(entry, routingKeyPattern);
  }

  // Message that a new client has been updated.
  clientUpdated(routingKeyPattern) {
    const entry = {type:'topic-exchange',exchange:'client-updated',name:'clientUpdated',title:'Client Updated Messages',description:'Message that a new client has been updated.',routingKey:[{name:'reserved',summary:'Space reserved for future routing-key entries, you should always match this entry with `#`. As automatically done by our tooling, if not specified.',multipleWords:true,required:false}],schema:'http://schemas.taskcluster.net/auth/v1/client-message.json#'};

    return this.normalizeRoutingKeyPattern(entry, routingKeyPattern);
  }

  // Message that a new client has been deleted.
  clientDeleted(routingKeyPattern) {
    const entry = {type:'topic-exchange',exchange:'client-deleted',name:'clientDeleted',title:'Client Deleted Messages',description:'Message that a new client has been deleted.',routingKey:[{name:'reserved',summary:'Space reserved for future routing-key entries, you should always match this entry with `#`. As automatically done by our tooling, if not specified.',multipleWords:true,required:false}],schema:'http://schemas.taskcluster.net/auth/v1/client-message.json#'};

    return this.normalizeRoutingKeyPattern(entry, routingKeyPattern);
  }

  // Message that a new role has been created.
  roleCreated(routingKeyPattern) {
    const entry = {type:'topic-exchange',exchange:'role-created',name:'roleCreated',title:'Role Created Messages',description:'Message that a new role has been created.',routingKey:[{name:'reserved',summary:'Space reserved for future routing-key entries, you should always match this entry with `#`. As automatically done by our tooling, if not specified.',multipleWords:true,required:false}],schema:'http://schemas.taskcluster.net/auth/v1/role-message.json#'};

    return this.normalizeRoutingKeyPattern(entry, routingKeyPattern);
  }

  // Message that a new role has been updated.
  roleUpdated(routingKeyPattern) {
    const entry = {type:'topic-exchange',exchange:'role-updated',name:'roleUpdated',title:'Role Updated Messages',description:'Message that a new role has been updated.',routingKey:[{name:'reserved',summary:'Space reserved for future routing-key entries, you should always match this entry with `#`. As automatically done by our tooling, if not specified.',multipleWords:true,required:false}],schema:'http://schemas.taskcluster.net/auth/v1/role-message.json#'};

    return this.normalizeRoutingKeyPattern(entry, routingKeyPattern);
  }

  // Message that a new role has been deleted.
  roleDeleted(routingKeyPattern) {
    const entry = {type:'topic-exchange',exchange:'role-deleted',name:'roleDeleted',title:'Role Deleted Messages',description:'Message that a new role has been deleted.',routingKey:[{name:'reserved',summary:'Space reserved for future routing-key entries, you should always match this entry with `#`. As automatically done by our tooling, if not specified.',multipleWords:true,required:false}],schema:'http://schemas.taskcluster.net/auth/v1/role-message.json#'};

    return this.normalizeRoutingKeyPattern(entry, routingKeyPattern);
  }
}