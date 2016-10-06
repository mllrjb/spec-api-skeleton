'use strict';

require('require-yaml');
const gulp = require('gulp')
    , browserSync = require('browser-sync').create()
    , runSequence = require('run-sequence')
    , fs = require('fs-extra')
    , serveStatic = require('serve-static')
    , rootSwaggerDefaults = require('swagger-editor/config/defaults.json');

const swaggerDefaultsPath = '../swagger-defaults.yml'
    , specPath = 'app/api/spec.yml';

gulp.task('serve', () => {
  runSequence('clean', 'docs', () => {
    browserSync.init({
      server: ['./app', './dist'],
      port: 8000,
      open: false,
      middleware: [{
        route: '/swagger/config/defaults.json',
        handle: (req, res) => {
          res.writeHead(200, {'Content-Type': 'application/json'});
          const cfg = require(swaggerDefaultsPath);
          const defaults = Object.assign({}, rootSwaggerDefaults, cfg);
          res.write(JSON.stringify(defaults));
          res.end();
        }
      }, {
        route: '/swagger',
        handle: serveStatic('node_modules/swagger-editor')
      },{
        route: '/api/spec',
        handle: (req, res) => {
          if (req.method === 'GET') {
            res.writeHead(200, {'Content-Type': 'text/yaml'});
            const rs = fs.createReadStream(specPath);
            rs.on('open', () => {
              rs.pipe(res)
            });
            rs.on('error', (err) => {
              res.end(err);
            });
            // return YAML
          } else if (req.method === 'PUT') {
            // save YAML
            const ws = fs.createWriteStream(specPath);
            req.pipe(ws);

            req.on('end', () => {
              res.writeHead(204);
              res.end();
            });
          }
        }
      }]
    });
  });
});

module.exports = {
  reload: browserSync.reload
};
