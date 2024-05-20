'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">back documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-ea64609dfc2058f935815240704731aa16e4191faafccf0d586adc8bbe82efdf4573e2093e5e4ff7e8e12530789bca51fe11e3a81f26b9ac0485facbb8740be0"' : 'data-bs-target="#xs-controllers-links-module-AppModule-ea64609dfc2058f935815240704731aa16e4191faafccf0d586adc8bbe82efdf4573e2093e5e4ff7e8e12530789bca51fe11e3a81f26b9ac0485facbb8740be0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-ea64609dfc2058f935815240704731aa16e4191faafccf0d586adc8bbe82efdf4573e2093e5e4ff7e8e12530789bca51fe11e3a81f26b9ac0485facbb8740be0"' :
                                            'id="xs-controllers-links-module-AppModule-ea64609dfc2058f935815240704731aa16e4191faafccf0d586adc8bbe82efdf4573e2093e5e4ff7e8e12530789bca51fe11e3a81f26b9ac0485facbb8740be0"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-ea64609dfc2058f935815240704731aa16e4191faafccf0d586adc8bbe82efdf4573e2093e5e4ff7e8e12530789bca51fe11e3a81f26b9ac0485facbb8740be0"' : 'data-bs-target="#xs-injectables-links-module-AppModule-ea64609dfc2058f935815240704731aa16e4191faafccf0d586adc8bbe82efdf4573e2093e5e4ff7e8e12530789bca51fe11e3a81f26b9ac0485facbb8740be0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-ea64609dfc2058f935815240704731aa16e4191faafccf0d586adc8bbe82efdf4573e2093e5e4ff7e8e12530789bca51fe11e3a81f26b9ac0485facbb8740be0"' :
                                        'id="xs-injectables-links-module-AppModule-ea64609dfc2058f935815240704731aa16e4191faafccf0d586adc8bbe82efdf4573e2093e5e4ff7e8e12530789bca51fe11e3a81f26b9ac0485facbb8740be0"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-174ac5b7d3553e45e5ce4ae455fb3972ff03a626745b393fbf1a7d431fd6e5d0a5ffa4d7fd07f8aa7817d797e4fca1c41cf6e5222b4863932cc823fa55ff8a59"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-174ac5b7d3553e45e5ce4ae455fb3972ff03a626745b393fbf1a7d431fd6e5d0a5ffa4d7fd07f8aa7817d797e4fca1c41cf6e5222b4863932cc823fa55ff8a59"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-174ac5b7d3553e45e5ce4ae455fb3972ff03a626745b393fbf1a7d431fd6e5d0a5ffa4d7fd07f8aa7817d797e4fca1c41cf6e5222b4863932cc823fa55ff8a59"' :
                                            'id="xs-controllers-links-module-AuthModule-174ac5b7d3553e45e5ce4ae455fb3972ff03a626745b393fbf1a7d431fd6e5d0a5ffa4d7fd07f8aa7817d797e4fca1c41cf6e5222b4863932cc823fa55ff8a59"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-174ac5b7d3553e45e5ce4ae455fb3972ff03a626745b393fbf1a7d431fd6e5d0a5ffa4d7fd07f8aa7817d797e4fca1c41cf6e5222b4863932cc823fa55ff8a59"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-174ac5b7d3553e45e5ce4ae455fb3972ff03a626745b393fbf1a7d431fd6e5d0a5ffa4d7fd07f8aa7817d797e4fca1c41cf6e5222b4863932cc823fa55ff8a59"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-174ac5b7d3553e45e5ce4ae455fb3972ff03a626745b393fbf1a7d431fd6e5d0a5ffa4d7fd07f8aa7817d797e4fca1c41cf6e5222b4863932cc823fa55ff8a59"' :
                                        'id="xs-injectables-links-module-AuthModule-174ac5b7d3553e45e5ce4ae455fb3972ff03a626745b393fbf1a7d431fd6e5d0a5ffa4d7fd07f8aa7817d797e4fca1c41cf6e5222b4863932cc823fa55ff8a59"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-1bbe1151ff6c92b029e51cc1de8c6e4e418aafe0adef57254b47a0f4755800e0ba80c418537baa113ed74e6b306a691060bc68529194164d1c52c3f4d7f3557b"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-1bbe1151ff6c92b029e51cc1de8c6e4e418aafe0adef57254b47a0f4755800e0ba80c418537baa113ed74e6b306a691060bc68529194164d1c52c3f4d7f3557b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-1bbe1151ff6c92b029e51cc1de8c6e4e418aafe0adef57254b47a0f4755800e0ba80c418537baa113ed74e6b306a691060bc68529194164d1c52c3f4d7f3557b"' :
                                            'id="xs-controllers-links-module-UsersModule-1bbe1151ff6c92b029e51cc1de8c6e4e418aafe0adef57254b47a0f4755800e0ba80c418537baa113ed74e6b306a691060bc68529194164d1c52c3f4d7f3557b"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-1bbe1151ff6c92b029e51cc1de8c6e4e418aafe0adef57254b47a0f4755800e0ba80c418537baa113ed74e6b306a691060bc68529194164d1c52c3f4d7f3557b"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-1bbe1151ff6c92b029e51cc1de8c6e4e418aafe0adef57254b47a0f4755800e0ba80c418537baa113ed74e6b306a691060bc68529194164d1c52c3f4d7f3557b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-1bbe1151ff6c92b029e51cc1de8c6e4e418aafe0adef57254b47a0f4755800e0ba80c418537baa113ed74e6b306a691060bc68529194164d1c52c3f4d7f3557b"' :
                                        'id="xs-injectables-links-module-UsersModule-1bbe1151ff6c92b029e51cc1de8c6e4e418aafe0adef57254b47a0f4755800e0ba80c418537baa113ed74e6b306a691060bc68529194164d1c52c3f4d7f3557b"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Article.html" data-type="entity-link" >Article</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthService.html" data-type="entity-link" >AuthService</a>
                            </li>
                            <li class="link">
                                <a href="classes/Right.html" data-type="entity-link" >Right</a>
                            </li>
                            <li class="link">
                                <a href="classes/Team.html" data-type="entity-link" >Team</a>
                            </li>
                            <li class="link">
                                <a href="classes/Ticket.html" data-type="entity-link" >Ticket</a>
                            </li>
                            <li class="link">
                                <a href="classes/Type.html" data-type="entity-link" >Type</a>
                            </li>
                            <li class="link">
                                <a href="classes/typeDto.html" data-type="entity-link" >typeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserArticle.html" data-type="entity-link" >UserArticle</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserDto.html" data-type="entity-link" >UserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserTeam.html" data-type="entity-link" >UserTeam</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});