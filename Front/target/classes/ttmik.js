if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'ttmik'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ttmik'.");
}
var ttmik = function (_, Kotlin) {
  'use strict';
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Unit = Kotlin.kotlin.Unit;
  function Specification() {
    this.template = '';
    this.props = ArrayList_init();
    this.el = null;
    this.dataFunc = null;
    this.methodObj = null;
    this.computedObj = null;
    this.createdHook = null;
    this.mountedHook = null;
    this.updatedHook = null;
    this.destroyedHook = null;
    this.beforeCreateHook = null;
    this.beforeMountHook = null;
    this.beforeUpdateHook = null;
    this.beforeDestroyHook = null;
  }
  function Specification$data$lambda(closure$init) {
    return function () {
      var dataObj = {};
      closure$init(dataObj);
      return dataObj;
    };
  }
  Specification.prototype.data_5ij4lk$ = function (init) {
    this.dataFunc = Specification$data$lambda(init);
  };
  Specification.prototype.methods_5ij4lk$ = function (init) {
    this.methodObj = {};
    init(this.methodObj);
  };
  Specification.prototype.computed_5ij4lk$ = function (init) {
    this.computedObj = {};
    init(this.computedObj);
  };
  Specification.prototype.created_5ij4lk$ = function (created) {
    this.createdHook = created;
  };
  Specification.prototype.mounted_5ij4lk$ = function (mounted) {
    this.mountedHook = mounted;
  };
  Specification.prototype.updated_5ij4lk$ = function (updated) {
    this.updatedHook = updated;
  };
  Specification.prototype.destroyed_5ij4lk$ = function (destroyed) {
    this.destroyedHook = destroyed;
  };
  Specification.prototype.beforeCreate_5ij4lk$ = function (beforeCreate) {
    this.beforeCreateHook = beforeCreate;
  };
  Specification.prototype.beforeMount_5ij4lk$ = function (beforeMount) {
    this.beforeMountHook = beforeMount;
  };
  Specification.prototype.beforeUpdate_5ij4lk$ = function (beforeUpdate) {
    this.beforeUpdateHook = beforeUpdate;
  };
  Specification.prototype.beforeDestroy_5ij4lk$ = function (beforeDestroy) {
    this.beforeDestroyHook = beforeDestroy;
  };
  Specification.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Specification',
    interfaces: []
  };
  function defineComponent(tag, init) {
    var vue = Vue;
    vue.component(tag, component(init));
  }
  function defineVue(init) {
    createVue(vue(init));
  }
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  function component(init) {
    var spec = new Specification();
    init(spec);
    var obj = {};
    obj.data = spec.dataFunc;
    initializeAdapt(obj, spec);
    obj.props = copyToArray(spec.props);
    return obj;
  }
  function vue(init) {
    var spec = new Specification();
    init(spec);
    var obj = {};
    if (spec.dataFunc != null) {
      obj.data = ensureNotNull(spec.dataFunc)();
    }
    if (spec.el != null) {
      obj.el = spec.el;
    }
    initializeAdapt(obj, spec);
    return obj;
  }
  function initializeAdapt(obj, spec) {
    obj.methods = adaptMethods(spec.methodObj);
    obj.computed = adaptMethods(spec.computedObj);
    obj.created = adaptHooks(spec.createdHook);
    obj.mounted = adaptHooks(spec.mountedHook);
    obj.updated = adaptHooks(spec.updatedHook);
    obj.destroyed = adaptHooks(spec.destroyedHook);
    obj.beforeCreate = adaptHooks(spec.beforeCreateHook);
    obj.beforeMount = adaptHooks(spec.beforeMountHook);
    obj.beforeUpdate = adaptHooks(spec.beforeUpdateHook);
    obj.beforeDestroy = adaptHooks(spec.beforeDestroyHook);
    obj.template = spec.template;
  }
  function declareInscription$lambda$lambda($receiver) {
    $receiver.form = new FormInscription();
    return Unit;
  }
  function declareInscription$lambda$lambda$lambda() {
    console.log('ok');
    return Unit;
  }
  function declareInscription$lambda$lambda_0($receiver) {
    $receiver.print = declareInscription$lambda$lambda$lambda;
    return Unit;
  }
  function declareInscription$lambda($receiver) {
    $receiver.el = '#app';
    $receiver.data_5ij4lk$(declareInscription$lambda$lambda);
    $receiver.methods_5ij4lk$(declareInscription$lambda$lambda_0);
    return Unit;
  }
  function declareInscription() {
    defineVue(declareInscription$lambda);
  }
  function FormInscription() {
    this.login = '';
    this.email = '';
    this.password = '';
    this.password2 = '';
  }
  FormInscription.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FormInscription',
    interfaces: []
  };
  _.Specification = Specification;
  _.defineComponent_4t15ac$ = defineComponent;
  _.defineVue_1jphte$ = defineVue;
  _.component_1jphte$ = component;
  _.vue_1jphte$ = vue;
  _.initializeAdapt_wn2jw4$ = initializeAdapt;
  _.declareInscription = declareInscription;
  _.FormInscription = FormInscription;
  Kotlin.defineModule('ttmik', _);
  return _;
}(typeof ttmik === 'undefined' ? {} : ttmik, kotlin);

//# sourceMappingURL=ttmik.js.map
