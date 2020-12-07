<?php

namespace tualo\Office\TualoJS\Middleware;
use tualo\Office\Basic\TualoApplication as APP;
use tualo\Office\Basic\IMiddleware;

class TualoJSMiddleware implements IMiddleware{
    public static function register(){
        APP::use('tualojs',function(){
            try{
                // TualoApplication::stylesheet("./theme-material/resources/theme-material-all.css" ,12);
                // TualoApplication::stylesheet("./theme/loader/style.css" ,12);
                // TualoApplication::javascript(  'tualojs_ajax', './tualojs/Ajax.js', [], 1 );
            }catch(Exception $e){
                APP::set('maintanceMode','on');
                APP::addError($e->getMessage());
            }
        },-100); // should be one of the last
    }
}