const KIND_USER = 'user'; const KIND_CATALOG = 'catalog';
const KIND_SYSTEM = 'system';
const KIND_SYSTEM_CATALOG = 'system-catalog';
const KIND_LEGACY_KUBERNETES = 'kubernetes';
const KIND_KUBERNETES = 'k8s';
const KIND_INFRA = 'infra';
const KIND_NOT_ORCHESTRATION = 'cattle';

var C = {
  AUTH_TYPES: {
    AdminAuth: 'None',
    BasicAuth: 'API Key',
    HeaderAuth: 'HeaderAuth',
    RegistrationToken: 'Host Registration',
    TokenAccount: 'TokenAccount',
    TokenAuth: 'UI Session'
  },

  CAPABILITY: {
    NETWORK_POLICIES: 'network-policy-manager',
    SECRETS: 'secrets',
  },

  CATALOG: {
    LIBRARY_KEY: 'library',
    LIBRARY_VALUE: 'https://git.rancher.io/rancher-catalog.git',
    COMMUNITY_KEY: 'community',
    COMMUNITY_VALUE: 'https://git.rancher.io/community-catalog.git',
    DEFAULT_BRANCH: 'master',
    LIBRARY_BRANCH: 'v2.0-development', // @TODO-2.0 '${RELEASE}',
    COMMUNITY_BRANCH: 'v2.0-development', // @TODO-2.0 '${RELEASE}',
  },

  COOKIE: {
    TOKEN: 'token',
    PL: 'PL',
    PL_RANCHER_VALUE: 'rancher',
    CSRF: 'CSRF',
    LANG: 'LANG',
    USERNAME: 'R_USERNAME',
  },

  EXTERNAL_ID: {
    KIND_SEPARATOR: '://',
    GROUP_SEPARATOR: ':',
    BASE_SEPARATOR: '*',
    ID_SEPARATOR: ':',
    KIND_ALL: 'containers', KIND_USER: KIND_USER,
    KIND_CATALOG: KIND_CATALOG,
    KIND_SYSTEM: KIND_SYSTEM,
    KIND_SYSTEM_CATALOG: KIND_SYSTEM_CATALOG,
    KIND_LEGACY_KUBERNETES: KIND_LEGACY_KUBERNETES,
    KIND_KUBERNETES: KIND_KUBERNETES,
    KIND_INFRA: KIND_INFRA,
    KIND_NOT_ORCHESTRATION: KIND_NOT_ORCHESTRATION,
    KIND_ORCHESTRATION: [
      KIND_KUBERNETES,
    ],
    UPGRADEABLE: [
      KIND_CATALOG,
      KIND_SYSTEM_CATALOG
    ],
    SYSTEM_KINDS: [
      KIND_SYSTEM,
      KIND_SYSTEM_CATALOG,
    ],
    SHOW_AS_SYSTEM: [
      KIND_SYSTEM,
      KIND_INFRA,
      KIND_NOT_ORCHESTRATION,
    ],
    SYSTEM_CATEGORIES: [
      'Rancher services'
    ],
    CATALOG_DEFAULT_GROUP: 'library',
  },

  EXT_REFERENCES: {
    FORUM: 'https://forums.rancher.com',
    COMPANY: 'http://rancher.com',
    GITHUB: 'https://github.com/rancher/rancher',
    DOCS: 'http://docs.rancher.com/rancher',
    SLACK: 'https://slack.rancher.io',
  },

  GITHUB: {
    DEFAULT_HOSTNAME: 'github.com',
    AUTH_PATH: '/login/oauth/authorize',
    PROXY_URL: '/github/',
    SCOPE: 'read:org',
  },

  HEADER: {
    ACCOUNT_ID: 'X-Api-Account-Id',
    ACTIONS: 'X-Api-Action-Links',
    ACTIONS_VALUE: 'actionLinks',
    CSRF: 'X-Api-Csrf',
    NO_CHALLENGE: 'X-Api-No-Challenge',
    NO_CHALLENGE_VALUE: 'true',
    PROJECT_ID: 'X-Api-Project-Id',
    RANCHER_VERSION: 'X-Rancher-Version',
  },

  K8S: {
    BASE: 'api',
    BASE_VERSION: 'api/v1',
  },

  KEY: {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    ESCAPE: 27,
    CR: 13,
    LF: 10,
    TAB: 9,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    HOME: 35,
    END: 36,
  },

  LABEL: {
    SYSTEM_PREFIX: 'io.rancher.',

    // Container
    DNS: 'io.rancher.container.dns',
    HOSTNAME_OVERRIDE: 'io.rancher.container.hostname_override',
    HOSTNAME_OVERRIDE_VALUE: 'container_name',
    PULL_IMAGE: 'io.rancher.container.pull_image',
    PULL_IMAGE_VALUE: 'always',
    REQUESTED_IP: 'io.rancher.container.requested_ip',
    SERVICE_NAME: 'io.rancher.stack_service.name',
    START_ONCE: 'io.rancher.container.start_once',
    STACK_NAME: 'io.rancher.stack.name',
    STACK_UUID: 'io.rancher.stack.uuid',
    SYSTEM_TYPE: 'io.rancher.container.system',
    PER_HOST_SUBNET: 'io.rancher.network.per_host_subnet.subnet',

    // Catalog
    CERTIFIED: 'io.rancher.certified',
    CERTIFIED_PARTNER: 'partner',
    CERTIFIED_RANCHER: 'rancher',
    ORCHESTRATION_SUPPORTED: 'io.rancher.orchestration.supported',

    // Host
    AGENT_IMAGE: 'io.rancher.host.agent_image',
    DOCKER_VERSION: 'io.rancher.host.docker_version',
    KERNEL_VERSION: 'io.rancher.host.linux_kernel_version',
    KVM: 'io.rancher.host.kvm',
    SCHED_IPS: 'io.rancher.scheduler.ips',
    REQUIRE_ANY: 'io.rancher.scheduler.require_any',

    // Kubernetes
    K8S_DASHBOARD: 'io.rancher.k8s.kubernetes-dashboard',
    K8S_KUBECTL: 'io.rancher.k8s.kubectld',
    K8S_TOKEN: 'io.rancher.k8s.token',
    K8S_POD_NAME: 'io.kubernetes.pod.name',
    K8S_POD_NAMESPACE: 'io.kubernetes.pod.namespace',

    // Scheduling
    AFFINITY_PREFIX: 'io.rancher.scheduler.affinity:',
    SCHED_CONTAINER: 'io.rancher.scheduler.affinity:container',
    SCHED_CONTAINER_LABEL: 'io.rancher.scheduler.affinity:container_label',
    SCHED_GLOBAL: 'io.rancher.scheduler.global',
    SCHED_HOST_LABEL: 'io.rancher.scheduler.affinity:host_label',

    // Service
    DEPLOYMENT_UNIT: 'io.rancher.service.deployment.unit',
    HASH: 'io.rancher.service.hash',
    LAUNCH_CONFIG: 'io.rancher.service.launch.config',
    LAUNCH_CONFIG_PRIMARY: 'io.rancher.service.primary.launch.config',
    SIDEKICK: 'io.rancher.sidekicks',
    BALANCER_TARGET: 'io.rancher.lb_service.target'
  },

  LANGUAGE: {
    DEFAULT: 'en-us',
    FORMAT_RELATIVE_TIMEOUT: 1000,
    DOCS: ['en'],
  },

  WEBSOCKET: {
    SUBSCRIBE_DISCONNECTED_TIMEOUT: 30000
  },

  MODE: {
    OSS: 'oss', // Regular community UI
    CAAS: 'caas', // Container cloud UI
  },

  PREFS: {
    ACCESS_WARNING  : 'access-warning',
    BODY_BACKGROUND : 'body-background',
    EXPANDED_STACKS : 'expanded-stacks',
    FEEDBACK        : 'feedback',
    HOST_VIEW       : 'host-view',
    CONTAINER_VIEW  : 'container-view',
    I_HATE_SPINNERS : 'ihatespinners',
    LANGUAGE        : 'language',
    PROJECT_DEFAULT : 'default-project-id',
    CLUSTER_DEFAULT : 'default-cluster-id',
    LAST_SCALE_MODE : 'last-scale-mode',
    LAST_NAMESPACE  : 'last-namespace',
    SORT_STACKS_BY  : 'sort-stacks-by',
    TABLE_COUNT     : 'table-count',
    THEME           : 'theme',
  },

  PROJECT: {
    TYPE_RANCHER:         'rancher_id',
    TYPE_AZURE_USER:      'azuread_user',
    TYPE_AZURE_GROUP:     'azuread_group',
    TYPE_GITHUB_USER:     'github_user',
    TYPE_GITHUB_TEAM:     'github_team',
    TYPE_GITHUB_ORG:      'github_org',
    TYPE_LDAP_USER:       'ldap_user',
    TYPE_LDAP_GROUP:      'ldap_group',
    TYPE_OPENLDAP_USER:   'openldap_user',
    TYPE_OPENLDAP_GROUP:  'openldap_group',
    TYPE_SHIBBOLETH_USER:       'shibboleth_user',
    TYPE_SHIBBOLETH_GROUP:      'shibboleth_group',

    PERSON: 'person',
    TEAM: 'team',
    ORG:  'org',

    ROLE_MEMBER:  'member',
    ROLE_OWNER:   'owner',

    SUPPORTS_NETWORK_POLICY: [
      'ipsec',
      'vxlan',
    ]
  },

  SCHED_TOLERATION_OPERATOR: [
    {
      value: 'Equals',
      label: 'Equals'
    },
    {
      value: 'Exists',
      label: 'Exists'
    }
  ],

  SCHED_TOLERATION_EFFECT: [
    {
      value: 'NoSchedule',
      label: 'NoSchedule'
    },
    {
      value: 'NoExecute',
      label: 'NoExecute'
    }
  ],

  SCHED_NODE_SELECTOR_OPERATOR: [
    {
      value: '=',
      label: 'formScheduling.nodeSelector.operator.eq',
    },
    {
      value: '!=',
      label: 'formScheduling.nodeSelector.operator.ne',
    },
    {
      value: 'Exists',
      label: 'formScheduling.nodeSelector.operator.exists',
    },
    {
      value: 'DoesNotExist',
      label: 'formScheduling.nodeSelector.operator.notExists',
    },
    {
      value: 'In',
      label: 'formScheduling.nodeSelector.operator.in',
    },
    {
      value: 'NotIn',
      label: 'formScheduling.nodeSelector.operator.notIn',
    },
    {
      value: '<=',
      label: 'formScheduling.nodeSelector.operator.le',
    },
    {
      value: '<',
      label: 'formScheduling.nodeSelector.operator.lt',
    },
    {
      value: '>',
      label: 'formScheduling.nodeSelector.operator.gt',
    },
    {
      value: '>=',
      label: 'formScheduling.nodeSelector.operator.ge',
    },
  ],

  PROJECT_TEMPLATE: {
    DEFAULT: 'cattle',
  },

  RULE_VERBS: [
    'create',
    'read',
    'update',
    'delete',
    'watch',
  ],

  BASIC_POD_SECURITY_POLICIES: [
    'allowPrivilegeEscalation',
    'defaultAllowPrivilegeEscalation',
    'hostIPC',
    'hostNetwork',
    'hostPID',
    'privileged',
    'readOnlyRootFilesystem'
  ],

  VOLUME_POLICIES: [
    'azureFile',
    'azureDisk',
    'flocker',
    'flexVolume',
    'hostPath',
    'emptyDir',
    'gcePersistentDisk',
    'awsElasticBlockStore',
    'gitRepo',
    'secret',
    'nfs',
    'iscsi',
    'glusterfs',
    'persistentVolumeClaim',
    'rbd',
    'cinder',
    'cephFS',
    'downwardAPI',
    'fc',
    'configMap',
    'vsphereVolume',
    'quobyte',
    'photonPersistentDisk',
    'projected',
    'portworxVolume',
    'scaleIO',
    'storageos',
    '*',
  ],

  BASIC_ROLE_TEMPLATE_ROLES: [
    'cluster-owner',
    'cluster-member',
    'project-owner',
    'project-member'
  ],

  ROLE_RULES: [
    'CertificateSigningRequests',
    'ClusterRoleBindings',
    'ClusterRoles',
    'Clusters',
    'ComponentStatuses',
    'ConfigMaps',
    'ControllerRevisions',
    'CronJobs',
    'DaemonSets',
    'Deployments',
    'Endpoints',
    'Events',
    'HorizontalPodAutoscalers',
    'Ingresses',
    'Jobs',
    'LimitRanges',
    'Namespaces',
    'NetworkPolicies',
    'Nodes',
    'PersistentVolumeClaims',
    'PersistentVolumes',
    'PodDisruptionBudgets',
    'PodPreset',
    'PodSecurityPolicies',
    'PodTemplates',
    'Pods',
    'ReplicaSets',
    'ReplicationControllers',
    'ResourceQuotas',
    'RoleBindings',
    'Roles',
    'Secrets',
    'ServiceAccounts',
    'Services',
    'StatefulSets',
    'StorageClasses',
  ],

  // Ephemeral but same but across all browser tabs
  SESSION: {
    ACCOUNT_ID     : 'accountId',
    BACK_TO        : 'backTo',
    CONTAINER_ROUTE: 'containerSubRoute',
    GITHUB_CACHE   : 'githubCache',
    GITHUB_ORGS    : 'orgs',
    GITHUB_TEAMS   : 'teams',
    IDENTITY       : 'userIdentity',
    IDENTITY_TYPE  : 'userType',
    LANGUAGE       : 'language',
    LOGIN_LANGUAGE : 'loginLanguage',
    USER_ID        : 'user',
    USER_TYPE      : 'userType',
  },

  SETTING: {
    IMAGE_RANCHER:             'server-image',
    VERSION_RANCHER:           'server-version',
    VERSION_COMPOSE:           'compose-version',
    VERSION_CLI:               'cli-version',
    VERSION_MACHINE:           'machine-version',
    VERSION_HELM:              'helm-version',
    CLI_URL:                   {
      DARWIN:                  'cli-url-darwin',
      WINDOWS:                 'cli-url-windows',
      LINUX:                   'cli-url-linux',
    },

    AGENT_IMAGE:               'agent-image',
    API_HOST:                  'api-host',
    CA_CERTS:                  'cacerts',
    ENGINE_URL:                'engine-install-url',
    SUPPORTED_DOCKER:          'engine-supported-range',
    NEWEST_DOCKER:             'engine-newest-version',
    TELEMETRY:                 'telemetry-opt',

    AUTH_LOCAL_VALIDATE_DESC:  'auth-password-requirements-description',
    BALANCER_IMAGE:            'balancer-instance-image',
    FEEDBACK_FORM:             'ui-feedback-form',
    SHOW_CUSTOM_HOST:          'ui-show-custom-host'
  },

  TABLES: {
    DEFAULT_COUNT: 50
  },

  THEME: {
    AUTO_UPDATE_TIMER : 30*60*1000,
    START_HOUR        : 7,
    END_HOUR          : 18,
    DEFAULT           : 'ui-light',
  },

  USER: {
    TYPE_NORMAL: 'user',
    TYPE_ADMIN: 'admin',
    BASIC_BEARER: 'x-api-bearer',
  },
};

C.TOKEN_TO_SESSION_KEYS = [
  C.SESSION.ACCOUNT_ID,
  C.SESSION.USER_ID,
  C.SESSION.USER_TYPE,
  C.SESSION.GITHUB_TEAMS,
  C.SESSION.GITHUB_ORGS,
  C.SESSION.IDENTITY,
  C.SESSION.IDENTITY_TYPE
];

C.LABELS_TO_IGNORE = [
  C.LABEL.HASH,
];

C.LABEL_PREFIX_TO_IGNORE = [
  'io.cattle.lifecycle.',
  'beta.kubernetes.io/',
  'node-role.kubernetes.io/',
  'kubernetes.io/'
];

C.SYSTEM_LABELS_WITH_CONTROL = [
  C.LABEL.SCHED_GLOBAL,
  C.LABEL.HOSTNAME_OVERRIDE,
  C.LABEL.DNS,
  C.LABEL.START_ONCE,
  C.LABEL.REQUESTED_IP,
  C.LABEL.PULL_IMAGE,
  C.LABEL.REQUIRE_ANY,
  C.LABEL.SCHED_IPS,
  C.LABEL.AGENT_IMAGE,
  C.LABEL.DOCKER_VERSION,
  C.LABEL.KERNEL_VERSION,
  C.LABEL.KVM,
];

C.ACTIVEISH_STATES = [
  'running',
  'active',
  'healthy',
  'initializing',
  'reinitializing',
  'degraded',
  'unhealthy',
  'upgrading',
  'upgraded',
];

C.READY_STATES = [
  'healthy',
];

C.REMOVEDISH_STATES = [
  'removed',
  // 'removing',
  'purging',
  'purged'
];

C.DISCONNECTED_STATES = [
  'disconnected',
  'reconnecting',
];

C.INITIALIZING_STATES = [
  'initializing',
  'reinitializing'
];

// This is populated by each app/components/schema/*
C.SUPPORTED_SCHEMA_INPUTS= [
  'boolean',
  'certificate',
  'date',
  'enum',
  'float',
  'host',
  'int',
  'multiline',
  'password',
  'service',
  'string',
  'masked',
  'secret',
  'base64',
];

export default C;