// 图片配置文件
// 您可以在这里修改所有图片的路径

const imageConfig = {
    // 个人头像
    profile: {
        placeholder: 'image/profile_placeholder.jpg',
        alt: '个人头像'
    },
    
    // 项目图片
    projects: {
        project1: 'image/project1_placeholder.jpg',
        project2: 'image/project2_placeholder.jpg',
        project3: 'image/project3_placeholder.jpg'
    },
    
    // 证书图片
    certificates: {
        cert1: 'image/certificate1_placeholder.jpg',
        cert2: 'image/certificate2_placeholder.jpg',
        cert3: 'image/certificate3_placeholder.jpg'
    },
    
    // 教育背景相关图片
    education: {
        diploma: 'image/diploma_placeholder.jpg',
        school: 'image/school_placeholder.jpg'
    },
    
    // 工作经历相关图片
    experience: {
        company1: 'image/company1_placeholder.jpg',
        company2: 'image/company2_placeholder.jpg',
        company3: 'image/company3_placeholder.jpg'
    }
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = imageConfig;
}
