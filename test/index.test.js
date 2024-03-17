const assert = require('assert');
const FormWizard = require('../src/formWizard');

describe('FormWizard', () => {
    it('should initialize with no steps', () => {
        const wizard = new FormWizard();
        assert.strictEqual(wizard.getCurrentStep(), null);
    });

    // Tambahkan unit test lainnya sesuai kebutuhan
});
