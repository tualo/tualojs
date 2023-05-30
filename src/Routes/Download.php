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

                    $size = filesize(TualoApplication::get('tempPath').'/'.$matches['file']);

                    header('Content-Description: File Transfer');
                    header('Content-Type: '.mime_content_type(TualoApplication::get('tempPath').'/'.$matches['file']));
                    header('Content-Disposition: attachment; filename="'.$matches['file'].'"');
                    header('Content-Transfer-Encoding: binary');
                    header('Expires: 0');
                    header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
                    header('Pragma: public');
                    header('Content-Length: ' . $size);

                    readfile(TualoApplication::get('tempPath').'/'.$matches['file']);
                    exit();
                }

            }catch(\Exception $e){
                echo $e->getMessage();
            }
        },['get','post'],true);
       

    }
}
