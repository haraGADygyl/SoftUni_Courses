class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {"picture": 200, "photo": 50, "item": 250};
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {

        if (this.possibleArticles.hasOwnProperty(articleModel.toLocaleLowerCase()) === false) {
            throw new Error(`This article model is not included in this gallery!`)
        }

        let currentA = this.listOfArticles.find(x => x.articleName === articleName && x.articleModel === articleModel);
        if (currentA) {
            currentA.quantity += quantity;
            return
        }

        this.listOfArticles.push({
            articleModel: articleModel.toLocaleLowerCase(),
            articleName,
            quantity,
        });

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest(guestName, personality) {
        if (this.guests.find(x => x.guestName === guestName)) {
            throw new Error(`${guestName} has already been invited.`)
        }

        let points = 0;
        if (personality === 'Vip') {
            points = 500;
        } else if (personality === 'Middle') {
            points = 250;
        } else {
            points = 50;
        }

        this.guests.push({
            guestName,
            points,
            purchaseArticle: 0
        });

        return `You have successfully invited ${guestName}!`
    }

    buyArticle(articleModel, articleName, guestName) {
        if (!this.listOfArticles.some(x => x.articleName === articleName && x.articleModel === articleModel)) {
            throw new Error(`This article is not found.`)
        }

        let currentArticle = this.listOfArticles.find(x => x.articleName === articleName && x.articleModel === articleModel);
        if (currentArticle.quantity === 0) {
            return `The ${articleName} is not available.`
        }

        let currentGuest = this.guests.find(x => x.guestName === guestName);
        if (currentGuest === undefined) {
            return `This guest is not invited.`
        }

        let currentArticleModel = currentArticle.articleModel
        let currentArticleModelPoints = this.possibleArticles[currentArticleModel]
        if (currentGuest.points < currentArticleModelPoints) {
            return `You need to more points to purchase the article.`
        }

        currentGuest.points -= currentArticleModelPoints;
        currentArticle.quantity--;
        currentGuest.purchaseArticle++;

        return `${guestName} successfully purchased the article worth ${currentArticleModelPoints} points.`
    }

    showGalleryInfo(criteria) {

        let listOfArticle = [];

        if (criteria === 'article') {
            listOfArticle.push(`Articles information:`);

            this.listOfArticles.forEach(x => listOfArticle.push(`${x.articleModel} - ${x.articleName} - ${x.quantity}`))
        } else {
            listOfArticle.push(`Guests information:`);

            this.guests.forEach(x => listOfArticle.push(`${x.guestName} - ${x.purchaseArticle}`))
        }


        return listOfArticle.join('\n');
    }
}

// 1
// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));

// 2
// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));

// 3
// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

// 4
const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));

