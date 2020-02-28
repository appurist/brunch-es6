// See http://brunch.io for documentation.
module.exports = {
  // conventions: { assets: 'src/assets/**/*' },
  paths: {
    public: 'dist',
    watched: ['src']
  },
  files: {
    stylesheets: {
      joinTo: 'app.css'
    },
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!src)/, // Files that are not in `app` dir.
        'app.js': /^src/
      }
    }
  },
  plugins: {
    babel: {
      presets: ['latest']
    }
  }  
};
