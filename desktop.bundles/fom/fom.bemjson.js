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
                            block: 'text',
                            elem : 'center'
                        }
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
                            tag    : 'a',
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
                                            block: 'col-lg-7 col-sm-12 col-xs-12'
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
                                                            block: 'text',
                                                            elem : 'center'
                                                        },
                                                        {
                                                            block: 'col-lg-5 col-md-6 col-xs-6'
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
                                                            block: 'text',
                                                            elem : 'center'
                                                        },
                                                        {
                                                            block: 'col-lg-5 col-md-6 col-xs-6'
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
        },
        {
            block  : 'quote',
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
                            elem   : 'author-photo',
                            content: [
                                {
                                    elem : 'photo',
                                    tag  : 'img',
                                    attrs: {
                                        src: 'http://www.frameofmindcoaching.com/wp-content/uploads/2015/01/JM.jpg'
                                    }
                                }
                            ]
                        },
                        {
                            elem   : 'txt',
                            content: [
                                {
                                    elem   : 'body',
                                    content: 'I always have felt things will be better when I get to a certain part of my life and return back to “Normal”. I was at the mercy of the waves of life and sometimes I would be knocked down repeatedly by those waves. I always felt as if I was yelling at everyone, biting their heads off (or wanting to)...'
                                },
                                {
                                    elem   : 'author',
                                    content: '- Jilian McDermott'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block  : 'section',
            attrs  : {
                'data-section': 1
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
                            elem   : 'title',
                            content: 'Why Frame of Mind Coaching?'
                        },
                        {
                            elem   : 'txt',
                            mix    : [
                                {
                                    block: 'narrow-160'
                                },
                                {
                                    block: 'text',
                                    elem : 'center'
                                }
                            ],
                            content: 'Frame of Mind Coaches specialize in coaching highly driven, achievement oriented individuals who are committed to living outstanding lives. The foundation of FOM Coaching is that a person’s thinking has a greater impact on their outcomes than any other contributing factor. As such, FOM Coaches focus on the study and examination of thoughts, beliefs, past experiences, and perspectives in order to make sense of the results that clients generate in their lives. Due to the impact of the coaches, the coaching process, the platform and the focus, clients consistently experience exceptional personal transformation and professional growth.'
                        },
                        {
                            block  : 'row',
                            content: [
                                {
                                    block  : 'cols',
                                    mix    : [
                                        {
                                            block: 'col-lg-6 col-md-6 col-xs-12'
                                        },
                                    ],
                                    content: [
                                        {
                                            block  : 'row',
                                            content: [
                                                {
                                                    block  : 'cols',
                                                    mix    : [
                                                        {
                                                            block: 'col-lg-6 col-sm-6 col-xs-12'
                                                        },
                                                    ],
                                                    content: [
                                                        {
                                                            block  : 'box',
                                                            mods   : {
                                                                type    : 'image',
                                                                location: 'top'
                                                            },
                                                            content: [
                                                                {
                                                                    elem   : 'image-wrap',
                                                                    content: [
                                                                        {
                                                                            elem : 'image',
                                                                            tag  : 'img',
                                                                            mods : {
                                                                                size: 'big'
                                                                            },
                                                                            attrs: {
                                                                                src: 'http://www.frameofmindcoaching.com/wp-content/uploads/2014/12/Coaches-300x163.jpg'
                                                                            }
                                                                        },
                                                                        {
                                                                            block: 'icon',
                                                                            tag  : 'i',
                                                                            mix  : [
                                                                                {
                                                                                    block: 'box',
                                                                                    elem : 'icon',
                                                                                    mods : {
                                                                                        type: 'people-black'
                                                                                    }
                                                                                }
                                                                            ],
                                                                            mods : {
                                                                                type: 'people-black'
                                                                            }
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem   : 'title',
                                                                    mods   : {
                                                                        size: 24
                                                                    },
                                                                    content: 'Coaches'
                                                                },
                                                                {
                                                                    elem   : 'txt',
                                                                    content: [
                                                                        {
                                                                            tag    : 'p',
                                                                            content: 'Our coaches are phenomenal.'
                                                                        },
                                                                        {
                                                                            tag    : 'p',
                                                                            content: 'FOM Coaches are at the top of their game and in a class by themselves. They are prepared. They are purposeful. They artfully walk you through the coaching process. They are by your side the entire time.'
                                                                        },
                                                                        {
                                                                            tag    : 'p',
                                                                            content: 'They Live It.'
                                                                        },
                                                                        {
                                                                            tag    : 'p',
                                                                            content: 'They Breathe It.'
                                                                        },
                                                                        {
                                                                            tag    : 'p',
                                                                            content: 'And they will help you transform at a mind-blowing pace.'
                                                                        },
                                                                        {
                                                                            tag    : 'p',
                                                                            content: 'It takes a particular kind of coach to make the grade.'
                                                                        },
                                                                        {
                                                                            tag    : 'p',
                                                                            content: 'And it takes a particular type of client to meet the challenge.'
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    block  : 'cols',
                                                    mix    : [
                                                        {
                                                            block: 'col-lg-6 col-sm-6 col-xs-12'
                                                        },
                                                    ],
                                                    content: [
                                                        {
                                                            block  : 'box',
                                                            mods   : {
                                                                type    : 'image',
                                                                location: 'top'
                                                            },
                                                            content: [
                                                                {
                                                                    elem   : 'image-wrap',
                                                                    content: [
                                                                        {
                                                                            elem : 'image',
                                                                            tag  : 'img',
                                                                            mods : {
                                                                                size: 'big'
                                                                            },
                                                                            attrs: {
                                                                                src: 'http://www.frameofmindcoaching.com/wp-content/uploads/2014/12/2-300x200.jpg'
                                                                            }
                                                                        },
                                                                        {
                                                                            block: 'icon',
                                                                            tag  : 'i',
                                                                            mix  : [
                                                                                {
                                                                                    block: 'box',
                                                                                    elem : 'icon',
                                                                                    mods : {
                                                                                        type: 'dots'
                                                                                    }
                                                                                }
                                                                            ],
                                                                            mods : {
                                                                                type: 'dots'
                                                                            }
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem   : 'title',
                                                                    mods   : {
                                                                        size: 24
                                                                    },
                                                                    content: 'Process'
                                                                },
                                                                {
                                                                    elem   : 'txt',
                                                                    content: [
                                                                        {
                                                                            tag    : 'p',
                                                                            content: '10 weeks, 10 calls, 10 hours of personal recordings and 70 days of journaling.'
                                                                        },
                                                                        {
                                                                            tag    : 'p',
                                                                            content: 'Why is journaling so important?',
                                                                            attrs  : {
                                                                                style: 'font-weight: bold;'
                                                                            }
                                                                        },
                                                                        {
                                                                            tag    : 'p',
                                                                            content: 'It’s intense. It’s dynamic. It’s deliberate. It’s about driving results.'
                                                                        },
                                                                        {
                                                                            tag    : 'p',
                                                                            content: 'Our process is designed to create an unprecedented level of personal insight necessary for clients to experience a radical change at an accelerated rate.'
                                                                        },
                                                                        {
                                                                            tag    : 'p',
                                                                            content: 'This is not for people who are scared to move forward or to try new things. It’s for people who are strong-minded and prepared to take a serious look at themselves in order to experience monumental results.'
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
                                    block  : 'cols',
                                    mix    : [
                                        {
                                            block: 'col-lg-6 col-md-6 col-xs-12'
                                        },
                                    ],
                                    content: [
                                        {
                                            block  : 'row',
                                            content: [
                                                {
                                                    block  : 'cols',
                                                    mix    : [
                                                        {
                                                            block: 'col-lg-6 col-sm-6 col-xs-12'
                                                        },
                                                    ],
                                                    content: [
                                                        {
                                                            block  : 'box',
                                                            mods   : {
                                                                type    : 'image',
                                                                location: 'top'
                                                            },
                                                            content: [
                                                                {
                                                                    elem   : 'image-wrap',
                                                                    content: [
                                                                        {
                                                                            elem : 'image',
                                                                            tag  : 'img',
                                                                            mods : {
                                                                                size: 'big'
                                                                            },
                                                                            attrs: {
                                                                                src: 'http://www.frameofmindcoaching.com/wp-content/uploads/2014/12/3-300x200.jpg'
                                                                            }
                                                                        },
                                                                        {
                                                                            block: 'icon',
                                                                            tag  : 'i',
                                                                            mix  : [
                                                                                {
                                                                                    block: 'box',
                                                                                    elem : 'icon',
                                                                                    mods : {
                                                                                        type: 'book'
                                                                                    }
                                                                                }
                                                                            ],
                                                                            mods : {
                                                                                type: 'book'
                                                                            }
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem   : 'title',
                                                                    mods   : {
                                                                        size: 24
                                                                    },
                                                                    content: 'Platform'
                                                                },
                                                                {
                                                                    elem   : 'txt',
                                                                    content: [
                                                                        {
                                                                            tag    : 'p',
                                                                            content: 'In between coaching sessions you are engaged with your coach via our online journaling platform – JournalEngine™. JournalEngine™ changes the landscape of coaching by keeping you intimately connected to your coach in between coaching sessions, and also keeps you deeply engaged in the implementation of the concepts and principles learned throughout your coaching program.'
                                                                        },
                                                                        {
                                                                            tag    : 'p',
                                                                            content: 'JournalEngine™ is the gymnasium for your mind.  This platform will enable you to keep working on your Frame of Mind long after your coaching process is complete.'
                                                                        },
                                                                        {
                                                                            tag  : 'img',
                                                                            attrs: {
                                                                                src  : 'http://www.frameofmindcoaching.com/wp-content/uploads/2015/02/JE-logo-new.png',
                                                                                style: 'width: 215px; height: 44px;'
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    block  : 'cols',
                                                    mix    : [
                                                        {
                                                            block: 'col-lg-6 col-sm-6 col-xs-12'
                                                        },
                                                    ],
                                                    content: [
                                                        {
                                                            block  : 'box',
                                                            mods   : {
                                                                type    : 'image',
                                                                location: 'top'
                                                            },
                                                            content: [
                                                                {
                                                                    elem   : 'image-wrap',
                                                                    content: [
                                                                        {
                                                                            elem : 'image',
                                                                            tag  : 'img',
                                                                            mods : {
                                                                                size: 'big'
                                                                            },
                                                                            attrs: {
                                                                                src: 'http://www.frameofmindcoaching.com/wp-content/uploads/2014/12/Plant-300x199.jpg'
                                                                            }
                                                                        },
                                                                        {
                                                                            block: 'icon',
                                                                            tag  : 'i',
                                                                            mix  : [
                                                                                {
                                                                                    block: 'box',
                                                                                    elem : 'icon',
                                                                                    mods : {
                                                                                        type: 'dots'
                                                                                    }
                                                                                }
                                                                            ],
                                                                            mods : {
                                                                                type: 'dots'
                                                                            }
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem   : 'title',
                                                                    mods   : {
                                                                        size: 24
                                                                    },
                                                                    content: 'Focus'
                                                                },
                                                                {
                                                                    elem   : 'txt',
                                                                    content: [
                                                                        {
                                                                            tag    : 'p',
                                                                            content: 'Very simply, Frame of Mind Coaching is laser-focused on your mindset.'
                                                                        },
                                                                        {
                                                                            tag    : 'p',
                                                                            content: 'We know that the one thing getting in your way is YOU.'
                                                                        },
                                                                        {
                                                                            tag    : 'p',
                                                                            content: 'Your thinking, your values, your beliefs, your experiences and your perspectives all come together to form your current results. By honing in on your thinking, epic transformation takes place in a very short period of time. The results ripple across every aspect of your life, creating colossal changes from relationships, to health, to revenue.'
                                                                        },
                                                                        {
                                                                            tag    : 'p',
                                                                            content: 'The most dramatic and tangible change is that our clients are overwhelmingly happier as a result of coaching.'
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
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
})
