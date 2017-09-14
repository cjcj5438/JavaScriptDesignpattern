/**
 * Created by chenjing on 2017-09-14.
 */
F.module('lib/event',['lib/dom'],function (dom) {
    var events={
        on:function (id,type,fn) {
            dom.g(id)['on'+type]=fn;
        }
    }
    return events;
})