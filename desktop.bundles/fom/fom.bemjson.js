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
        /* HEADER start */
        {
            block  : 'header',
            content: [
                /* SUBSCRIBE FORM start */
                {
                    elem   : 'subscribe',
                    mods   : {
                        bg: 'red'
                    },
                    mix    : [
                        {
                            block: 'text',
                            elem : 'center'
                        }
                    ],
                    content: [
                        {
                            block  : 'container',
                            mix    : [
                                {
                                    block: 'header',
                                    elem : 'container'
                                }
                            ],
                            content: [
                                {
                                    elem   : 'content',
                                    block  : 'header',
                                    mods   : {
                                        color: 'white'
                                    },
                                    content: 'Get your free "What You Focus on GROWS" e-book by Kim Ades '
                                },
                                {
                                    block  : 'form',
                                    mix    : [
                                        {
                                            block: 'header',
                                            elem : 'form'
                                        }
                                    ],
                                    content: [
                                        {
                                            block  : 'control-group',
                                            mods   : {
                                                with: 'icon'
                                            },
                                            content: [
                                                {
                                                    block: 'icon',
                                                    mods : {
                                                        type : 'envelope',
                                                        color: 'white',
                                                        size : 's'
                                                    }
                                                },
                                                {
                                                    block      : 'input',
                                                    mods       : {
                                                        size: 's',
                                                        type: 'transparent'
                                                    },
                                                    placeholder: 'Enter your email Address'
                                                },
                                                {
                                                    block: 'button',
                                                    mods : {
                                                        size: 's'
                                                    },
                                                    text : 'Sign Up'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                /* SUBSCRIBE FORM end */
                /* NAVBAR start */
                {
                    elem   : 'navbar',
                    content: [
                        {
                            block  : 'container',
                            mix    : [
                                {
                                    block: 'header',
                                    elem : 'container'
                                }
                            ],
                            content: [
                                {
                                    elem   : 'logo',
                                    block  : 'header',
                                    content: [
                                        {
                                            block  : 'link',
                                            content: [
                                                {
                                                    block : 'image',
                                                    url   : 'http://www.frameofmindcoaching.com/wp-content/themes/fom/assets/built/img/logo.png',
                                                    title : 'Frame of Mind Coaching',
                                                    width : 217,
                                                    height: 26
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block  : 'menu',
                                    mix    : [
                                        {
                                            block: 'header',
                                            elem : 'menu'
                                        }
                                    ],
                                    mods   : {
                                        type: 'inline'
                                    },
                                    content: [
                                        {
                                            block  : 'menu-item',
                                            mods   : {
                                                type: 'link'
                                            },
                                            content: {
                                                block  : 'link',
                                                url    : '#',
                                                content: 'Coaching'
                                            }
                                        },
                                        {
                                            block  : 'menu-item',
                                            mods   : {
                                                type: 'link'
                                            },
                                            content: {
                                                block  : 'link',
                                                url    : '#',
                                                content: 'Our Team'
                                            }
                                        },
                                        {
                                            block  : 'menu-item',
                                            mods   : {
                                                type: 'link'
                                            },
                                            content: {
                                                block  : 'link',
                                                url    : '#',
                                                content: 'Testimonials'
                                            }
                                        },
                                        {
                                            block  : 'menu-item',
                                            mods   : {
                                                type: 'link'
                                            },
                                            content: {
                                                block  : 'link',
                                                url    : '#',
                                                content: 'News &#038; Views'
                                            }
                                        },
                                        {
                                            block  : 'menu-item',
                                            mods   : {
                                                type: 'link'
                                            },
                                            content: {
                                                block  : 'link',
                                                url    : '#',
                                                content: 'Certification'
                                            }
                                        },
                                        {
                                            block  : 'menu-item',
                                            mods   : {
                                                type: 'link'
                                            },
                                            content: {
                                                block  : 'link',
                                                url    : '#',
                                                content: 'Contact'
                                            }
                                        },
                                        {
                                            block  : 'menu-item',
                                            content: '|'
                                        },
                                        {
                                            block  : 'menu-item',
                                            mods   : {
                                                type: 'link'
                                            },
                                            content: {
                                                block  : 'link',
                                                url    : '#',
                                                content: 'Sign In'
                                            }
                                        },
                                        {
                                            block  : 'menu-item',
                                            mods   : {
                                                type : 'link',
                                                style: 'bordered'
                                            },
                                            content: {
                                                block  : 'link',
                                                url    : '#',
                                                content: 'Get Started'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
                /* NAVBAR end */
            ]
        },
        /* HEADER end */
        {
            block  : 'banner',
            attrs  : {
                style: 'background-image: url(http://www.frameofmindcoaching.com/wp-content/uploads/2014/12/person1.jpg);'
            },
            content: [
                {
                    block  : 'container',
                    mix    : [
                        {
                            block: 'banner',
                            elem : 'container'
                        }
                    ],
                    content: [
                        {
                            block  : 'row',
                            content: [
                                {
                                    elem   : 'col-7',
                                    content: [
                                        {
                                            block  : 'banner',
                                            elem   : 'title',
                                            content: 'Your Thinking Will Determine What You Can Achieve...'
                                        },
                                        {
                                            block  : 'banner',
                                            elem   : 'subtitle',
                                            content: 'Frame of Mind Coaching will transform your thinking and lead you to extraordinary results.'
                                        },
                                        {
                                            block  : 'banner',
                                            elem   : 'actions',
                                            content: [
                                                {
                                                    block  : 'row',
                                                    content: [
                                                        {
                                                            elem   : 'col-5',
                                                            mix    : [
                                                                {
                                                                    block: 'text',
                                                                    elem : 'right'
                                                                }
                                                            ],
                                                            content: [
                                                                {
                                                                    block: 'button',
                                                                    mods : {
                                                                        color: 'red'
                                                                    },
                                                                    text : 'Start your Assessment'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem   : 'col-5',
                                                            content: [
                                                                {
                                                                    block: 'button',
                                                                    mods : {
                                                                        color: 'transparent'
                                                                    },
                                                                    icon : {
                                                                        block: 'icon',
                                                                        mods : {
                                                                            type: 'play'
                                                                        }
                                                                    },
                                                                    text : 'Watch Video'
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
                            block  : 'row',
                            content: [
                                {
                                    elem   : 'scroll2content',
                                    block  : 'banner',
                                    mix    : [
                                        {
                                            block: 'text',
                                            elem : 'center'
                                        }
                                    ],
                                    content: [
                                        {
                                            content: 'Learn More'
                                        },
                                        {
                                            block: 'icon',
                                            mods : {
                                                type : 'arrow-down-thin',
                                                color: 'white'
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
