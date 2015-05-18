/**
 * Created by Elmar <a.k.a. Ramires> Abdurayimov on 5/18/15 4:07 PM
 * @copyright (C)Copyright 2015 e.abdurayimov@gmail.com
 */

({
    block  : 'page',
    title  : 'Frame of Mind',
    head   : [
        {
            elem: 'css',
            url : '_fom.css'
        }
    ],
    scripts: [
        {
            elem: 'js',
            url : '_fom.js'
        }
    ],
    mods   : {
        mode: 'pc',
        type: 'page',
        name: 'home'
    },
    content: [
        {
            block  : 'header',
            content: [
                {
                    elem   : 'container',
                    mods   : {
                        text: 'center'
                    },
                    content: [
                        {
                            elem   : 'box',
                            content: [
                                {
                                    elem   : 'title',
                                    content: 'Get your free "What You Focus on GROWS" e-book by Kim Ades'
                                },
                                {
                                    block  : 'form',
                                    attrs  : {
                                        autocomplete: 'off',
                                        action      : '#'
                                    },
                                    mods   : {
                                        type    : 'envelope',
                                        location: 'header'
                                    },
                                    content: [
                                        {
                                            block: 'icon',
                                            mods : {
                                                white: 'envelope'
                                            }
                                        },
                                        {
                                            block  : 'input_group',
                                            attrs  : {
                                                'data-toggle' : 'popover',
                                                'data-trigger': 'focus',
                                                'data-content': 'And here\'s some amazing content. It\'s very engaging. Right?'
                                            },
                                            content: [
                                                {
                                                    elem : 'input',
                                                    tag  : 'input',
                                                    mods : {
                                                        form : 'control',
                                                        input: 'txt'
                                                    },
                                                    attrs: {
                                                        autocomplete: 'off',
                                                        placeholder : 'Enter your email Address'
                                                    }
                                                },
                                                {
                                                    elem   : 'btn_group',
                                                    content: {
                                                        elem   : 'btn',
                                                        mods   : {
                                                            btn: 'white'
                                                        },
                                                        attrs  : {
                                                            type: 'button'
                                                        },
                                                        content: 'Sign Up'
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                },
                            ]
                        }
                    ]
                },
            ]
        }
    ]
})
