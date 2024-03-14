
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); 
const Comment = require('../model/comment');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Comment Controller', () => {
    beforeEach(async () => {
        await Comment.deleteMany({});
    });

    describe('POST /comments', () => {
        it('should create a new comment', async () => {
            const res = await chai.request(app)
                .post('/comments')
                .send({
                    id: 1,
                    user_id: 33,
                    type: 'MBTI',
                    title: 'Test Comment',
                    body: 'This is a test comment'
                });
            
            expect(res).to.have.status(201);
            expect(res.body).to.have.property('id');
        });
    });
});
