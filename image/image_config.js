// 图片配置文件
// 您可以在这里修改所有图片的路径

const imageConfig = {
    // 个人头像
    profile: {
        placeholder: 'images/profile_placeholder.jpg',
        alt: '个人头像'
    },
    
    // 项目图片
    projects: {
        project1: 'images/project1_placeholder.jpg',
        project2: 'images/project2_placeholder.jpg',
        project3: 'images/project3_placeholder.jpg'
    },
    
    // 证书图片
    certificates: {
        cert1: 'images/certificate1_placeholder.jpg',
        cert2: 'images/certificate2_placeholder.jpg',
        cert3: 'images/certificate3_placeholder.jpg'
    },
    
    // 教育背景相关图片
    education: {
        diploma: 'images/diploma_placeholder.jpg',
        school: 'images/school_placeholder.jpg'
    },
    
    // 工作经历相关图片
    experience: {
        company1: 'images/company1_placeholder.jpg',
        company2: 'images/company2_placeholder.jpg',
        company3: 'images/company3_placeholder.jpg'
    }
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = imageConfig;
}