class Specification{
    var template=""
    var props:ArrayList<String> = ArrayList()
    var el:String?=null
    var dataFunc:(()->dynamic)?=null
    var methodObj:dynamic=null
    var computedObj:dynamic=null
    var createdHook:dynamic=null
    var mountedHook:dynamic=null
    var updatedHook:dynamic=null
    var destroyedHook:dynamic=null
    var beforeCreateHook:dynamic=null
    var beforeMountHook:dynamic=null
    var beforeUpdateHook:dynamic=null
    var beforeDestroyHook:dynamic=null
    fun data(init:dynamic.()->Unit){
        dataFunc = fun (){
            val dataObj:dynamic = js("{}")
            init(dataObj)
            return dataObj
        }
    }
    fun methods (init:dynamic.()->Unit){
        methodObj = js("{}")
        init(methodObj)
    }
    fun computed (init:dynamic.()->Unit){
        computedObj = js("{}")
        init(computedObj)
    }
    fun created (created:(dynamic)->Unit){
        createdHook = created
    }
    fun mounted (mounted:(dynamic)->Unit){
        mountedHook = mounted
    }
    fun updated (updated:(dynamic)->Unit){
        updatedHook = updated
    }
    fun destroyed (destroyed:(dynamic)->Unit){
        destroyedHook = destroyed
    }
    fun beforeCreate (beforeCreate:(dynamic)->Unit){
        beforeCreateHook = beforeCreate
    }
    fun beforeMount (beforeMount:(dynamic)->Unit){
        beforeMountHook = beforeMount
    }
    fun beforeUpdate (beforeUpdate:(dynamic)->Unit){
        beforeUpdateHook = beforeUpdate
    }
    fun beforeDestroy (beforeDestroy:(dynamic)->Unit){
        beforeDestroyHook = beforeDestroy
    }

}

fun defineComponent(tag:String, init:Specification.()->Unit){
    val vue:dynamic = js("Vue")
    vue.component(tag, component(init))
}

fun defineVue(init:Specification.()->Unit){
    createVue(vue(init))
}

fun component(init:Specification.()->Unit):dynamic{
    val spec = Specification()
    spec.init()
    val obj:dynamic=js("{}")
    obj.data=spec.dataFunc
    initializeAdapt(obj, spec)

    obj.props = spec.props.toTypedArray()

    return obj
}

fun vue(init:Specification.()->Unit):dynamic{
    val spec = Specification()
    spec.init()
    val obj:dynamic=js("{}")
    if (spec.dataFunc!=null){
        obj.data=spec.dataFunc!!()
    }
    if (spec.el!=null){
        obj.el=spec.el
    }

    initializeAdapt(obj, spec)

    return obj
}

fun initializeAdapt(obj:dynamic, spec:dynamic):Unit{
    obj.methods=adaptMethods(spec.methodObj)
    obj.computed=adaptMethods(spec.computedObj)
    obj.created=adaptHooks(spec.createdHook)
    obj.mounted=adaptHooks(spec.mountedHook)
    obj.updated=adaptHooks(spec.updatedHook)
    obj.destroyed=adaptHooks(spec.destroyedHook)
    obj.beforeCreate=adaptHooks(spec.beforeCreateHook)
    obj.beforeMount=adaptHooks(spec.beforeMountHook)
    obj.beforeUpdate=adaptHooks(spec.beforeUpdateHook)
    obj.beforeDestroy=adaptHooks(spec.beforeDestroyHook)
    obj.template=spec.template
}

external fun createVue(obj: dynamic)

external fun adaptMethods(obj:dynamic):dynamic
external fun adaptHooks(obj:dynamic):dynamic
