import React from "react";

function Hello2() {
    let name = 'JavaScript';

    return(
        <React.Fragment>
            {/* Hello2 컴포넌트 */}
            <section className="section01" id="section01">
                Hello {name} in Hello Component
            </section>
            <section className="section02" id="section02">
                Hello {name} in Hello Component
            </section>
        </React.Fragment>

    );

}

export default Hello2;