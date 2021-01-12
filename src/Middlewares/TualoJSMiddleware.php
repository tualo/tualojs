<?php

namespace Tualo\Office\TualoJS\Middlewares;
use Tualo\Office\Basic\TualoApplication as APP;
use Tualo\Office\Basic\IMiddleware;

class TualoJSMiddleware implements IMiddleware{
    public static function register(){
        APP::use('tualojs',function(){
            try{
                // TualoApplication::stylesheet("./theme-material/resources/theme-material-all.css" ,12);
                // TualoApplication::stylesheet("./theme/loader/style.css" ,12);
                APP::javascript(  'tualojs_stringarray', './tualojs/data/field/Array.js', [], 1 );
            }catch(Exception $e){
                APP::set('maintanceMode','on');
                APP::addError($e->getMessage());
            }
        },-100); // should be one of the last
    }
}