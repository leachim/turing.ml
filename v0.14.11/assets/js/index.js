<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="content-language" content="en">

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Turing.jl</title>
    <meta name="description" content="$(document).ready(function(){    $('.md-header').attr('data-md-state', 'none');">
    <meta name="author" content="The Turing Team">
    <meta name="theme-color" content="red">
    <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,700|Roboto+Mono">
    <style>body,input{font-family:"Roboto","Helvetica Neue",Helvetica,Arial,sans-serif}code,kbd,pre{font-family:"Roboto Mono","Courier New",Courier,monospace}</style>

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="canonical" href="/dev/assets/js/index.js">
    <link rel="alternate" type="application/rss+xml" title="Turing.jl" href="/dev/feed.xml">
    <meta name="lang:clipboard.copy" content="Copy to clipboard">
    <meta name="lang:clipboard.copied" content="Copied to clipboard">
    <meta name="lang:search.language" content="en">
    <meta name="lang:search.pipeline.stopwords" content="True">
    <meta name="lang:search.pipeline.trimmer" content="True">
    <meta name="lang:search.result.none" content="No matching documents">
    <meta name="lang:search.result.one" content="1 matching document">
    <meta name="lang:search.result.other" content="# matching documents">
    <meta name="lang:search.tokenizer" content="[\s\-]+">
    <script src="/versions.js"></script>
    <script src="/dev/assets/js/modernizr.74668098.js"></script>
    <link rel="shortcut icon" href="/dev/assets/img/favicon.ico">
    <link rel="stylesheet" href="/dev/assets/css/main.css">
    <link rel="stylesheet" href="/dev/assets/css/palette.css">
    <link rel="stylesheet" href="/dev/assets/css/header.css">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

    

    

  </head>

  <body dir="ltr" data-md-color-primary="red" data-md-color-accent="red">
    

<svg class="md-svg">
<defs>
  <svg>
  <path d="M160 304q0 10-3.125 20.5t-10.75 19-18.125 8.5-18.125-8.5-10.75-19-3.125-20.5 3.125-20.5 10.75-19 18.125-8.5 18.125 8.5 10.75 19 3.125 20.5zM320 304q0 10-3.125 20.5t-10.75 19-18.125 8.5-18.125-8.5-10.75-19-3.125-20.5 3.125-20.5 10.75-19 18.125-8.5 18.125 8.5 10.75 19 3.125 20.5zM360 304q0-30-17.25-51t-46.75-21q-10.25 0-48.75 5.25-17.75 2.75-39.25 2.75t-39.25-2.75q-38-5.25-48.75-5.25-29.5 0-46.75 21t-17.25 51q0 22 8 38.375t20.25 25.75 30.5 15 35 7.375 37.25 1.75h42q20.5 0 37.25-1.75t35-7.375 30.5-15 20.25-25.75 8-38.375zM416 260q0 51.75-15.25 82.75-9.5 19.25-26.375 33.25t-35.25 21.5-42.5 11.875-42.875 5.5-41.75 1.125q-19.5 0-35.5-0.75t-36.875-3.125-38.125-7.5-34.25-12.875-30.25-20.25-21.5-28.75q-15.5-30.75-15.5-82.75 0-59.25 34-99-6.75-20.5-6.75-42.5 0-29 12.75-54.5 27 0 47.5 9.875t47.25 30.875q36.75-8.75 77.25-8.75 37 0 70 8 26.25-20.5 46.75-30.25t47.25-9.75q12.75 25.5 12.75 54.5 0 21.75-6.75 42 34 40 34 99.5z" fill="currentColor"></path></svg>
</defs></svg>

    <input class=md-toggle data-md-toggle=drawer type=checkbox id=__drawer autocomplete=off>
    <input class=md-toggle data-md-toggle=search type=checkbox id=__search autocomplete=off>
    <label class=md-overlay data-md-component=overlay for=__drawer></label> <a href="#" tabindex=1 class=md-skip> Skip to content </a>
    <header class=md-header data-md-component=header data-md-state=none>
        <nav class="md-header-nav md-grid">
            <div class=md-flex>
                <div class="md-flex__cell md-flex__cell--shrink">
                </div>

                <div class="md-flex__cell md-flex__cell--shrink">
                    <label class="md-icon md-icon--menu md-header-nav__button" for=__drawer></label>
                </div>

                <div class="md-flex__cell md-flex__cell--shrink">
                    <a class="md-header-nav__button md-logo" href="/dev/" title="Turing.jl">
                    <div class="md-flex__ellipsis md-header-nav__title" data-md-component=title>
                        <span class=md-header-nav__topic>Turing.jl</span>
                    </div>
                    </a>
                </div>

                <div class="md-flex__cell md-flex__cell--shrink">
                  <div class="md-header-nav__source">
                    <div class="dropdown version-switch">
                      <a class="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      </a>
                      <div class="dropdown-menu">
                        <!-- a class="dropdown-item" href="#">Stable</a -->
                        <!-- div class="dropdown-divider"></div -->
                      </div>
                    </div>
                  </div>
                </div>

                <div class="md-flex__cell md-flex__cell--shrink">
                  <div class="md-header-nav__source">
                    <a class="md-source" href="/dev/docs/using-turing/get-started" title="Get started">
                      Get Started
                    </a>
                  </div>
                </div>

                <div class="md-flex__cell md-flex__cell--shrink">
                    <div class="md-header-nav__source">
                      <a class="md-source" href="/dev/docs/using-turing/" title="View documentation">
                        Documentation
                      </a>
                    </div>
                  </div>

                  <div class="md-flex__cell md-flex__cell--shrink">
                      <div class="md-header-nav__source">
                        <a class="md-source" href="/dev/tutorials/" title="View tutorials">
                          Tutorials
                        </a>
                      </div>
                    </div>

                    <div class="md-flex__cell md-flex__cell--shrink">
                      <div class="md-header-nav__source">
                        <a class="md-source" href="/dev/news/" title="News">
                          News
                        </a>
                      </div>
                    </div>

                    <div class="md-flex__cell md-flex__cell--shrink">
                      <div class="md-header-nav__source">
                        <a class="md-source" href="/dev/team/" title="Team">
                          Team
                        </a>
                      </div>
                    </div>

                <div class="md-flex__cell md-flex__cell--shrink">
                  <div class="md-header-nav__source">
                    <a class="md-source" data-md-source="github" href="https://github.com/TuringLang/Turing.jl" title="Go to repository">
                    <div class="md-source__icon" style="padding-top:5px">
                      <i class="fa fa-github fa-3x"></i>
                    </div>
                    <div class="md-source__repository">
                      TuringLang/Turing.jl
                    </div></a>
                  </div>
                </div>

                <div class="md-flex__cell md-flex__cell--shrink">
                  <div class="md-header-nav__source">
                    <a href="https://twitter.com/TuringLang?ref_src=twsrc%5Etfw" class="twitter-follow-button"
                       data-size="large" data-show-screen-name="false" data-show-count="false">Follow @TuringLang</a>
                    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                  </div>
                </div>

                <div class="md-flex__cell md-flex__cell--shrink">
                    <label class="md-icon md-icon--search md-header-nav__button" for=__search></label>
                    <div class=md-search data-md-component=search role=dialog>
                        <label class=md-search__overlay for=__search></label>
                        <div class=md-search__inner role=search>
                            <form class=md-search__form name=search>
                                <input type=text class=md-search__input name=query placeholder=Search autocapitalize=off autocorrect=off autocomplete=off spellcheck=false data-md-component=query data-md-state=active>
                                <label class="md-icon md-search__icon" for=__search></label>
                                <button type=reset class="md-icon md-search__icon" data-md-component=reset tabindex=-1> &#xE5CD; </button>
                            </form>
                            <div class=md-search__output>
                                <div class=md-search__scrollwrap data-md-scrollfix>
                                    <div class=md-search-result data-md-component=result>
                                        <div class=md-search-result__meta> Type to start searching </div>
                                        <ol class=md-search-result__list></ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  </nav>
</header>


    <div class="md-container">
        <main class="md-main">
            <div class="md-main__inner md-grid full-width" data-md-component="container">
            
<div class="md-sidebar md-sidebar--primary" data-md-component="navigation">
  <div class="md-sidebar__scrollwrap">
    <div class="md-sidebar__inner">
      <nav class="md-nav md-nav--primary" data-md-level="0">

        <label class="md-nav__title md-nav__title--site">
            <a class="" href="/dev/" title="Turing.jl">
              <span class="md-nav__button md-logo">
                Turing.jl
              </span>
            </a>
        </label>

        <ul class="md-nav__list" data-md-scrollfix="">
          <li class="md-nav__item md-nav__item--active">
            <input class="md-toggle md-nav__toggle" data-md-toggle="toc" id="__toc" type="checkbox" />

            <nav class="md-nav md-nav--secondary">

                <a class="" href="/dev/" title="Turing.jl">
                  <label class="md-nav__title md-nav__title--site">
                    <span class="md-nav__button md-logo">
                      Turing.jl
                    </span>
                  </label>
                </a>

                <div class="md-nav__source">
                    <a class="md-source" data-md-source="github" href="https://github.com/TuringLang/Turing.jl" title="Go to repository">
                    <span class="md-source__icon">
                        <i class="fa fa-github fa-3x"></i>
                    </span>
                    <span class="md-source__repository">
                      TuringLang/Turing.jl
                    </span></a>
                </div>

                <div class="md-nav__dropdown">
                  <select id="version-selector">
                    <!-- option value="#" selected="selected">v 0.5.1</option -->
                  </select>
                </div>

              <label class="md-nav__title" for="__drawer"></label>

              

                <ul class="md-nav__list" data-md-scrollfix="">
                  
                  
                  
                  <li class="md-nav__item md-nav__item--nested navbar_bottom-border">
                    <a class="md-nav__link pancakes-parent-mobile"
                    id="pancakes-using-turing" title="USING TURING">USING TURING</a>
                    
                    <nav class="md-nav md-nav--secondary">
                      <a class="md-nav__title mobile-navbar-back" for="__toc">Table of contents</a>
                      <ul class="md-nav__list" data-md-scrollfix="">
                        
                        <li class="md-nav__item navbar_bottom-border">
                          <a class="md-nav__link" href="/dev/docs/using-turing/get-started"
                              id="pancakes-getting-started"
                              title="Getting Started">Getting Started</a>
                        </li>
                        
                        <li class="md-nav__item navbar_bottom-border">
                          <a class="md-nav__link" href="/dev/docs/using-turing/quick-start"
                              id="pancakes-quick-start"
                              title="Quick Start">Quick Start</a>
                        </li>
                        
                        <li class="md-nav__item navbar_bottom-border">
                          <a class="md-nav__link" href="/dev/docs/using-turing/guide"
                              id="pancakes-guide"
                              title="Guide">Guide</a>
                        </li>
                        
                        <li class="md-nav__item navbar_bottom-border">
                          <a class="md-nav__link" href="/dev/docs/using-turing/advanced"
                              id="pancakes-advanced-usage"
                              title="Advanced Usage">Advanced Usage</a>
                        </li>
                        
                        <li class="md-nav__item navbar_bottom-border">
                          <a class="md-nav__link" href="/dev/docs/using-turing/autodiff"
                              id="pancakes-automatic-differentiation"
                              title="Automatic Differentiation">Automatic Differentiation</a>
                        </li>
                        
                        <li class="md-nav__item navbar_bottom-border">
                          <a class="md-nav__link" href="/dev/docs/using-turing/performancetips"
                              id="pancakes-performance-tips"
                              title="Performance Tips">Performance Tips</a>
                        </li>
                        
                        <li class="md-nav__item navbar_bottom-border">
                          <a class="md-nav__link" href="/dev/docs/using-turing/dynamichmc"
                              id="pancakes-using-dynamichmc"
                              title="Using DynamicHMC">Using DynamicHMC</a>
                        </li>
                        
                        <li class="md-nav__item navbar_bottom-border">
                          <a class="md-nav__link" href="/dev/docs/using-turing/sampler-viz"
                              id="pancakes-sampler-visualization"
                              title="Sampler Visualization">Sampler Visualization</a>
                        </li>
                        
                      </ul>
                    </nav>
                    
                  </li>
                  
                  
                  <li class="md-nav__item md-nav__item--nested navbar_bottom-border">
                    <a class="md-nav__link pancakes-parent-mobile"
                    id="pancakes-for-developers" title="FOR DEVELOPERS">FOR DEVELOPERS</a>
                    
                    <nav class="md-nav md-nav--secondary">
                      <a class="md-nav__title mobile-navbar-back" for="__toc">Table of contents</a>
                      <ul class="md-nav__list" data-md-scrollfix="">
                        
                        <li class="md-nav__item navbar_bottom-border">
                          <a class="md-nav__link" href="/dev/docs/for-developers/compiler"
                              id="pancakes-turing-compiler-design"
                              title="Turing Compiler Design">Turing Compiler Design</a>
                        </li>
                        
                        <li class="md-nav__item navbar_bottom-border">
                          <a class="md-nav__link" href="/dev/docs/for-developers/interface"
                              id="pancakes-interface-guide"
                              title="Interface Guide">Interface Guide</a>
                        </li>
                        
                        <li class="md-nav__item navbar_bottom-border">
                          <a class="md-nav__link" href="/dev/docs/for-developers/how_turing_implements_abstractmcmc"
                              id="pancakes-how-turing-implements-abstractmcmc"
                              title="How Turing implements AbstractMCMC">How Turing implements AbstractMCMC</a>
                        </li>
                        
                        <li class="md-nav__item navbar_bottom-border">
                          <a class="md-nav__link" href="/dev/docs/for-developers/variational_inference"
                              id="pancakes-variational-inference"
                              title="Variational Inference">Variational Inference</a>
                        </li>
                        
                      </ul>
                    </nav>
                    
                  </li>
                  
                  
                  <li class="md-nav__item md-nav__item--nested navbar_bottom-border">
                    <a class="md-nav__link pancakes-parent-mobile"
                    id="pancakes-tutorials" title="TUTORIALS">TUTORIALS</a>
                    
                    <nav class="md-nav md-nav--secondary">
                      <a class="md-nav__title mobile-navbar-back" for="__toc">Table of contents</a>
                      <ul class="md-nav__list" data-md-scrollfix="">
                        
                        <li class="md-nav__item navbar_bottom-border">
                          <a class="md-nav__link" href="/dev/tutorials"
                              id="pancakes-home"
                              title="Home">Home</a>
                        </li>
                        
                        <li class="md-nav__item navbar_bottom-border">
                          <a class="md-nav__link" href="/dev/tutorials/0-introduction"
                              id="pancakes-introduction-to-turing"
                              title="Introduction to Turing">Introduction to Turing</a>
                        </li>
                        
                        <li class="md-nav__item navbar_bottom-border">
                          <a class="md-nav__link" href="/dev/tutorials/1-gaussianmixturemodel"
                              id="pancakes-gaussian-mixture-models"
                              title="Gaussian Mixture Models">Gaussian Mixture Models</a>
                        </li>
                        
                        <li class="md-nav__item navbar_bottom-border">
                          <a class="md-nav__link" href="/dev/tutorials/2-logisticregression"
                              id="pancakes-bayesian-logistic-regression"
                              title="Bayesian Logistic Regression">Bayesian Logistic Regression</a>
                        </li>
                        
                        <li class="md-nav__item navbar_bottom-border">
                          <a class="md-nav__link" href="/dev/tutorials/3-bayesnn"
                              id="pancakes-bayesian-neural-networks"
                              title="Bayesian Neural Networks">Bayesian Neural Networks</a>
                        </li>
                        
                        <li class="md-nav__item navbar_bottom-border">
                          <a class="md-nav__link" href="/dev/tutorials/4-bayeshmm"
                              id="pancakes-hidden-markov-models"
                              title="Hidden Markov Models">Hidden Markov Models</a>
                        </li>
                        
                        <li class="md-nav__item navbar_bottom-border">
                          <a class="md-nav__link" href="/dev/tutorials/5-linearregression"
                              id="pancakes-linear-regression"
                              title="Linear Regression">Linear Regression</a>
                        </li>
                        
                        <li class="md-nav__item navbar_bottom-border">
                          <a class="md-nav__link" href="/dev/tutorials/6-infinitemixturemodel"
                              id="pancakes-infinite-mixture-models"
                              title="Infinite Mixture Models">Infinite Mixture Models</a>
                        </li>
                        
                        <li class="md-nav__item navbar_bottom-border">
                          <a class="md-nav__link" href="/dev/tutorials/7-poissonregression"
                              id="pancakes-bayesian-poisson-regression"
                              title="Bayesian Poisson Regression">Bayesian Poisson Regression</a>
                        </li>
                        
                        <li class="md-nav__item navbar_bottom-border">
                          <a class="md-nav__link" href="/dev/tutorials/8-multinomiallogisticregression"
                              id="pancakes-multinomial-logistic-regression"
                              title="Multinomial Logistic Regression">Multinomial Logistic Regression</a>
                        </li>
                        
                        <li class="md-nav__item navbar_bottom-border">
                          <a class="md-nav__link" href="/dev/tutorials/9-variationalinference"
                              id="pancakes-variational-inference"
                              title="Variational Inference">Variational Inference</a>
                        </li>
                        
                        <li class="md-nav__item navbar_bottom-border">
                          <a class="md-nav__link" href="/dev/tutorials/10-bayesiandiffeq"
                              id="pancakes-bayesian-differential-equation"
                              title="Bayesian Differential Equation">Bayesian Differential Equation</a>
                        </li>
                        
                      </ul>
                    </nav>
                    
                  </li>
                  
                  
                  <li class="md-nav__item md-nav__item--nested navbar_bottom-border">
                    <a class="md-nav__link pancakes-parent-mobile"
                    id="pancakes-api" title="API">API</a>
                    
                    <nav class="md-nav md-nav--secondary">
                      <a class="md-nav__title mobile-navbar-back" for="__toc">Table of contents</a>
                      <ul class="md-nav__list" data-md-scrollfix="">
                        
                        <li class="md-nav__item navbar_bottom-border">
                          <a class="md-nav__link" href="/dev/docs/library"
                              id="pancakes-turing"
                              title="Turing">Turing</a>
                        </li>
                        
                        <li class="md-nav__item navbar_bottom-border">
                          <a class="md-nav__link" href="/dev/docs/library/advancedhmc/"
                              id="pancakes-advancedhmc"
                              title="AdvancedHMC">AdvancedHMC</a>
                        </li>
                        
                        <li class="md-nav__item navbar_bottom-border">
                          <a class="md-nav__link" href="/dev/docs/library/bijectors/"
                              id="pancakes-bijectors"
                              title="Bijectors">Bijectors</a>
                        </li>
                        
                      </ul>
                    </nav>
                    
                  </li>
                  
                  
                  <li class="md-nav__item md-nav__item--nested navbar_bottom-border">
                    <a class="md-nav__link pancakes-parent-mobile"
                    id="pancakes-contributing" title="CONTRIBUTING">CONTRIBUTING</a>
                    
                    <nav class="md-nav md-nav--secondary">
                      <a class="md-nav__title mobile-navbar-back" for="__toc">Table of contents</a>
                      <ul class="md-nav__list" data-md-scrollfix="">
                        
                        <li class="md-nav__item navbar_bottom-border">
                          <a class="md-nav__link" href="/dev/docs/contributing/guide"
                              id="pancakes-how-to-contribute"
                              title="How to Contribute">How to Contribute</a>
                        </li>
                        
                        <li class="md-nav__item navbar_bottom-border">
                          <a class="md-nav__link" href="/dev/docs/contributing/style-guide"
                              id="pancakes-style-guide"
                              title="Style Guide">Style Guide</a>
                        </li>
                        
                      </ul>
                    </nav>
                    
                  </li>
                  
                </ul>
            </nav>
          </li>

          <!-- This navigation is completely for mobile -->
          <li class="md-nav__item mobile-nav" style="display:none">
            <a class="md-nav__link" title="USING TURING">USING TURING</a>
          </li><li class="md-nav__item mobile-nav" style="display:none">
            <a class="md-nav__link" title="FOR DEVELOPERS">FOR DEVELOPERS</a>
          </li><li class="md-nav__item mobile-nav" style="display:none">
            <a class="md-nav__link" title="TUTORIALS">TUTORIALS</a>
          </li><li class="md-nav__item mobile-nav" style="display:none">
            <a class="md-nav__link" title="API">API</a>
          </li><li class="md-nav__item mobile-nav" style="display:none">
            <a class="md-nav__link" title="CONTRIBUTING">CONTRIBUTING</a>
          </li>

          <!-- This navigation is completely for non mobile -->
          

         
         
         <li class="md-nav__item md-nav__item--nested not-mobile-nav invisible">
             <a class="md-nav__link pancakes-parent "
                id="pancakes-using-turing"
                title="USING TURING">USING TURING</a>
                
                <nav class="md-nav">
                    <ul class="md-nav__list">
                        
                        
                        <li class="md-nav__item">
                        <a href="/dev/docs/using-turing/get-started"
                           title="Getting Started" style="display:none;"
                           
                           class="md-nav__link pancakes-child">Getting Started</a>
                        </li>
                        
                        <li class="md-nav__item">
                        <a href="/dev/docs/using-turing/quick-start"
                           title="Quick Start" style="display:none;"
                           
                           class="md-nav__link pancakes-child">Quick Start</a>
                        </li>
                        
                        <li class="md-nav__item">
                        <a href="/dev/docs/using-turing/guide"
                           title="Guide" style="display:none;"
                           
                           class="md-nav__link pancakes-child">Guide</a>
                        </li>
                        
                        <li class="md-nav__item">
                        <a href="/dev/docs/using-turing/advanced"
                           title="Advanced Usage" style="display:none;"
                           
                           class="md-nav__link pancakes-child">Advanced Usage</a>
                        </li>
                        
                        <li class="md-nav__item">
                        <a href="/dev/docs/using-turing/autodiff"
                           title="Automatic Differentiation" style="display:none;"
                           
                           class="md-nav__link pancakes-child">Automatic Differentiation</a>
                        </li>
                        
                        <li class="md-nav__item">
                        <a href="/dev/docs/using-turing/performancetips"
                           title="Performance Tips" style="display:none;"
                           
                           class="md-nav__link pancakes-child">Performance Tips</a>
                        </li>
                        
                        <li class="md-nav__item">
                        <a href="/dev/docs/using-turing/dynamichmc"
                           title="Using DynamicHMC" style="display:none;"
                           
                           class="md-nav__link pancakes-child">Using DynamicHMC</a>
                        </li>
                        
                        <li class="md-nav__item">
                        <a href="/dev/docs/using-turing/sampler-viz"
                           title="Sampler Visualization" style="display:none;"
                           
                           class="md-nav__link pancakes-child">Sampler Visualization</a>
                        </li>
                    </ul>
                </nav>
                
         </li>
         
         
         <li class="md-nav__item md-nav__item--nested not-mobile-nav invisible">
             <a class="md-nav__link pancakes-parent "
                id="pancakes-for-developers"
                title="FOR DEVELOPERS">FOR DEVELOPERS</a>
                
                <nav class="md-nav">
                    <ul class="md-nav__list">
                        
                        
                        <li class="md-nav__item">
                        <a href="/dev/docs/for-developers/compiler"
                           title="Turing Compiler Design" style="display:none;"
                           
                           class="md-nav__link pancakes-child">Turing Compiler Design</a>
                        </li>
                        
                        <li class="md-nav__item">
                        <a href="/dev/docs/for-developers/interface"
                           title="Interface Guide" style="display:none;"
                           
                           class="md-nav__link pancakes-child">Interface Guide</a>
                        </li>
                        
                        <li class="md-nav__item">
                        <a href="/dev/docs/for-developers/how_turing_implements_abstractmcmc"
                           title="How Turing implements AbstractMCMC" style="display:none;"
                           
                           class="md-nav__link pancakes-child">How Turing implements AbstractMCMC</a>
                        </li>
                        
                        <li class="md-nav__item">
                        <a href="/dev/docs/for-developers/variational_inference"
                           title="Variational Inference" style="display:none;"
                           
                           class="md-nav__link pancakes-child">Variational Inference</a>
                        </li>
                    </ul>
                </nav>
                
         </li>
         
         
         <li class="md-nav__item md-nav__item--nested not-mobile-nav invisible">
             <a class="md-nav__link pancakes-parent "
                id="pancakes-tutorials"
                title="TUTORIALS">TUTORIALS</a>
                
                <nav class="md-nav">
                    <ul class="md-nav__list">
                        
                        
                        <li class="md-nav__item">
                        <a href="/dev/tutorials"
                           title="Home" style="display:none;"
                           
                           class="md-nav__link pancakes-child">Home</a>
                        </li>
                        
                        <li class="md-nav__item">
                        <a href="/dev/tutorials/0-introduction"
                           title="Introduction to Turing" style="display:none;"
                           
                           class="md-nav__link pancakes-child">Introduction to Turing</a>
                        </li>
                        
                        <li class="md-nav__item">
                        <a href="/dev/tutorials/1-gaussianmixturemodel"
                           title="Gaussian Mixture Models" style="display:none;"
                           
                           class="md-nav__link pancakes-child">Gaussian Mixture Models</a>
                        </li>
                        
                        <li class="md-nav__item">
                        <a href="/dev/tutorials/2-logisticregression"
                           title="Bayesian Logistic Regression" style="display:none;"
                           
                           class="md-nav__link pancakes-child">Bayesian Logistic Regression</a>
                        </li>
                        
                        <li class="md-nav__item">
                        <a href="/dev/tutorials/3-bayesnn"
                           title="Bayesian Neural Networks" style="display:none;"
                           
                           class="md-nav__link pancakes-child">Bayesian Neural Networks</a>
                        </li>
                        
                        <li class="md-nav__item">
                        <a href="/dev/tutorials/4-bayeshmm"
                           title="Hidden Markov Models" style="display:none;"
                           
                           class="md-nav__link pancakes-child">Hidden Markov Models</a>
                        </li>
                        
                        <li class="md-nav__item">
                        <a href="/dev/tutorials/5-linearregression"
                           title="Linear Regression" style="display:none;"
                           
                           class="md-nav__link pancakes-child">Linear Regression</a>
                        </li>
                        
                        <li class="md-nav__item">
                        <a href="/dev/tutorials/6-infinitemixturemodel"
                           title="Infinite Mixture Models" style="display:none;"
                           
                           class="md-nav__link pancakes-child">Infinite Mixture Models</a>
                        </li>
                        
                        <li class="md-nav__item">
                        <a href="/dev/tutorials/7-poissonregression"
                           title="Bayesian Poisson Regression" style="display:none;"
                           
                           class="md-nav__link pancakes-child">Bayesian Poisson Regression</a>
                        </li>
                        
                        <li class="md-nav__item">
                        <a href="/dev/tutorials/8-multinomiallogisticregression"
                           title="Multinomial Logistic Regression" style="display:none;"
                           
                           class="md-nav__link pancakes-child">Multinomial Logistic Regression</a>
                        </li>
                        
                        <li class="md-nav__item">
                        <a href="/dev/tutorials/9-variationalinference"
                           title="Variational Inference" style="display:none;"
                           
                           class="md-nav__link pancakes-child">Variational Inference</a>
                        </li>
                        
                        <li class="md-nav__item">
                        <a href="/dev/tutorials/10-bayesiandiffeq"
                           title="Bayesian Differential Equation" style="display:none;"
                           
                           class="md-nav__link pancakes-child">Bayesian Differential Equation</a>
                        </li>
                    </ul>
                </nav>
                
         </li>
         
         
         <li class="md-nav__item md-nav__item--nested not-mobile-nav invisible">
             <a class="md-nav__link pancakes-parent "
                id="pancakes-api"
                title="API">API</a>
                
                <nav class="md-nav">
                    <ul class="md-nav__list">
                        
                        
                        <li class="md-nav__item">
                        <a href="/dev/docs/library"
                           title="Turing" style="display:none;"
                           
                           class="md-nav__link pancakes-child">Turing</a>
                        </li>
                        
                        <li class="md-nav__item">
                        <a href="/dev/docs/library/advancedhmc/"
                           title="AdvancedHMC" style="display:none;"
                           
                           class="md-nav__link pancakes-child">AdvancedHMC</a>
                        </li>
                        
                        <li class="md-nav__item">
                        <a href="/dev/docs/library/bijectors/"
                           title="Bijectors" style="display:none;"
                           
                           class="md-nav__link pancakes-child">Bijectors</a>
                        </li>
                    </ul>
                </nav>
                
         </li>
         
         
         <li class="md-nav__item md-nav__item--nested not-mobile-nav invisible">
             <a class="md-nav__link pancakes-parent "
                id="pancakes-contributing"
                title="CONTRIBUTING">CONTRIBUTING</a>
                
                <nav class="md-nav">
                    <ul class="md-nav__list">
                        
                        
                        <li class="md-nav__item">
                        <a href="/dev/docs/contributing/guide"
                           title="How to Contribute" style="display:none;"
                           
                           class="md-nav__link pancakes-child">How to Contribute</a>
                        </li>
                        
                        <li class="md-nav__item">
                        <a href="/dev/docs/contributing/style-guide"
                           title="Style Guide" style="display:none;"
                           
                           class="md-nav__link pancakes-child">Style Guide</a>
                        </li>
                    </ul>
                </nav>
                
         </li>
         
         

        </ul>
      </nav>
    </div>
  </div>
</div>


<div class="md-sidebar md-sidebar--secondary invisible" data-md-component="toc">
  <div class="md-sidebar__scrollwrap">
    <div class="md-sidebar__inner">
      <nav class="md-nav md-nav--secondary">
        <label class="md-nav__title" for="__toc">Table of contents</label>
        <ul id="nav-toc" class="md-nav__list" data-md-scrollfix="">
        <!-- toc will be appended here!-->
        </ul>
        <a href="https://twitter.com/intent/tweet?original_referer=https://github.com/TuringLang/Turing.jl/edit/master/docs/srcassets/js/index.js" title="Tweet this page" class="social-link"><i class="fa fa-twitter fa-1x"></i>Tweet this page</a>
        <a href="https://discourse.julialang.org/c/domain/probprog" title="Ask questions" class="social-link"><i class="fa fa-stack-overflow fa-1x"></i>Ask questions</a>
        <a href="https://github.com/TuringLang/Turing.jl//issues/new?label=question&title=Question:&body=Question%20on:%20https://github.com/TuringLang/Turing.jl/edit/master/docs/assets/js/index.js" title="Report issues" class="social-link"><i class="fa fa-comments fa-1x"></i>Report issues</a>
        <a href="https://github.com/TuringLang/Turing.jl/edit/master/docs/srcassets/js/index.js" title="Edit this page on github"  class="social-link"><i class="fa fa-github fa-1x"></i> Edit me</a>
      </nav>
    </div>
  </div>
</div>

                <div id="md-container-pancakes">
                <div class="md-content full-width"> 
    <article class="md-content__inner md-typeset  full-width">
    $(document).ready(function(){
    $('.md-header').attr('data-md-state', 'none');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 20) {
            $('.md-header').attr('data-md-state', 'shadow');
        } else {
            $('.md-header').attr('data-md-state', 'none');
        }
    });
});

    
<script
src="https://code.jquery.com/jquery-3.3.1.min.js"
integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
crossorigin="anonymous"></script>

<script>
$(document).ready(function() {

    var toc = $('#nav-toc');

    // Select each header
    sections = $('#md-container-pancakes h1');
        $.each(sections, function(idx, v) {
            section = $(v);
            var div_id = $(section).attr('id');
            var div_text = section.text().split('¶')[0];
            var parent = $("#" + div_id)
            var content = '<li id="link_' + div_id + '" class="md-nav__item"><a class="md-nav__link toc-side-bar" href="#' + div_id + '" title="' + div_text +'">' + div_text +'</a></li>';
            $(toc).append(content);

            // Add section code to subnavigation
            var children = $('<nav class="md-nav"><ul class="md-nav__list"></nav></ul>')
            var contenders = $("#" + div_id).nextUntil( "h1" );
            $.each(contenders, function(idx, contender){
            if($(contender).is('h2')) {
                var contender_id = $(contender).attr('id');
                var contender_text = $(contender).text().split('¶')[0];
                var content = '<li class="md-nav__item"><a class="md-nav__link toc-side-bar" href="#' + contender_id + '" title="' + contender_text +'">' + contender_text +'</a></li>';
                children.append(content);
                }
            })
            $("#link_" + div_id).append(children);
        });
    });
</script>
    <!-- this will parse through the header fields and add a button to open
     an issue / ask a question on Github. The editable field should be in
     the post frontend matter, and refer to the label to open the issue for -->

<style>
.more {
    float:right;
    font-size: 1.0rem !important;
}
.more:hover {
    color: cornflowerblue !important;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    font-weight: 200;
    box-shadow: 0px 8px 6px 0px rgba(0,0,0,0.2);
    padding: 0px 10px;
    z-index: 1;
}

.dropdown:hover .dropdown-content {
    display: block;
}
</style>


    </article>
</div>      

                </div>
            </div>
        </main>
    </div>

    <footer class="c-footer md-footer-nav">
  <div class="md-footer-copyright__highlight">
    
    Turing is created by <a style="color:inherit; text-decoration: underline;" href="http://mlg.eng.cam.ac.uk/hong/">Hong Ge</a>, 
    and lovingly maintained by the <a style="color:inherit; text-decoration: underline;" href="https://github.com/TuringLang/Turing.jl/graphs/contributors">core team</a> of volunteers.

    <br><br>
    
    The contents of this website are
© 2020 under the terms of the <a style="color:inherit; text-decoration: underline;" href="https://github.com/TuringLang/Turing.jl/blob/master/LICENCE">MIT License</a>.
    
  </div>  
</footer>


    <script src="/dev/assets/js/application.js"></script>
    
    <script>console.log('4')</script>
    <script>app.initialize({version:"0.17.4", url:{base:'/dev'}})</script>

    
    <script src="/dev/assets/js/version-switch.js"></script>

    <script>
var headers = ["h1", "h2", "h3", "h4"]
var colors = ["red", "orange", "green", "blue"]

$.each(headers, function(i, header){
    var color = colors[i];
    $(header).each(function () {
        var href=$(this).attr("id");
        $(this).append('<a class="headerlink" style="color:' + color + '" href="#' + href + '" title="Permanent link">¶</a>')
    });
})

// Ensure that sidebar on left has arrows
$(".pancakes-parent").on('click', function(){
    console.log($(this).next());
    $(this).next().find('.pancakes-child').toggle();
    if ($(this).hasClass('open-parent')){
        $(this).removeClass('open-parent');
    } else {
        $(this).addClass('open-parent');
    }
})

$(".pancakes-parent-mobile").on('click', function(){
    var nav = $(this).next();
     nav.addClass('mobile-sub-navbar-display');
})

$(".mobile-navbar-back").on('click', function(){
    var nav = $(this).parent();
    nav.removeClass('mobile-sub-navbar-display');
})

</script>
<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-MML-AM_CHTML">
</script>

    

    <style>
#scrolltop {
  display: none; /* Hidden by default */
  position: fixed; /* Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 30px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  background-color: #d2e6f5; /* Set a background color */
  color: white; /* Text color */
  cursor: pointer; /* Add a mouse pointer on hover */
  padding: 10px 15px; /* Some padding */
  border-radius: 100px; /* Rounded corners */
  font-size: 18px; /* Increase font size */
  font-weight: 600;
}

#scrolltop:hover {
  background-color: #555; /* Add a dark-grey background on hover */
}
</style>
<button onclick="topFunction()" id="scrolltop" title="Go to top">🔝</button>

<script>
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrolltop").style.display = "block";
  } else {
    document.getElementById("scrolltop").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
</script>

    


  </body>
</html>