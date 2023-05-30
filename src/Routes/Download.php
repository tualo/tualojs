<?php
namespace Tualo\Office\TualoJS\Routes;
use Tualo\Office\Basic\TualoApplication;
use Tualo\Office\Basic\Route;
use Tualo\Office\Basic\IRoute;


class Download implements IRoute{
    public static function register(){


            
        Route::add('/tualo/download/(?P<file>[\w.\/\-]+)',function($matches){
            try{
                TualoApplication::contenttype('text/html');
                if (!file_exists(TualoApplication::get('tempPath').'/'.$matches['file'])){
                    TualoApplication::contenttype('text/html');
                    header("HTTP/1.0 404 Not Found");
                    exit();
                }else{
                    readfile(TualoApplication::get('tempPath').'/'.$matches['file']);
                    exit();
                }

            }catch(\Exception $e){
                echo $e->getMessage();
            }
        },['get','post'],true);
       

    }
}
