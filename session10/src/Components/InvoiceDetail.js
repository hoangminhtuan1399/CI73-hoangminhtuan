import { useParams } from "react-router-dom";

const InvoiceDetail = () => {
    const params = useParams();
    return (
        <div>
            <h3>Invoice ID: {params.invoiceId}</h3>
        </div>
    )
}

export default InvoiceDetail;