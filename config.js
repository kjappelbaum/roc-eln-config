module.exports = {
  defaultEntry: function() {
    return {
      spectra: {
        nmr: [],
        ir: [],
        raman: [],
        mass: [],
        gc: [],
        lc: []
      }
    };
  },
  customDesign: {
    views: {
      lib: {
        getReference: [
          './getReference.js',
          'stock',
          'customApp',
          'sss',
          'stockSSS',
          'reactionSSS'
        ],
        getToc: ['./getToc.js', 'customApp'],
        nmr: ['./nmr.js', 'nmr'],
        ocl: [
          './openchemlib-core.js',
          'customApp',
          'sss',
          'stockSSS',
          'nmr'
        ],
        md5: ['./md5.js', 'dna']
      }
    }
  }
};
