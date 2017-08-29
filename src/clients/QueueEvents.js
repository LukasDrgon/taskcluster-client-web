// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import Client from '../Client';

export default class QueueEvents extends Client {
  constructor() {
    super({
      baseUrl: '',
      exchangePrefix: 'exchange/taskcluster-queue/v1/'
    });
  }

  // When a task is created or just defined a message is posted to this
  // exchange.
  // This message exchange is mainly useful when tasks are scheduled by a
  // scheduler that uses `defineTask` as this does not make the task
  // `pending`. Thus, no `taskPending` message is published.
  // Please, note that messages are also published on this exchange if defined
  // using `createTask`.
  taskDefined(routingKeyPattern) {
    const entry = {type:'topic-exchange',exchange:'task-defined',name:'taskDefined',title:'Task Defined Messages',description:'When a task is created or just defined a message is posted to this\nexchange.\n\nThis message exchange is mainly useful when tasks are scheduled by a\nscheduler that uses `defineTask` as this does not make the task\n`pending`. Thus, no `taskPending` message is published.\nPlease, note that messages are also published on this exchange if defined\nusing `createTask`.',routingKey:[{name:'routingKeyKind',summary:'Identifier for the routing-key kind. This is always `\'primary\'` for the formalized routing key.',constant:'primary',multipleWords:false,required:true},{name:'taskId',summary:'`taskId` for the task this message concerns',multipleWords:false,required:true},{name:'runId',summary:'`runId` of latest run for the task, `_` if no run is exists for the task.',multipleWords:false,required:false},{name:'workerGroup',summary:'`workerGroup` of latest run for the task, `_` if no run is exists for the task.',multipleWords:false,required:false},{name:'workerId',summary:'`workerId` of latest run for the task, `_` if no run is exists for the task.',multipleWords:false,required:false},{name:'provisionerId',summary:'`provisionerId` this task is targeted at.',multipleWords:false,required:true},{name:'workerType',summary:'`workerType` this task must run on.',multipleWords:false,required:true},{name:'schedulerId',summary:'`schedulerId` this task was created by.',multipleWords:false,required:true},{name:'taskGroupId',summary:'`taskGroupId` this task was created in.',multipleWords:false,required:true},{name:'reserved',summary:'Space reserved for future routing-key entries, you should always match this entry with `#`. As automatically done by our tooling, if not specified.',multipleWords:true,required:false}],schema:'http://schemas.taskcluster.net/queue/v1/task-defined-message.json#'};

    return this.normalizeRoutingKeyPattern(entry, routingKeyPattern);
  }

  // When a task becomes `pending` a message is posted to this exchange.
  // This is useful for workers who doesn't want to constantly poll the queue
  // for new tasks. The queue will also be authority for task states and
  // claims. But using this exchange workers should be able to distribute work
  // efficiently and they would be able to reduce their polling interval
  // significantly without affecting general responsiveness.
  taskPending(routingKeyPattern) {
    const entry = {type:'topic-exchange',exchange:'task-pending',name:'taskPending',title:'Task Pending Messages',description:'When a task becomes `pending` a message is posted to this exchange.\n\nThis is useful for workers who doesn\'t want to constantly poll the queue\nfor new tasks. The queue will also be authority for task states and\nclaims. But using this exchange workers should be able to distribute work\nefficiently and they would be able to reduce their polling interval\nsignificantly without affecting general responsiveness.',routingKey:[{name:'routingKeyKind',summary:'Identifier for the routing-key kind. This is always `\'primary\'` for the formalized routing key.',constant:'primary',multipleWords:false,required:true},{name:'taskId',summary:'`taskId` for the task this message concerns',multipleWords:false,required:true},{name:'runId',summary:'`runId` of latest run for the task, `_` if no run is exists for the task.',multipleWords:false,required:true},{name:'workerGroup',summary:'`workerGroup` of latest run for the task, `_` if no run is exists for the task.',multipleWords:false,required:false},{name:'workerId',summary:'`workerId` of latest run for the task, `_` if no run is exists for the task.',multipleWords:false,required:false},{name:'provisionerId',summary:'`provisionerId` this task is targeted at.',multipleWords:false,required:true},{name:'workerType',summary:'`workerType` this task must run on.',multipleWords:false,required:true},{name:'schedulerId',summary:'`schedulerId` this task was created by.',multipleWords:false,required:true},{name:'taskGroupId',summary:'`taskGroupId` this task was created in.',multipleWords:false,required:true},{name:'reserved',summary:'Space reserved for future routing-key entries, you should always match this entry with `#`. As automatically done by our tooling, if not specified.',multipleWords:true,required:false}],schema:'http://schemas.taskcluster.net/queue/v1/task-pending-message.json#'};

    return this.normalizeRoutingKeyPattern(entry, routingKeyPattern);
  }

  // Whenever a task is claimed by a worker, a run is started on the worker,
  // and a message is posted on this exchange.
  taskRunning(routingKeyPattern) {
    const entry = {type:'topic-exchange',exchange:'task-running',name:'taskRunning',title:'Task Running Messages',description:'Whenever a task is claimed by a worker, a run is started on the worker,\nand a message is posted on this exchange.',routingKey:[{name:'routingKeyKind',summary:'Identifier for the routing-key kind. This is always `\'primary\'` for the formalized routing key.',constant:'primary',multipleWords:false,required:true},{name:'taskId',summary:'`taskId` for the task this message concerns',multipleWords:false,required:true},{name:'runId',summary:'`runId` of latest run for the task, `_` if no run is exists for the task.',multipleWords:false,required:true},{name:'workerGroup',summary:'`workerGroup` of latest run for the task, `_` if no run is exists for the task.',multipleWords:false,required:true},{name:'workerId',summary:'`workerId` of latest run for the task, `_` if no run is exists for the task.',multipleWords:false,required:true},{name:'provisionerId',summary:'`provisionerId` this task is targeted at.',multipleWords:false,required:true},{name:'workerType',summary:'`workerType` this task must run on.',multipleWords:false,required:true},{name:'schedulerId',summary:'`schedulerId` this task was created by.',multipleWords:false,required:true},{name:'taskGroupId',summary:'`taskGroupId` this task was created in.',multipleWords:false,required:true},{name:'reserved',summary:'Space reserved for future routing-key entries, you should always match this entry with `#`. As automatically done by our tooling, if not specified.',multipleWords:true,required:false}],schema:'http://schemas.taskcluster.net/queue/v1/task-running-message.json#'};

    return this.normalizeRoutingKeyPattern(entry, routingKeyPattern);
  }

  // Whenever the `createArtifact` end-point is called, the queue will create
  // a record of the artifact and post a message on this exchange. All of this
  // happens before the queue returns a signed URL for the caller to upload
  // the actual artifact with (pending on `storageType`).
  // This means that the actual artifact is rarely available when this message
  // is posted. But it is not unreasonable to assume that the artifact will
  // will become available at some point later. Most signatures will expire in
  // 30 minutes or so, forcing the uploader to call `createArtifact` with
  // the same payload again in-order to continue uploading the artifact.
  // However, in most cases (especially for small artifacts) it's very
  // reasonable assume the artifact will be available within a few minutes.
  // This property means that this exchange is mostly useful for tools
  // monitoring task evaluation. One could also use it count number of
  // artifacts per task, or _index_ artifacts though in most cases it'll be
  // smarter to index artifacts after the task in question have completed
  // successfully.
  artifactCreated(routingKeyPattern) {
    const entry = {type:'topic-exchange',exchange:'artifact-created',name:'artifactCreated',title:'Artifact Creation Messages',description:'Whenever the `createArtifact` end-point is called, the queue will create\na record of the artifact and post a message on this exchange. All of this\nhappens before the queue returns a signed URL for the caller to upload\nthe actual artifact with (pending on `storageType`).\n\nThis means that the actual artifact is rarely available when this message\nis posted. But it is not unreasonable to assume that the artifact will\nwill become available at some point later. Most signatures will expire in\n30 minutes or so, forcing the uploader to call `createArtifact` with\nthe same payload again in-order to continue uploading the artifact.\n\nHowever, in most cases (especially for small artifacts) it\'s very\nreasonable assume the artifact will be available within a few minutes.\nThis property means that this exchange is mostly useful for tools\nmonitoring task evaluation. One could also use it count number of\nartifacts per task, or _index_ artifacts though in most cases it\'ll be\nsmarter to index artifacts after the task in question have completed\nsuccessfully.',routingKey:[{name:'routingKeyKind',summary:'Identifier for the routing-key kind. This is always `\'primary\'` for the formalized routing key.',constant:'primary',multipleWords:false,required:true},{name:'taskId',summary:'`taskId` for the task this message concerns',multipleWords:false,required:true},{name:'runId',summary:'`runId` of latest run for the task, `_` if no run is exists for the task.',multipleWords:false,required:true},{name:'workerGroup',summary:'`workerGroup` of latest run for the task, `_` if no run is exists for the task.',multipleWords:false,required:true},{name:'workerId',summary:'`workerId` of latest run for the task, `_` if no run is exists for the task.',multipleWords:false,required:true},{name:'provisionerId',summary:'`provisionerId` this task is targeted at.',multipleWords:false,required:true},{name:'workerType',summary:'`workerType` this task must run on.',multipleWords:false,required:true},{name:'schedulerId',summary:'`schedulerId` this task was created by.',multipleWords:false,required:true},{name:'taskGroupId',summary:'`taskGroupId` this task was created in.',multipleWords:false,required:true},{name:'reserved',summary:'Space reserved for future routing-key entries, you should always match this entry with `#`. As automatically done by our tooling, if not specified.',multipleWords:true,required:false}],schema:'http://schemas.taskcluster.net/queue/v1/artifact-created-message.json#'};

    return this.normalizeRoutingKeyPattern(entry, routingKeyPattern);
  }

  // When a task is successfully completed by a worker a message is posted
  // this exchange.
  // This message is routed using the `runId`, `workerGroup` and `workerId`
  // that completed the task. But information about additional runs is also
  // available from the task status structure.
  taskCompleted(routingKeyPattern) {
    const entry = {type:'topic-exchange',exchange:'task-completed',name:'taskCompleted',title:'Task Completed Messages',description:'When a task is successfully completed by a worker a message is posted\nthis exchange.\nThis message is routed using the `runId`, `workerGroup` and `workerId`\nthat completed the task. But information about additional runs is also\navailable from the task status structure.',routingKey:[{name:'routingKeyKind',summary:'Identifier for the routing-key kind. This is always `\'primary\'` for the formalized routing key.',constant:'primary',multipleWords:false,required:true},{name:'taskId',summary:'`taskId` for the task this message concerns',multipleWords:false,required:true},{name:'runId',summary:'`runId` of latest run for the task, `_` if no run is exists for the task.',multipleWords:false,required:true},{name:'workerGroup',summary:'`workerGroup` of latest run for the task, `_` if no run is exists for the task.',multipleWords:false,required:true},{name:'workerId',summary:'`workerId` of latest run for the task, `_` if no run is exists for the task.',multipleWords:false,required:true},{name:'provisionerId',summary:'`provisionerId` this task is targeted at.',multipleWords:false,required:true},{name:'workerType',summary:'`workerType` this task must run on.',multipleWords:false,required:true},{name:'schedulerId',summary:'`schedulerId` this task was created by.',multipleWords:false,required:true},{name:'taskGroupId',summary:'`taskGroupId` this task was created in.',multipleWords:false,required:true},{name:'reserved',summary:'Space reserved for future routing-key entries, you should always match this entry with `#`. As automatically done by our tooling, if not specified.',multipleWords:true,required:false}],schema:'http://schemas.taskcluster.net/queue/v1/task-completed-message.json#'};

    return this.normalizeRoutingKeyPattern(entry, routingKeyPattern);
  }

  // When a task ran, but failed to complete successfully a message is posted
  // to this exchange. This is same as worker ran task-specific code, but the
  // task specific code exited non-zero.
  taskFailed(routingKeyPattern) {
    const entry = {type:'topic-exchange',exchange:'task-failed',name:'taskFailed',title:'Task Failed Messages',description:'When a task ran, but failed to complete successfully a message is posted\nto this exchange. This is same as worker ran task-specific code, but the\ntask specific code exited non-zero.',routingKey:[{name:'routingKeyKind',summary:'Identifier for the routing-key kind. This is always `\'primary\'` for the formalized routing key.',constant:'primary',multipleWords:false,required:true},{name:'taskId',summary:'`taskId` for the task this message concerns',multipleWords:false,required:true},{name:'runId',summary:'`runId` of latest run for the task, `_` if no run is exists for the task.',multipleWords:false,required:false},{name:'workerGroup',summary:'`workerGroup` of latest run for the task, `_` if no run is exists for the task.',multipleWords:false,required:false},{name:'workerId',summary:'`workerId` of latest run for the task, `_` if no run is exists for the task.',multipleWords:false,required:false},{name:'provisionerId',summary:'`provisionerId` this task is targeted at.',multipleWords:false,required:true},{name:'workerType',summary:'`workerType` this task must run on.',multipleWords:false,required:true},{name:'schedulerId',summary:'`schedulerId` this task was created by.',multipleWords:false,required:true},{name:'taskGroupId',summary:'`taskGroupId` this task was created in.',multipleWords:false,required:true},{name:'reserved',summary:'Space reserved for future routing-key entries, you should always match this entry with `#`. As automatically done by our tooling, if not specified.',multipleWords:true,required:false}],schema:'http://schemas.taskcluster.net/queue/v1/task-failed-message.json#'};

    return this.normalizeRoutingKeyPattern(entry, routingKeyPattern);
  }

  // Whenever Taskcluster fails to run a message is posted to this exchange.
  // This happens if the task isn't completed before its `deadlìne`,
  // all retries failed (i.e. workers stopped responding), the task was
  // canceled by another entity, or the task carried a malformed payload.
  // The specific _reason_ is evident from that task status structure, refer
  // to the `reasonResolved` property for the last run.
  taskException(routingKeyPattern) {
    const entry = {type:'topic-exchange',exchange:'task-exception',name:'taskException',title:'Task Exception Messages',description:'Whenever Taskcluster fails to run a message is posted to this exchange.\nThis happens if the task isn\'t completed before its `deadlìne`,\nall retries failed (i.e. workers stopped responding), the task was\ncanceled by another entity, or the task carried a malformed payload.\n\nThe specific _reason_ is evident from that task status structure, refer\nto the `reasonResolved` property for the last run.',routingKey:[{name:'routingKeyKind',summary:'Identifier for the routing-key kind. This is always `\'primary\'` for the formalized routing key.',constant:'primary',multipleWords:false,required:true},{name:'taskId',summary:'`taskId` for the task this message concerns',multipleWords:false,required:true},{name:'runId',summary:'`runId` of latest run for the task, `_` if no run is exists for the task.',multipleWords:false,required:false},{name:'workerGroup',summary:'`workerGroup` of latest run for the task, `_` if no run is exists for the task.',multipleWords:false,required:false},{name:'workerId',summary:'`workerId` of latest run for the task, `_` if no run is exists for the task.',multipleWords:false,required:false},{name:'provisionerId',summary:'`provisionerId` this task is targeted at.',multipleWords:false,required:true},{name:'workerType',summary:'`workerType` this task must run on.',multipleWords:false,required:true},{name:'schedulerId',summary:'`schedulerId` this task was created by.',multipleWords:false,required:true},{name:'taskGroupId',summary:'`taskGroupId` this task was created in.',multipleWords:false,required:true},{name:'reserved',summary:'Space reserved for future routing-key entries, you should always match this entry with `#`. As automatically done by our tooling, if not specified.',multipleWords:true,required:false}],schema:'http://schemas.taskcluster.net/queue/v1/task-exception-message.json#'};

    return this.normalizeRoutingKeyPattern(entry, routingKeyPattern);
  }

  // A message is published on task-group-resolved whenever all submitted
  // tasks (whether scheduled or unscheduled) for a given task group have
  // been resolved, regardless of whether they resolved as successful or
  // not. A task group may be resolved multiple times, since new tasks may
  // be submitted against an already resolved task group.
  taskGroupResolved(routingKeyPattern) {
    const entry = {type:'topic-exchange',exchange:'task-group-resolved',name:'taskGroupResolved',title:'Task Group Resolved Messages',description:'A message is published on task-group-resolved whenever all submitted\ntasks (whether scheduled or unscheduled) for a given task group have\nbeen resolved, regardless of whether they resolved as successful or\nnot. A task group may be resolved multiple times, since new tasks may\nbe submitted against an already resolved task group.',routingKey:[{name:'routingKeyKind',summary:'Identifier for the routing-key kind. This is always `\'primary\'` for the formalized routing key.',constant:'primary',multipleWords:false,required:true},{name:'taskGroupId',summary:'`taskGroupId` for the task-group this message concerns',multipleWords:false,required:true},{name:'schedulerId',summary:'`schedulerId` for the task-group this message concerns',multipleWords:false,required:true},{name:'reserved',summary:'Space reserved for future routing-key entries, you should always match this entry with `#`. As automatically done by our tooling, if not specified.',multipleWords:true,required:false}],schema:'http://schemas.taskcluster.net/queue/v1/task-group-resolved.json#'};

    return this.normalizeRoutingKeyPattern(entry, routingKeyPattern);
  }
}
