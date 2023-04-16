document.getElementById('nft-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const address = document.getElementById('address').value;
    if (!address) {
        const alertDiv = document.createElement('div');
        alertDiv.classList.add("alert");
        alertDiv.textContent = "Please enter a valid address!";

        const resultsDiv = document.getElementById('result');
        resultsDiv.appendChild(alertDiv);

        setTimeout(function () {
            alertDiv.style.opacity = "0";
            setTimeout(function () {
                resultsDiv.removeChild(alertDiv);
            }, 600)
        }, 3000)
    }
    else{
        const nftId = mintNFT(address);
        const proof = showProofOfReserves(address);
        const nftImage = generateRandomNFT();
        const alertDiv = document.createElement('div');
        const result = document.getElementById('result');
        alertDiv.classList.add("alert");
        alertDiv.innerHTML = `
            <p>NFT minted with ID: ${nftId}</p>
            <p>Proof Of Reserves: ${proof}</p>
            <p>Your NFT image:<p>
            <img src="${nftImage}" width="200" height="200" />
        `;
        result.appendChild(alertDiv);
        setTimeout(function () {
            alertDiv.style.opacity = "0";
            setTimeout(function () {
                result.removeChild(alertDiv);
            }, 600)
        }, 3000)
    }

   function mintNFT(address) {
    //In the next iteration this function will need to interact with Polygon to mint NFT 
    //here we are simply generating a random number to denote an NFT ID 
    return Math.floor(Math.random() * 100000);
   }

   function showProofOfReserves(address) {
    //In the next iteration, this function must interact with a smart contract off a Dex or a
    //L1/L2 to get a proof of reserves
    //Here we are only generating a random number
        return Math.floor(Math.random() * 100000);
   }

   function generateRandomNFT() {
    const canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 200;
    const ctx = canvas.getContext('2d');

    //generate random color
    const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`

    //fill canvas with the color
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //return the canvas as a URL which can be used as an image source
    return canvas.toDataURL();
   }
});