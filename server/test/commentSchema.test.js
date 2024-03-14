const expect = require('chai').expect;
const Comment = require('../model/comment');

describe('Comment Schema', () => {
    it('should be invalid if required fields are missing', (done) => {
        const comment = new Comment();
        comment.validate((err) => {
            expect(err.errors.id).to.exist;
            expect(err.errors.user_id).to.exist;
            expect(err.errors.type).to.exist;
            expect(err.errors.title).to.exist;
            expect(err.errors.body).to.exist;
            done();
        });
    });
});
