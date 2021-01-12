<?php
namespace Tualo\Office\TualoJS\Routes;
use Tualo\Office\Basic\TualoApplication as APP;
use Tualo\Office\Basic\Route as BasicRoute;
use Tualo\Office\Basic\IRoute;


class TualoJSRoute implements IRoute{
    public static function register(){
        BasicRoute::add('/tualojs/(?P<file>[\/.\w\d\-\_]+).js',function($matches){
            if (file_exists( dirname(dirname(__DIR__)).'/js/'.$matches['file'].'.js')){
                APP::etagFile( dirname(dirname(__DIR__)).'/js/'.$matches['file'].'.js' , true);
            }
        },array('get'),false);
        
    }
}