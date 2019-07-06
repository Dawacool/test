import React from 'react';

const Berita = (props) => {
    const { berita } = props;
    return (
        <div className="col-md-6">
            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">{berita.document_type}</strong>
                    <h3 className="mb-0">{berita.snippet}</h3>
                    <div className="mb-1 text-muted">{berita.pub_date}</div>
                    <p className="card-text mb-auto">{berita.lead_paragraph}</p>
                    <a href={berita.web_url}>Read More</a>
                </div>
            </div>
        </div>
    )
}

export default Berita;