import Image from 'next/image'

const ValidationResult = ({ isValid }) => {
    let imgSrc;
    let validationResultText = '';
    if (isValid) {
        imgSrc = '/valid.png';
        validationResultText = 'valid';
    } else {
        imgSrc = '/invalid.png';
        validationResultText = 'invalid';
    }

    return (
        <div className={'validationResultDiv'}>
            <span>Validation Result: </span>
            <Image src={imgSrc} alt="validationresult" width={24} height={24} className={'validationResultIcon'} />
            <span className={isValid ? 'validationResultInfoSuccess' : 'validationResultInfoFail'}>
                {validationResultText}
            </span>
        </div>
    );
};

export default ValidationResult;
