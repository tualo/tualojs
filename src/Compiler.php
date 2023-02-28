<?php
namespace Tualo\Office\TualoJS;

use Tualo\Office\ExtJSCompiler\CompilerHelper;

class Compiler implements CompilerHelper {
    

    public static function getFiles(){
        return CompilerHelper::getFiles('tualojs',10000);

    }
}