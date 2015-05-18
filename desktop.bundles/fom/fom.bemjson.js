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
            url : 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css'
        },
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
                    mix    : [
                        {
                            block: 'text-center'
                        },
                    ],
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
                                                tag    : 'a',
                                                content: {
                                                    elem   : 'title',
                                                    tag    : 'span',
                                                    content: 'Coaching'
                                                }
                                            }
                                        },
                                        {
                                            elem   : 'item',
                                            content: {
                                                elem   : 'link',
                                                tag    : 'a',
                                                content: {
                                                    elem   : 'title',
                                                    tag    : 'span',
                                                    content: 'Our Team'
                                                }
                                            }
                                        },
                                        {
                                            elem   : 'item',
                                            content: {
                                                elem   : 'link',
                                                tag    : 'a',
                                                content: {
                                                    elem   : 'title',
                                                    tag    : 'span',
                                                    content: 'Testimonials'
                                                }
                                            }
                                        },
                                        {
                                            elem   : 'item',
                                            content: {
                                                elem   : 'link',
                                                tag    : 'a',
                                                content: {
                                                    elem   : 'title',
                                                    tag    : 'span',
                                                    content: 'News &#038; View'
                                                }
                                            }
                                        },
                                        {
                                            elem   : 'item',
                                            content: {
                                                elem   : 'link',
                                                tag    : 'a',
                                                content: {
                                                    elem   : 'title',
                                                    tag    : 'span',
                                                    content: 'Certification'
                                                }
                                            }
                                        },
                                        {
                                            elem   : 'item',
                                            content: {
                                                elem   : 'link',
                                                tag    : 'a',
                                                content: {
                                                    elem   : 'title',
                                                    tag    : 'span',
                                                    content: 'Contact'
                                                }
                                            }
                                        },
                                        {
                                            elem   : 'item',
                                            content: {
                                                elem   : 'link',
                                                tag    : 'a',
                                                content: {
                                                    elem   : 'title',
                                                    tag    : 'span',
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
        },
        {
            block  : 'banner',
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
                            elem   : 'row',
                            mix    : [
                                {
                                    block: 'row'
                                }
                            ],
                            content: [
                                {
                                    elem   : 'inner',
                                    mix    : [
                                        {
                                            block: 'col-lg-7'
                                        },
                                        {
                                            block: 'col-sm-12'
                                        },
                                        {
                                            block: 'col-xs-12'
                                        }
                                    ],
                                    content: [
                                        {
                                            elem   : 'slogan',
                                            content: 'Your Thinking Will Determine What You Can Achieve...'
                                        },
                                        {
                                            elem   : 'slogan-sub',
                                            content: 'Frame of Mind Coaching will transform your thinking and lead you to extraordinary results.'
                                        },
                                        {
                                            elem   : 'row',
                                            mix    : [
                                                {
                                                    block: 'row'
                                                }
                                            ],
                                            content: [
                                                {
                                                    elem   : 'inner',
                                                    mix    : [
                                                        {
                                                            block: 'text-center'
                                                        },
                                                        {
                                                            block: 'col-lg-5'
                                                        },
                                                        {
                                                            block: 'col-md-6'
                                                        },
                                                        {
                                                            block: 'col-xs-6'
                                                        }
                                                    ],
                                                    content: [
                                                        {
                                                            block  : 'btn',
                                                            mix    : [
                                                                {
                                                                    block: 'pull-right'
                                                                },
                                                                {
                                                                    block: 'banner',
                                                                    elem : 'btn'
                                                                }
                                                            ],
                                                            mods   : {
                                                                color: 'red'
                                                            },
                                                            content: 'Start your Assessment'
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem   : 'inner',
                                                    mix    : [
                                                        {
                                                            block: 'text-center'
                                                        },
                                                        {
                                                            block: 'col-lg-5'
                                                        },
                                                        {
                                                            block: 'col-md-6'
                                                        },
                                                        {
                                                            block: 'col-xs-6'
                                                        }
                                                    ],
                                                    content: [
                                                        {
                                                            block  : 'btn',
                                                            mods   : {
                                                                color: 'transparent'
                                                            },
                                                            mix    : [
                                                                {
                                                                    block: 'banner',
                                                                    elem : 'btn'
                                                                }
                                                            ],
                                                            content: [
                                                                {
                                                                    elem   : 'text',
                                                                    content: 'Start your Assessment'
                                                                },
                                                                {
                                                                    block: 'icon',
                                                                    mix  : [
                                                                        {
                                                                            block: 'banner',
                                                                            elem : 'btn-icon'
                                                                        }
                                                                    ],
                                                                    mods : {
                                                                        type: 'play'
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
                            elem   : 'width_100',
                            content: [
                                {
                                    elem   : 'more',
                                    content: [
                                        {
                                            elem   : 'p',
                                            tag    : 'p',
                                            content: 'Learn More'
                                        },
                                        {
                                            block: 'icon',
                                            mix  : [
                                                {
                                                    block: 'banner',
                                                    elem : 'icon-more'
                                                }
                                            ],
                                            mods : {
                                                type: 'arrow-down-thin'
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
})
