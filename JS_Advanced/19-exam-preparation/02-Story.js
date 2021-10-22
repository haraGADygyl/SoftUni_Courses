class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`
        }
        let username = this._likes[0];
        if (this._likes.length === 1) {
            return `${username} likes this story!`
        }

        return `${username} and ${this._likes.length - 1} others like this story!`
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error(`You can't like the same story twice!`)
        }

        if (username === this.creator) {
            throw new Error(`You can't like your own story!`)
        }

        this._likes.push(username)
        return `${username} liked ${this.title}!`

    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error(`You can't dislike this story!`)
        }

        this._likes = this._likes.filter(x => x.username === username)
        return `${username} disliked ${this.title}`

    }

    comment(username, content, id) {
        if (id === undefined || !this._comments.some(x => x.id === id)) {

            let newComment = {
                id: this._comments.length + 1,
                username: username,
                content: content,
                replies: [],
            }

            this._comments.push(newComment)

            return `${username} commented on ${this.title}`
        }

        let commentToReplyTo = this._comments.find(x => x.id === id)
        let replyNextId = commentToReplyTo.replies.length + 1
        let replyId = Number(`${commentToReplyTo.id}.${replyNextId}`)

        let newReply = {
            id: replyId,
            username: username,
            content: content,
        }

        commentToReplyTo.replies.push(newReply)
        return `You replied successfully`
    }

    toString(sortingType) {
        let sortingTypes = {
            asc: (a, b) => a.id - b.id,
            desc: (a, b) => b.id - a.id,
            username: (a, b) => a.username.localeCompare(b.username)
        }

        let sortedComments = this._comments.sort(sortingTypes[sortingType])
        sortedComments.forEach(x => x.replies.sort(sortingTypes[sortingType]))

        let commentsArr = [];
        for (const sortedComment of sortedComments) {
            let commentString = `-- ${sortedComment.id}. ${sortedComment.username}: ${sortedComment.content}`
            let replyString = sortedComment.replies
                .map(x => `--- ${x.id}. ${x.username}: ${x.content}`)
                .join('\n')

            replyString = sortedComment.replies.length > 0 ? `\n${replyString}` : '';

            let finalString = `${commentString}${replyString}`
            commentsArr.push(finalString)


        }
        let fullCommentsString = commentsArr.join('\n')

        let result = [];

        result.push(`Title: ${this.title}`)
        result.push(`Creator: ${this.creator}`)
        result.push(`Likes: ${this._likes.length}`)
        result.push(`Comments:`)
        result.push(`\n${fullCommentsString}`)

        return result.join('\n')

//         return `Title: ${this.title}
// Creator: ${this.creator}
// Likes: ${this._likes.length}
// Comments:
// ${fullCommentsString}\n`
    }
}


let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
