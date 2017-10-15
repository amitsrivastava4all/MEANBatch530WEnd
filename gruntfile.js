module.exports=function(grunt){
    
    console.log('Grunt Ready For Start...');
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        watch: {
            scripts: {
            tasks: ['uglify:myjs'],
            files: '**/*.js',    
        }
        },
        uglify: {
    myjs: {
      files: {
        'release/output.min.js': ['app.js', 'config.js','contactcontroller.js']
      }
    }
  }
    }
    
    );
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask("default",["watch"]);
}