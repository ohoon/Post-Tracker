import React from 'react';

export function Footer() {
    return (
        <div className="footer my-4">
            <small
                className="text-muted"
            >
                본 사이트는 조회 속도 향상을 위해 조회 데이터(등기 번호, 배송 정보)를 잠시 보관하고 1분 후에 폐기합니다.
            </small>
            <br/>
            <small
                className="text-muted"
            >
                위 사항을 제외한 모든 경우에서 사용자 데이터를 일절 보관하지 않습니다.
            </small>
            <hr/>
            <p
                className="text-muted"
            >
                &copy; Post Tracker
            </p>
            <a
                href="https://github.com/ohoon/post-tracker"
            >
                https://github.com/ohoon/post-tracker
            </a>
        </div>
    );
}
