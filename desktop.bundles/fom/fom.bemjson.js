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
                                    mix    : [
                                        {
                                            block: 'header',
                                            elem : 'form'
                                        }
                                    ],
                                    mods   : {
                                        type: 'envelope'
                                    },
                                    content: [
                                        {
                                            block: 'icon',
                                            mix  : [
                                                {
                                                    block: 'form_type_envelope',
                                                    elem : 'icon'
                                                }
                                            ],
                                            mods : {
                                                type : 'envelope',
                                                color: 'white'
                                            }
                                        },
                                        {
                                            block  : 'input-group',
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
                                                        form: 'control'
                                                    },
                                                    attrs: {
                                                        placeholder: 'Enter your email Address'
                                                    }
                                                },
                                                {
                                                    block  : 'input-group-btn',
                                                    mix    : [
                                                        {
                                                            block: 'header',
                                                            elem : 'input-group-btn'
                                                        }
                                                    ],
                                                    content: {
                                                        block  : 'btn',
                                                        mix    : [
                                                            {
                                                                block: 'input-group-btn',
                                                                elem : 'btn',
                                                                mods : {
                                                                    color: 'white'
                                                                }
                                                            },
                                                            {
                                                                block: 'header',
                                                                elem : 'btn'
                                                            }
                                                        ],
                                                        tag    : 'a',
                                                        mods   : {
                                                            color: 'white'
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
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block  : 'navbar',
            mix    : [
                {
                    block: 'header',
                    elem : 'navbar'
                }
            ],
            mods   : {
                type: 'fix'
            },
            content: [
                {
                    elem   : 'container',
                    mix    : [
                        {
                            block: 'header',
                            elem : 'container'
                        }
                    ],
                    content: [
                        {
                            elem   : 'navbar-toggle',
                            attrs  : {
                                'data-toggle': 'collapse',
                                'data-target': '.navbar-collapse'
                            },
                            content: [
                                {
                                    elem: 'icon-menu'
                                }
                            ]
                        },
                        {
                            elem   : 'logo',
                            attrs  : {
                                title: 'Frame of Mind'
                            },
                            content: [
                                {
                                    elem : 'logo-deck',
                                    tag  : 'img',
                                    attrs: {
                                        src: 'http://www.frameofmindcoaching.com/wp-content/themes/fom/assets/built/img/logo.png',
                                        alt: 'Frame of Mind'
                                    }
                                },
                                {
                                    elem : 'logo-mob',
                                    tag  : 'img',
                                    attrs: {
                                        src: 'http://www.frameofmindcoaching.com/wp-content/themes/fom/assets/built/img/logo_mob.png',
                                        alt: 'Frame of Mind'
                                    }
                                }
                            ]
                        },
                        {
                            block  : 'btn',
                            mods   : {
                                color: 'gray'
                            },
                            mix    : [
                                {
                                    block: 'header',
                                    elem : 'btn_gray'
                                }
                            ],
                            attrs  : {
                                'data-toggle': 'modal',
                                'data-target': '#modalThanks'
                            },
                            content: 'Get Started'
                        },
                        {
                            elem   : 'navbar-collapse',
                            mods   : {
                                state: 'collapse'
                            },
                            content: [
                                {
                                    block  : 'menu',
                                    mix    : [
                                        {
                                            block: 'header',
                                            elem : 'menu'
                                        }
                                    ],
                                    content: [
                                        {
                                            elem   : 'item',
                                            content: {
                                                elem   : 'link',
                                                content: {
                                                    elem   : 'title',
                                                    content: 'Coaching'
                                                }
                                            }
                                        },
                                        {
                                            elem   : 'item',
                                            content: {
                                                elem   : 'link',
                                                content: {
                                                    elem   : 'title',
                                                    content: 'Our Team'
                                                }
                                            }
                                        },
                                        {
                                            elem   : 'item',
                                            content: {
                                                elem   : 'link',
                                                content: {
                                                    elem   : 'title',
                                                    content: 'Testimonials'
                                                }
                                            }
                                        },
                                        {
                                            elem   : 'item',
                                            content: {
                                                elem   : 'link',
                                                content: {
                                                    elem   : 'title',
                                                    content: 'News &#038; View'
                                                }
                                            }
                                        },
                                        {
                                            elem   : 'item',
                                            content: {
                                                elem   : 'link',
                                                content: {
                                                    elem   : 'title',
                                                    content: 'Certification'
                                                }
                                            }
                                        },
                                        {
                                            elem   : 'item',
                                            content: {
                                                elem   : 'link',
                                                content: {
                                                    elem   : 'title',
                                                    content: 'Contact'
                                                }
                                            }
                                        },
                                        {
                                            elem   : 'item',
                                            content: {
                                                elem   : 'link',
                                                content: {
                                                    elem   : 'title',
                                                    content: 'Sign In'
                                                }
                                            }
                                        },
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
})
