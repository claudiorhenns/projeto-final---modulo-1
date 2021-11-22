


export function handleGenerateBackground(type){
    switch (type){

            case "MMORPG":
            return '#e66565';
        
            case "Shooter":
            return '#65e6ac';

            case 'MMO':
            return '#a165e6';

            case 'Social':
            return '#65d7e6';

            case 'Card Game':
            return '#659de6';

            case 'Normal':
            return '#bfc7c3';

            case 'Electric':
            return '#dbd963';

            case 'Strategy':
            return '#ab8b65';

            case 'Fantasy':
            return '#eb6bf2';

            case 'Fighting':
            return '#f2ae6b';

            case 'MOBA':
            return '#b082f5';

            case 'Rock':
            return '#9e9e9e';

            case 'Sports':
            return '#8cafba';

            case 'Battle Royale':
            return '#75768f';

            case 'Action RPG':
            return '#5f6063';

            default: return '#CCC';
           

    }

}

/*export {
     handleGenerateBackground
}*/