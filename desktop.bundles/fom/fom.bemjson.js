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
        },
        {
            elem : 'meta',
            attrs: {
                name   : 'viewport',
                content: 'width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.1, target-densityDpi=device-dpi'
            }
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
                    mix    : [
                        {
                            block: 'text',
                            elem : 'center'
                        }
                    ],
                    mods   : {
                        bg: 'red'
                    },
                    content: [
                        {
                            elem   : 'container',
                            cls    : 'container',
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
                                    cls    : 'header__form',
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
                                                        size  : 's',
                                                        type  : 'transparent',
                                                        border: 'strict'
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
                            cls    : 'header__container',
                            content: [
                                {
                                    elem   : 'desktop',
                                    block  : 'header',
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
                                            cls    : 'header__menu',
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
                                },
                                {
                                    elem   : 'mobile',
                                    block  : 'header',
                                    content: [
                                        {
                                            elem   : 'head',
                                            block  : 'header',
                                            content: [
                                                {
                                                    block: 'icon',
                                                    mods : {
                                                        type: 'menu'
                                                    }
                                                },
                                                {
                                                    elem   : 'logo',
                                                    block  : 'header',
                                                    content: [
                                                        {
                                                            block  : 'link',
                                                            content: [
                                                                {
                                                                    block : 'image',
                                                                    url   : 'http://www.frameofmindcoaching.com/wp-content/themes/fom/assets/built/img/logo_mob.png',
                                                                    title : 'Frame of Mind Coaching',
                                                                    width : 138,
                                                                    height: 26
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'button',
                                                    mods : {
                                                        size  : 's',
                                                        border: 'red'
                                                    },
                                                    text : 'Get Started'
                                                }
                                            ]
                                        },
                                        {
                                            block  : 'menu',
                                            cls    : 'header__menu',
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
                                                    mods   : {
                                                        type: 'link'
                                                    },
                                                    content: {
                                                        block  : 'link',
                                                        url    : '#',
                                                        content: 'Sign In'
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
                /* NAVBAR end */
            ]
        },
        /* HEADER end */
        /* BANNER start */
        {
            block  : 'banner',
            attrs  : {
                style: 'background-image: url(http://www.frameofmindcoaching.com/wp-content/uploads/2014/12/person1.jpg);'
            },
            content: [
                {
                    elem   : 'container',
                    cls    : 'container',
                    content: [
                        {
                            block  : 'row',
                            content: [
                                {
                                    elem   : 'col-lg-7',
                                    cls    : 'row__col-sm-12 row__col-xs-12',
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
                                                            elem   : 'col-lg-5',
                                                            cls    : 'row__col-md-6 row__col-xs-6 text__right',
                                                            content: [
                                                                {
                                                                    block: 'button',
                                                                    mods : {
                                                                        color: 'red',
                                                                        size : 'l'
                                                                    },
                                                                    text : 'Start your Assessment'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem   : 'col-lg-5',
                                                            cls    : 'row__col-md-6 row__col-xs-6',
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
                                            js   : true,
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
        /* BANNER end */
        /* QUOTE start */
        , {
            block  : 'quote',
            content: [
                {
                    elem   : 'container',
                    cls    : 'container',
                    content: [
                        {
                            elem   : 'photo',
                            block  : 'quote',
                            content: [
                                {
                                    block: 'image',
                                    url  : 'http://www.frameofmindcoaching.com/wp-content/uploads/2015/01/JF.jpg',
                                    title: 'Joanne Foxxe'
                                }
                            ]
                        },
                        {
                            elem   : 'text',
                            block  : 'quote',
                            content: [
                                {
                                    elem   : 'excerpt',
                                    content: [
                                        'I joined Frame of Mind Coaching because I knew I needed to do something different to get my real estate career on track. I was a top producing agent in California for years until I moved to Hawaii! I had only closed a couple of transactions each year, and I saw my savings rapidly depleting. I was de... ',
                                        {
                                            block  : 'link',
                                            cls    : 'quote__more',
                                            url    : '#',
                                            content: 'read more'
                                        }
                                    ]
                                },
                                {
                                    elem   : 'author',
                                    content: '- Joanne Foxxe'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
        /* QUOTE end */
        /* SERVICES start */
        , {
            block  : 'section',
            content: [
                {
                    elem   : 'container',
                    cls    : 'container section-1',
                    content: [
                        {
                            elem   : 'title',
                            block  : 'section',
                            content: 'Why Frame of Mind Coaching?'
                        },
                        {
                            elem   : 'description',
                            block  : 'section',
                            content: 'Frame of Mind Coaches specialize in coaching highly driven, achievement oriented individuals who are committed to living outstanding lives. The foundation of FOM Coaching is that a person’s thinking has a greater impact on their outcomes than any other contributing factor. As such, FOM Coaches focus on the study and examination of thoughts, beliefs, past experiences, and perspectives in order to make sense of the results that clients generate in their lives. Due to the impact of the coaches, the coaching process, the platform and the focus, clients consistently experience exceptional personal transformation and professional growth.'
                        },
                        {
                            elem   : 'body',
                            block  : 'section',
                            content: [
                                {
                                    block  : 'row',
                                    content: [
                                        {
                                            elem   : 'col-lg-6',
                                            cls    : 'row__col-sm6 row__col-xs-12',
                                            content: [
                                                {
                                                    block  : 'row',
                                                    content: [
                                                        {
                                                            elem   : 'col-lg-6',
                                                            cls    : 'row__col-sm-6 row__col-xs-12',
                                                            content: [
                                                                {
                                                                    block  : 'box',
                                                                    content: [
                                                                        {
                                                                            elem   : 'cover',
                                                                            content: [
                                                                                {
                                                                                    block: 'image',
                                                                                    url  : 'http://www.frameofmindcoaching.com/wp-content/uploads/2014/12/Coaches-300x163.jpg',
                                                                                    title: 'Coaches'
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem   : 'title',
                                                                            content: 'Coaches'
                                                                        },
                                                                        {
                                                                            elem   : 'content',
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
                                                            elem   : 'col-lg-6',
                                                            cls    : 'row__col-sm-6 row__col-xs-12',
                                                            content: [
                                                                {
                                                                    block  : 'box',
                                                                    content: [
                                                                        {
                                                                            elem   : 'cover',
                                                                            content: [
                                                                                {
                                                                                    block: 'image',
                                                                                    url  : 'http://www.frameofmindcoaching.com/wp-content/uploads/2014/12/2-300x200.jpg',
                                                                                    title: 'Process'
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem   : 'title',
                                                                            content: 'Process'
                                                                        },
                                                                        {
                                                                            elem   : 'content',
                                                                            content: [
                                                                                {
                                                                                    tag    : 'p',
                                                                                    content: '10 weeks, 10 calls, 10 hours of personal recordings and 70 days of journaling.'
                                                                                },
                                                                                {
                                                                                    tag    : 'p',
                                                                                    attrs  : {
                                                                                        style: 'font-weight: bold;'
                                                                                    },
                                                                                    content: 'Why is journaling so important?'
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
                                            elem   : 'col-lg-6',
                                            cls    : 'row__col-sm-6 row__col-xs-12',
                                            content: [
                                                {
                                                    block  : 'row',
                                                    content: [
                                                        {
                                                            elem   : 'col-lg-6',
                                                            cls    : 'row__col-sm-6 row__col-xs-12',
                                                            content: [
                                                                {
                                                                    block  : 'box',
                                                                    content: [
                                                                        {
                                                                            elem   : 'cover',
                                                                            content: [
                                                                                {
                                                                                    block: 'image',
                                                                                    url  : 'http://www.frameofmindcoaching.com/wp-content/uploads/2014/12/3-300x200.jpg',
                                                                                    title: 'Platform'
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem   : 'title',
                                                                            content: 'Platform'
                                                                        },
                                                                        {
                                                                            elem   : 'content',
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
                                                                                    block: 'image',
                                                                                    url  : 'http://www.frameofmindcoaching.com/wp-content/uploads/2015/02/JE-logo-new.png',
                                                                                    title: 'JournalEngine'
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem   : 'col-lg-6',
                                                            cls    : 'row__col-sm-6 row__col-xs-12',
                                                            content: [
                                                                {
                                                                    block  : 'box',
                                                                    content: [
                                                                        {
                                                                            elem   : 'cover',
                                                                            content: [
                                                                                {
                                                                                    block: 'image',
                                                                                    url  : 'http://www.frameofmindcoaching.com/wp-content/uploads/2014/12/Plant-300x199.jpg',
                                                                                    title: 'Focus'
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem   : 'title',
                                                                            content: 'Focus'
                                                                        },
                                                                        {
                                                                            elem   : 'content',
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
        },
        /* SERVICES end */
        /* BUTTON start */
        , {
            block  : 'section',
            content: [
                {
                    elem   : 'container',
                    cls    : 'container',
                    content: [
                        {
                            block: 'button',
                            mods : {
                                size: 'xl',
                                icon: 'right'
                            },
                            cls  : 'section__button',
                            text : 'Learn why Frame of Mind Coaching is right for you',
                            icon : {
                                block: 'icon',
                                mods : {
                                    type : 'arrow-right',
                                    style: 'red'
                                }
                            }
                        }
                    ]
                }
            ]
        }
        /* BUTTON end */
        /* QUOTE start */
        , {
            block  : 'quote',
            content: [
                {
                    elem   : 'container',
                    cls    : 'container',
                    content: [
                        {
                            elem   : 'photo',
                            block  : 'quote',
                            content: [
                                {
                                    block: 'image',
                                    url  : 'http://www.frameofmindcoaching.com/wp-content/uploads/2015/01/JF.jpg',
                                    title: 'Quote author'
                                }
                            ]
                        },
                        {
                            elem   : 'text',
                            block  : 'quote',
                            content: [
                                {
                                    elem   : 'excerpt',
                                    content: [
                                        'I joined Frame of Mind Coaching because I knew I needed to do something different to get my real estate career on track. I was a top producing agent in California for years until I moved to Hawaii! I had only closed a couple of transactions each year, and I saw my savings rapidly depleting. I was de... ',
                                        {
                                            block  : 'link',
                                            cls    : 'quote__more',
                                            url    : '#',
                                            content: 'read more'
                                        }
                                    ]
                                },
                                {
                                    elem   : 'author',
                                    content: '- Joanne Foxxe'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
        /* QUOTE end */
        /* TEAM start */
        , {
            block  : 'section',
            content: [
                {
                    elem   : 'container',
                    cls    : 'container',
                    content: [
                        {
                            elem   : 'title',
                            block  : 'section',
                            content: 'Our Team'
                        },
                        {
                            elem   : 'description',
                            block  : 'section',
                            content: 'Each and every member of the FOM Coaching team has started by going through our 1-1 coaching program as a client. The best way to describe them is through the core values which we commit to living and breathing on a daily basis.'
                        },
                        {
                            elem   : 'body',
                            block  : 'section',
                            content: [
                                {
                                    block  : 'row',
                                    content: [
                                        {
                                            elem   : 'col-lg-6',
                                            cls    : 'row__col-md-6 row__col-sm-12',
                                            content: [
                                                {
                                                    block: 'image',
                                                    url  : 'http://www.frameofmindcoaching.com/wp-content/uploads/2014/12/our_team.jpg',
                                                    title: 'Our team'
                                                }
                                            ]
                                        },
                                        {
                                            elem   : 'col-lg-6',
                                            cls    : 'row__col-md-6 row__col-sm-12',
                                            content: [
                                                {
                                                    elem   : 'subtitle',
                                                    block  : 'section',
                                                    content: 'Frame of Mind Coaching\'s Core Values'
                                                },
                                                {
                                                    elem   : 'content',
                                                    block  : 'section',
                                                    cls    : 'text__left text_italic',
                                                    content: [
                                                        {
                                                            elem   : 'item',
                                                            content: [
                                                                {
                                                                    tag    : 'span',
                                                                    content: 'GENEROSITY'
                                                                },
                                                                '- Giving whatever we can to our clients exactly when they need it the most.'
                                                            ]
                                                        }
                                                        , {
                                                            elem   : 'item',
                                                            content: [
                                                                {
                                                                    tag    : 'span',
                                                                    content: 'IMPACT THROUGH BOLD LEADERSHIP '
                                                                },
                                                                '- Leading by example AND coaching leaders to have a profound impact on every community they touch.'
                                                            ]
                                                        }
                                                        , {
                                                            elem   : 'item',
                                                            content: [
                                                                {
                                                                    tag    : 'span',
                                                                    content: 'INTIMACY'
                                                                },
                                                                '- Building an unprecedented level of trust with our clients.'
                                                            ]
                                                        }
                                                        , {
                                                            elem   : 'item',
                                                            content: [
                                                                {
                                                                    tag    : 'span',
                                                                    content: 'INNOVATION'
                                                                },
                                                                '- Developing and delivering the most leading edge and powerful approaches to coaching.'
                                                            ]
                                                        }
                                                        , {
                                                            elem   : 'item',
                                                            content: [
                                                                {
                                                                    tag    : 'span',
                                                                    content: 'PERSONAL DEVELOPMENT'
                                                                },
                                                                '- As FOM Coaches, we are committed to our own personal and professional development as we simultaneously take a stand for the personal development of our clients.'
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
        /* TEAM end */
        /* BUTTON end */
        , {
            block  : 'section',
            content: [
                {
                    elem   : 'container',
                    cls    : 'container',
                    content: [
                        {
                            elem   : 'title',
                            block  : 'section',
                            content: 'Get a Taste of our Frame of Mind Coaching experience'
                        },
                        {
                            block: 'button',
                            mods : {
                                size: 'xl',
                                icon: 'right'
                            },
                            cls  : 'section__button',
                            text : 'Start your personalized Assessment',
                            icon : {
                                block: 'icon',
                                mods : {
                                    type : 'arrow-right',
                                    style: 'red'
                                }
                            }
                        }
                    ]
                }
            ]
        }
        /* BUTTON end */
        /* FOOTER start */
        , {
            block  : 'footer',
            content: [
                {
                    elem   : 'container',
                    cls    : 'container',
                    content: [
                        {
                            elem   : 'navbar',
                            content: [
                                {
                                    block  : 'row',
                                    content: [
                                        {
                                            elem   : 'col-lg-2',
                                            cls    : 'row__col-md-3 row__col-sm-3',
                                            content: [
                                                {
                                                    elem   : 'title',
                                                    block  : 'footer',
                                                    content: 'Services'
                                                },
                                                {
                                                    block  : 'menu',
                                                    mods   : {
                                                        type: 'vertical'
                                                    },
                                                    content: [
                                                        {
                                                            block  : 'menu-item',
                                                            content: [
                                                                {
                                                                    block  : 'link',
                                                                    content: 'Coaching'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block  : 'menu-item',
                                                            content: [
                                                                {
                                                                    block  : 'link',
                                                                    content: 'Certification'
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            elem   : 'col-lg-2',
                                            cls    : 'row__col-md-3 row__col-sm-3',
                                            content: [
                                                {
                                                    elem   : 'title',
                                                    block  : 'footer',
                                                    content: 'About Us'
                                                },
                                                {
                                                    block  : 'menu',
                                                    mods   : {
                                                        type: 'vertical'
                                                    },
                                                    content: [
                                                        {
                                                            block  : 'menu-item',
                                                            content: [
                                                                {
                                                                    block  : 'link',
                                                                    content: 'Meet Our Team'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block  : 'menu-item',
                                                            content: [
                                                                {
                                                                    block  : 'link',
                                                                    content: 'Testimonials'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block  : 'menu-item',
                                                            content: [
                                                                {
                                                                    block  : 'link',
                                                                    content: 'Privacy'
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            elem   : 'col-lg-2',
                                            cls    : 'row__col-md-3 row__col-sm-3',
                                            content: [
                                                {
                                                    elem   : 'title',
                                                    block  : 'footer',
                                                    content: 'News'
                                                },
                                                {
                                                    block  : 'menu',
                                                    mods   : {
                                                        type: 'vertical'
                                                    },
                                                    content: [
                                                        {
                                                            block  : 'menu-item',
                                                            content: [
                                                                {
                                                                    block  : 'link',
                                                                    content: 'Media'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block  : 'menu-item',
                                                            content: [
                                                                {
                                                                    block  : 'link',
                                                                    content: 'News & Views'
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            elem   : 'col-lg-2',
                                            cls    : 'row__col-md-3 row__col-sm-3',
                                            content: [
                                                {
                                                    elem   : 'title',
                                                    block  : 'footer',
                                                    content: 'Connect'
                                                },
                                                {
                                                    block  : 'menu',
                                                    mods   : {
                                                        type: 'vertical'
                                                    },
                                                    content: [
                                                        {
                                                            block  : 'menu-item',
                                                            content: [
                                                                {
                                                                    block  : 'link',
                                                                    content: '416-747-6900'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block  : 'menu-item',
                                                            content: [
                                                                {
                                                                    block  : 'link',
                                                                    content: 'contact'
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            elem   : 'col-lg-4',
                                            cls    : 'row__col-md-6 col-lg-offset-0 col-md-offset-3 col-sm-offset-3 col-sm-9',
                                            content: [
                                                {
                                                    elem   : 'title',
                                                    block  : 'footer',
                                                    content: 'Sign up for our newsletter'
                                                },
                                                {
                                                    block  : 'form',
                                                    mods   : {
                                                        type: 'horizontal'
                                                    },
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
                                                                        type: 'envelope'
                                                                    }
                                                                },
                                                                {
                                                                    block      : 'input',
                                                                    placeholder: 'Enter your email Address'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block: 'button',
                                                            mods : {
                                                                color: 'red'
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
                        {
                            elem   : 'social',
                            mix    : [
                                {
                                    block: 'text',
                                    elem : 'center'
                                }
                            ],
                            content: [
                                {
                                    block  : 'social-list',
                                    content: [
                                        {
                                            block  : 'link',
                                            content: [
                                                {
                                                    block: 'icon',
                                                    mods : {
                                                        type: 'tw'
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            block  : 'link',
                                            content: [
                                                {
                                                    block: 'icon',
                                                    mods : {
                                                        type: 'fb'
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            block  : 'link',
                                            content: [
                                                {
                                                    block: 'icon',
                                                    mods : {
                                                        type: 'in'
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            block  : 'link',
                                            content: [
                                                {
                                                    block: 'icon',
                                                    mods : {
                                                        type: 'you-tube'
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem   : 'mobile',
                                    content: [
                                        {
                                            block  : 'form',
                                            mods   : {
                                                type: 'horizontal'
                                            },
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
                                                                type: 'envelope'
                                                            }
                                                        },
                                                        {
                                                            block      : 'input',
                                                            placeholder: 'Enter your email Address'
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'button',
                                                    mods : {
                                                        color: 'red'
                                                    },
                                                    text : 'Sign Up'
                                                }
                                            ]
                                        },
                                        {
                                            block  : 'menu',
                                            mods   : {
                                                type  : 'vertical',
                                                device: 'mobile'
                                            },
                                            content: [
                                                {
                                                    block  : 'menu-item',
                                                    content: [
                                                        {
                                                            block  : 'link',
                                                            content: 'Media'
                                                        }
                                                    ]
                                                },
                                                {
                                                    block  : 'menu-item',
                                                    content: [
                                                        {
                                                            block  : 'link',
                                                            content: 'Privacy'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem   : 'copy',
                                    content: '© Frame of Mind Coaching 2015'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
        /* FOOTER end */
    ]
})
